import { ReactElement, useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { BiRocket } from "react-icons/bi";
import { useQueryClient } from "@tanstack/react-query";

import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";
import { Spinner } from "shared-ui/common/atom/spinner";

import { useToast } from "@/globalStates/useToast";
import {
  jdEditConfirmEvent,
  jdEditDoneEvent,
  jdEditExitDoneEvent,
  jdEditExitEvent,
  jdEditFailEvent,
  jdEditPageFunnelEvent,
} from "@/ga/jdEdit";
import type { NextPageWithLayout } from "@/pages/index/type";
import { PageLayout, GlobalLayout } from "@/components/global/layout";
import { useJdDetail } from "@/apis/jd/useJdDetail";
import { useEditJd } from "@/apis/jd/useEditJd";
import { useDeleteJd } from "@/apis/jd/useDeleteJd";
import { useEndJd } from "@/apis/jd/useEndJd";
import { jdArrKeyObj } from "@/apis/jd/useJdArr/type";

import { JD_UPLOAD_MESSAGE_OBJ } from "@/pages/jd/upload/constant";
import { HeaderPart } from "./part/headerPart";
import { BasicInfoPart } from "./part/basicInfoPart";
import { PositionHeaderPart } from "./part/positionHeaderPart";
import { PositionTitleInfoPart } from "./part/positionTitleInfoPart";
import { PositionRequiredInfoPart } from "./part/positionRequiredInfoPart";
import { PositionWorkInfoPart } from "./part/positionWorkInfoPart";

import { JdFormValues } from "./type";
import { BLANK_POSITION, JD_EDIT_MESSAGE_OBJ } from "./constant";
import { getFieldArrayValue, getFieldArrayValueWithNull, setFieldArray } from "./util";
import { cssObj } from "./style";

const JdEditPage: NextPageWithLayout = () => {
  const [isCardOpenArr, setIsCardOpenArr] = useState<boolean[]>([false]);

  const router = useRouter();
  const queryClient = useQueryClient();
  const { setToast } = useToast();

  const jdForm = useForm<JdFormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      process_arr: [{ value: "" }, { value: "" }],
      apply_route_arr: [{ value: "" }],
      etc_arr: [{ value: "" }],
      position_arr: [BLANK_POSITION],
    },
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, submitCount },
  } = jdForm;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "position_arr",
  });

  const processArr = useFieldArray({
    control,
    name: "process_arr",
  });

  const applyRouteArr = useFieldArray({
    control,
    name: "apply_route_arr",
  });

  const etcArr = useFieldArray({
    control,
    name: "etc_arr",
  });

  const { data: jdData } = useJdDetail(true, { id: Number(router.query.jdId) });
  const { mutate: editJdMutate } = useEditJd();
  const { mutate: deleteJdMutation } = useDeleteJd();
  const { mutate: endJdMutation } = useEndJd();

  const endJdHandler = (id: number) => {
    if (window.confirm(JD_EDIT_MESSAGE_OBJ.END)) {
      endJdMutation(
        { jdId: id },
        {
          onSuccess: () => {
            setToast("마감되었습니다");
            queryClient.invalidateQueries(jdArrKeyObj.all);
          },
        }
      );
    }
  };

  const deleteJdHandler = (id: number) => {
    if (window.confirm(JD_EDIT_MESSAGE_OBJ.DELETE)) {
      deleteJdMutation(
        { jdId: id },
        {
          onSuccess: () => {
            setToast("삭제되었습니다");
            queryClient.invalidateQueries(jdArrKeyObj.all);
          },
        }
      );
    }
  };

  const jdEditHandler: SubmitHandler<JdFormValues> = (jdObj) => {
    jdEditConfirmEvent();
    if (window.confirm(JD_EDIT_MESSAGE_OBJ.EDIT)) {
      editJdMutate(
        {
          jdId: Number(router.query.jdId),
          dto: {
            ...jdObj,
            start_time: new Date(jdObj.start_time).getTime(),
            end_time: new Date(jdObj.end_time).getTime(),
            apply_url: jdObj.apply_url.includes("@") ? `mailto: ${jdObj.apply_url}` : jdObj.apply_url,
            process_arr: getFieldArrayValue(jdObj.process_arr),
            apply_route_arr: getFieldArrayValue(jdObj.apply_route_arr),
            etc_arr: getFieldArrayValueWithNull(jdObj.etc_arr),
            position_arr: jdObj.position_arr.map((position) => ({
              ...position,
              hire_number: position.hire_number ? position.hire_number : 0,
              task_sub_arr: position.task_sub_arr ? position.task_sub_arr : null,
              task_detail_arr: getFieldArrayValue(position.task_detail_arr),
              required_etc_arr: getFieldArrayValueWithNull(position.required_etc_arr),
              pay_arr: getFieldArrayValue(position.pay_arr),
              preferred_certi_arr: position.preferred_certi_arr ? position.preferred_certi_arr : null,
              preferred_etc_arr: getFieldArrayValueWithNull(position.preferred_etc_arr),
            })),
          },
        },
        {
          onSuccess: () => {
            jdEditDoneEvent();
            setToast("등록되었습니다");
          },

          onError: () => {
            alert("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
          },
        }
      );
    }
  };

  useEffect(() => {
    const newStartTime = jdData?.startTime ? jdData.startTime + 540000 * 60 : 0;
    const newEndTime = jdData?.endTime ? jdData.endTime + 540000 * 60 : 0;

    const positionNewArr = jdData?.positionArr.map((position) => ({
      middle: position.eduSummary.middle,
      high: position.eduSummary.high,
      college: position.eduSummary.college,
      four: position.eduSummary.four,
      required_exp: position.requiredExp.type,
      min_year: position.requiredExp.minYear,
      max_year: position.requiredExp.maxYear,
      required_etc_arr: setFieldArray(position.requiredEtcArr || []),
      contract_type: position.contractType.type,
      conversion_rate: position.contractType.conversionRate,
      task_main: position.task.mainTask,
      task_sub_arr: position.task.subTaskArr,
      task_detail_arr: setFieldArray(position.taskDetailArr || []),
      rotation_arr: position.rotationArr,
      rotation_etc: position.rotationEtc,
      place: {
        type: position.place.type,
        address_arr: position.place.addressArr || [],
        etc: position.place.etc || "",
      },
      hire_number: position.hireCount,
      pay_arr: setFieldArray(position.payArr || []),
      preferred_certi_arr: position.preferredCertiArr,
      preferred_etc_arr: setFieldArray(position.preferredEtcArr || []),
    }));

    reset({
      company_id: jdData?.company.id,
      title: jdData?.title,
      start_time: new Date(newStartTime).toISOString().substring(0, 19),
      end_time: new Date(newEndTime).toISOString().substring(0, 19),
      cut: jdData?.cut,
      process_arr: setFieldArray(jdData?.processArr || []),
      apply_route_arr: setFieldArray(jdData?.applyRouteArr || []),
      apply_url: jdData?.applyUrl,
      etc_arr: setFieldArray(jdData?.etcArr || []),
      position_arr: positionNewArr,
    });
  }, [jdData, reset]);

  useEffect(() => {
    // Block page refresh or close
    window.onbeforeunload = () => isDirty;

    const handleUnload = () => {
      if (isDirty) {
        jdEditExitEvent();
        if (!window.confirm(JD_UPLOAD_MESSAGE_OBJ.LEAVE)) {
          throw router.events.emit("routeChangeError");
        } else {
          jdEditExitDoneEvent();
        }
      }
    };

    router.events.on("routeChangeStart", handleUnload);

    return () => {
      router.events.off("routeChangeStart", handleUnload);
      window.onbeforeunload = () => null;
    };
  }, [isDirty, router.events]);

  useEffect(() => {
    if (submitCount === 0) return;
    jdEditFailEvent(submitCount);
  }, [submitCount]);

  useEffect(() => {
    jdEditPageFunnelEvent();
  }, []);

  if (!jdData) {
    return (
      <div css={cssObj.spinnerBox}>
        <Spinner />
      </div>
    );
  }

  return (
    <main>
      <PageLayout>
        <div css={cssObj.pageContainer}>
          <form onSubmit={handleSubmit(jdEditHandler)}>
            <HeaderPart jdData={jdData} />
            <BasicInfoPart jdForm={jdForm} processArr={processArr} applyRouteArr={applyRouteArr} etcArr={etcArr} />
            <PositionHeaderPart append={append} setIsCardOpen={setIsCardOpenArr} />
            <ul>
              {fields.map((item, index) => (
                <li key={`${item.id}`} css={cssObj.cardContainer}>
                  <PositionTitleInfoPart
                    id={item.id}
                    positionIndex={index}
                    jdForm={jdForm}
                    appendPosition={append}
                    removePosition={remove}
                    control={control}
                    isCardOpen={isCardOpenArr[index]}
                    setIsCardOpen={setIsCardOpenArr}
                  />
                  {isCardOpenArr[index] && (
                    <>
                      <PositionRequiredInfoPart id={item.id} positionIndex={index} jdForm={jdForm} control={control} />
                      <PositionWorkInfoPart id={item.id} positionIndex={index} jdForm={jdForm} control={control} />
                    </>
                  )}
                </li>
              ))}
            </ul>
            <div css={cssObj.buttonContainer}>
              <SharedButton
                radius="round"
                fontColor={`${COLORS.BLUE_FIRST40}`}
                borderColor={`${COLORS.BLUE_FIRST40}`}
                backgroundColor={`${COLORS.GRAY100}`}
                size="xLarge"
                text="공고 마감"
                onClickHandler={() => {
                  endJdHandler(Number(router.query.jdId));
                }}
                iconObj={{ icon: BiRocket, location: "left" }}
              />
              <SharedButton
                radius="round"
                fontColor={`${COLORS.BLUE_FIRST40}`}
                borderColor={`${COLORS.BLUE_FIRST40}`}
                backgroundColor={`${COLORS.GRAY100}`}
                size="xLarge"
                text="공고 삭제"
                onClickHandler={() => {
                  deleteJdHandler(Number(router.query.jdId));
                }}
                iconObj={{ icon: BiRocket, location: "left" }}
              />
              <SharedButton
                radius="round"
                fontColor={`${COLORS.GRAY100}`}
                backgroundColor={`${COLORS.BLUE_FIRST40}`}
                size="xLarge"
                text="수정 완료"
                onClickHandler="submit"
                iconObj={{ icon: BiRocket, location: "left" }}
              />
            </div>
          </form>
        </div>
      </PageLayout>
    </main>
  );
};

JdEditPage.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdEditPage;
