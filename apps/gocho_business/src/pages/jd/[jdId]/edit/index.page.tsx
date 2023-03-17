import { ReactElement, useEffect, useRef, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { BiRocket } from "react-icons/bi";
import { useQueryClient } from "@tanstack/react-query";

import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";
import { Spinner } from "shared-ui/common/atom/spinner";
import { usePreventRouting } from "shared-hooks";

import { useToast } from "@/globalStates";
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
import { useJdDetail, useEditJd, useDeleteJd, useEndJd, jdArrKeyObj } from "@/apis";
import { INTERNAL_URL } from "@/constants";

import { HeaderPart } from "./part/headerPart";
import { BasicInfoPart } from "./part/basicInfoPart";
import { PositionHeaderPart } from "./part/positionHeaderPart";
import { PositionTitleInfoPart } from "./part/positionTitleInfoPart";
import { PositionRequiredInfoPart } from "./part/positionRequiredInfoPart";
import { PositionWorkInfoPart } from "./part/positionWorkInfoPart";

import { JdFormValues } from "./type";
import { BLANK_POSITION, JD_EDIT_MESSAGE_OBJ, ROTATION_ARR } from "./constant";
import { getFieldArrayValue, getFieldArrayValueWithNull, setFieldArray } from "./util";
import { cssObj } from "./style";

const JdEditPage: NextPageWithLayout = () => {
  const [isCardOpenArr, setIsCardOpenArr] = useState<boolean[]>([true]);
  const isEditLoading = useRef(false);
  const isDeleteLoading = useRef(false);
  const isEndLoading = useRef(false);

  const router = useRouter();
  const queryClient = useQueryClient();
  const { setToast } = useToast();

  const jdForm = useForm<JdFormValues>({
    mode: "onTouched",
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
    formState: { dirtyFields, submitCount, isSubmitSuccessful },
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
    if (isEndLoading.current) return;
    isEndLoading.current = true;

    if (window.confirm(JD_EDIT_MESSAGE_OBJ.END)) {
      endJdMutation(
        { jdId: id },
        {
          onSuccess: () => {
            setToast("마감되었습니다");
            router.push(INTERNAL_URL.JD_LIST);
            queryClient.invalidateQueries(jdArrKeyObj.all);
          },

          onSettled: () => {
            isEndLoading.current = false;
          },
        }
      );
    }
  };

  const deleteJdHandler = (id: number) => {
    if (isDeleteLoading.current) return;
    isDeleteLoading.current = true;

    if (window.confirm(JD_EDIT_MESSAGE_OBJ.DELETE)) {
      deleteJdMutation(
        { jdId: id },
        {
          onSuccess: () => {
            setToast("삭제되었습니다");
            router.push(INTERNAL_URL.JD_LIST);
            queryClient.invalidateQueries(jdArrKeyObj.all);
          },

          onSettled: () => {
            isDeleteLoading.current = false;
          },
        }
      );
    }
  };

  const jdEditHandler: SubmitHandler<JdFormValues> = (jdObj) => {
    if (isEditLoading.current) return;
    isEditLoading.current = true;

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
              conversion_rate: position.conversion_rate ? position.conversion_rate : null,
              min_year: position.min_year ? position.min_year : null,
              max_year: position.max_year ? position.max_year : null,
              hire_number: position.hire_number ? position.hire_number : 0,
              task_sub_arr: position.task_sub_arr ? position.task_sub_arr : null,
              task_detail_arr: getFieldArrayValue(position.task_detail_arr),
              required_etc_arr: getFieldArrayValueWithNull(position.required_etc_arr),
              pay_arr: getFieldArrayValue(position.pay_arr),
              place: {
                type: position.place.type,
                address_arr: position.place.address_arr?.length === 0 ? null : position.place.address_arr,
                factory_arr: position.place.factory_arr?.length === 0 ? null : position.place.factory_arr,
                etc: position.place.etc?.length === 0 ? null : position.place.etc,
              },
              preferred_certi_arr: position.preferred_certi_arr?.length === 0 ? null : position.preferred_certi_arr,
              preferred_etc_arr: getFieldArrayValueWithNull(position.preferred_etc_arr),
            })),
          },
        },
        {
          onSuccess: () => {
            jdEditDoneEvent();
            router.push(INTERNAL_URL.JD_LIST);
            setToast("수정되었습니다");
          },

          onError: () => {
            alert("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
          },

          onSettled: () => {
            isEditLoading.current = false;
          },
        }
      );
    } else {
      isEditLoading.current = false;
    }
  };

  useEffect(() => {
    const newStartTime = jdData?.startTime ? jdData.startTime + 540000 * 60 : 0;
    const newEndTime = jdData?.endTime ? jdData.endTime + 540000 * 60 : 0;

    const positionNewArr = jdData?.positionArr.map((position) => ({
      id: position.id,
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
      rotation_arr: position.rotationArr.map(
        (rotation) => ROTATION_ARR.find((rotationObj) => rotationObj.name === rotation)?.data
      ),
      rotation_etc: position.rotationEtc,
      place: {
        type: position.place.type,
        address_arr: position.place.addressArr || null,
        factory_arr: position.place.factoryArr?.map((factory) => factory.id) || null,
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

    setIsCardOpenArr(Array.from({ length: positionNewArr?.length || 0 }, () => false));
  }, [jdData, reset]);

  usePreventRouting(
    Boolean(Object.keys(dirtyFields).length) && !isSubmitSuccessful,
    jdEditExitEvent,
    jdEditExitDoneEvent
  );

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
            <PositionHeaderPart fields={fields} append={append} setIsCardOpen={setIsCardOpenArr} />
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
