import { ReactElement, useEffect, useRef } from "react";
import dayjs from "dayjs";
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
} from "@/ga";
import type { NextPageWithLayout } from "@/types";
import { PageLayout, GlobalLayout } from "@/components";
import { useJdDetail, useEditJd, useDeleteJd, useEndJd, jdArrKeyObj } from "@/apis";
import { INTERNAL_URL } from "@/constants";

import {
  PositionRequiredInfoPart,
  HeaderPart,
  BasicInfoPart,
  PositionTitleInfoPart,
  PositionWorkInfoPart,
} from "./part";
import { JdFormValues } from "./type";
import { BLANK_JD, JD_EDIT_MESSAGE_OBJ, ROTATION_ARR } from "./constant";
import { getFieldArrayValue, getFieldArrayValueWithNull, setFieldArray } from "./util";
import { cssObj } from "./style";

const JdEditPage: NextPageWithLayout = () => {
  const isEditLoading = useRef(false);
  const isDeleteLoading = useRef(false);
  const isEndLoading = useRef(false);

  const router = useRouter();
  const queryClient = useQueryClient();
  const { setToast } = useToast();

  const jdForm = useForm<JdFormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: { ...BLANK_JD },
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { dirtyFields, submitCount, isSubmitSuccessful },
  } = jdForm;

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
            start_time: dayjs(new Date(jdObj.start_time)).format("YYYY-MM-DDTHH:mm:ss"),
            end_time: dayjs(new Date(jdObj.end_time)).format("YYYY-MM-DDTHH:mm:ss"),
            apply_url:
              jdObj.apply_url.includes("@") && !jdObj.apply_url.includes("mailto:")
                ? `mailto: ${jdObj.apply_url}`
                : jdObj.apply_url,
            process_arr: getFieldArrayValue(jdObj.process_arr),
            apply_route_arr: getFieldArrayValue(jdObj.apply_route_arr),
            etc_arr: getFieldArrayValueWithNull(jdObj.etc_arr),
            conversion_rate: jdObj.conversion_rate ? jdObj.conversion_rate : null,
            min_year: jdObj.min_year ? jdObj.min_year : null,
            max_year: jdObj.max_year ? jdObj.max_year : null,
            hire_number: jdObj.hire_number ? jdObj.hire_number : 0,
            task_sub_arr: jdObj.task_sub_arr ? jdObj.task_sub_arr : null,
            task_detail_arr: getFieldArrayValue(jdObj.task_detail_arr),
            required_etc_arr: getFieldArrayValueWithNull(jdObj.required_etc_arr),
            pay_arr: getFieldArrayValue(jdObj.pay_arr),
            place: {
              type: jdObj.place.type,
              address_arr: jdObj.place.address_arr?.length === 0 ? null : jdObj.place.address_arr,
              factory_arr: jdObj.place.factory_arr?.length === 0 ? null : jdObj.place.factory_arr,
              etc: jdObj.place.etc?.length === 0 ? null : jdObj.place.etc,
            },
            preferred_certi_arr: jdObj.preferred_certi_arr?.length === 0 ? null : jdObj.preferred_certi_arr,
            preferred_etc_arr: getFieldArrayValueWithNull(jdObj.preferred_etc_arr),
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
    const newStartTime = dayjs(jdData?.startTime, "YYYY-MM-DDTHH:mm:ss").toDate();
    const newEndTime = dayjs(jdData?.endTime, "YYYY-MM-DDTHH:mm:ss").toDate();

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
      id: jdData?.id,
      middle: jdData?.eduSummary.middle,
      high: jdData?.eduSummary.high,
      college: jdData?.eduSummary.college,
      four: jdData?.eduSummary.four,
      required_exp: jdData?.requiredExp.type,
      min_year: jdData?.requiredExp.minYear,
      max_year: jdData?.requiredExp.maxYear,
      required_etc_arr: setFieldArray(jdData?.requiredEtcArr || []),
      contract_type: jdData?.contractType.type,
      conversion_rate: jdData?.contractType.conversionRate,
      task_main: jdData?.task.mainTask,
      task_sub_arr: jdData?.task.subTaskArr,
      task_detail_arr: setFieldArray(jdData?.taskDetailArr || []),
      rotation_arr: jdData?.rotationArr.map(
        (rotation) => ROTATION_ARR.find((rotationObj) => rotationObj.name === rotation)?.data
      ),
      place: {
        type: jdData?.place.type,
        address_arr: jdData?.place.addressArr || null,
        factory_arr: jdData?.place.factoryArr?.map((factory) => factory.id) || null,
        etc: jdData?.place.etc || "",
      },
      hire_number: jdData?.hireCount,
      pay_arr: setFieldArray(jdData?.payArr || []),
      preferred_certi_arr: jdData?.preferredCertiArr,
      preferred_etc_arr: setFieldArray(jdData?.preferredEtcArr || []),
    });
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
            <div css={cssObj.cardContainer}>
              <PositionTitleInfoPart jdForm={jdForm} control={control} />
              <PositionRequiredInfoPart jdForm={jdForm} control={control} />
              <PositionWorkInfoPart jdForm={jdForm} control={control} />
            </div>
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
