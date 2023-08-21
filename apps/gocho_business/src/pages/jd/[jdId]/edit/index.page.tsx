import { useEffect, useRef } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { NextPage } from "next";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { usePreventRouting } from "shared-hooks";

import { useModal, useToast } from "@/globalStates";
import {
  jdEditConfirmEvent,
  jdEditDoneEvent,
  jdEditExitDoneEvent,
  jdEditExitEvent,
  jdEditFailEvent,
  jdEditPageFunnelEvent,
} from "@/ga";
import { PageLayout } from "@/components";
import { useEditJd, useJdDetail, useManagerProfile } from "@/apis";
import { INTERNAL_URL } from "@/constants";
import { ErrorResponseDef } from "@/types";

import {
  ReasonPart,
  ButtonPart,
  TitlePart,
  BasicPart,
  RequiredPart,
  ConditionPart,
  PlacePart,
  ApplyPart,
} from "../../write/part";
import { getFieldArrayValue, getFieldArrayValueWithNull, setFieldErrorIfEmpty, setFieldArray } from "./util";
import { JdFormValues } from "./type";
import { BLANK_JD, JD_EDIT_MESSAGE_OBJ, ROTATION_ARR } from "./constant";

const JdEditPage: NextPage = () => {
  const router = useRouter();
  const { setModal } = useModal();

  const isLoading = useRef(false);

  const { data: userInfoData } = useManagerProfile();
  const { mutate: editJdMutate } = useEditJd();
  const { data: jdData } = useJdDetail(Boolean(userInfoData), { id: Number(router.query.jdId) });
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
    watch,
    formState: { submitCount, dirtyFields, isSubmitSuccessful },
  } = jdForm;

  const taskDetailArr = useFieldArray({
    control,
    name: "task_detail_arr",
  });

  const requiredEtcArr = useFieldArray({
    control,
    name: "required_etc_arr",
  });

  const preferredEtcArr = useFieldArray({
    control,
    name: "preferred_etc_arr",
  });

  const payArr = useFieldArray({
    control,
    name: "pay_arr",
  });

  const processArr = useFieldArray({
    control,
    name: "process_arr",
  });

  const applyRouteArr = useFieldArray({
    control,
    name: "apply_route_arr",
  });

  const applyDocumentArr = useFieldArray({
    control,
    name: "apply_document_arr",
  });

  const etcArr = useFieldArray({
    control,
    name: "etc_arr",
  });

  const jdEditHandler: SubmitHandler<JdFormValues> = (jdObj) => {
    if (isLoading.current) return;
    isLoading.current = true;

    jdEditConfirmEvent();
    if (window.confirm(JD_EDIT_MESSAGE_OBJ.EDIT)) {
      editJdMutate(
        {
          jdId: Number(router.query.jdId),
          dto: {
            ...jdObj,
            middle: false,
            start_time: dayjs(new Date(jdObj.start_time)).format("YYYY-MM-DDTHH:mm:ss"),
            end_time: dayjs(new Date(jdObj.end_time)).format("YYYY-MM-DDTHH:mm:ss"),
            apply_url: jdObj.apply_url.includes("@") ? `mailto: ${jdObj.apply_url}` : jdObj.apply_url,
            process_arr: getFieldArrayValue(jdObj.process_arr),
            apply_route_arr: getFieldArrayValue(jdObj.apply_route_arr),
            apply_document_arr: getFieldArrayValueWithNull(jdObj.apply_document_arr),
            etc_arr: getFieldArrayValueWithNull(jdObj.etc_arr),
            conversion_rate: jdObj.conversion_rate ? jdObj.conversion_rate : null,
            min_year: jdObj.min_year ? jdObj.min_year : null,
            max_year: jdObj.max_year ? jdObj.max_year : null,
            hire_number: jdObj.hire_number ? jdObj.hire_number : 0,
            task_sub_arr: jdObj.task_sub_arr,
            task_detail_arr: getFieldArrayValue(jdObj.task_detail_arr),
            required_etc_arr: getFieldArrayValue(jdObj.required_etc_arr),
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
            setToast("등록되었습니다");
          },

          onError: (error) => {
            const errorResponse = error.response?.data as ErrorResponseDef;
            alert(`${errorResponse.error_message}\n계속 오류가 발생할 시 우측 하단 채팅을 통해 문의주세요.`);
          },

          onSettled: () => {
            isLoading.current = false;
          },
        }
      );
    } else {
      isLoading.current = false;
    }
  };

  const jobErrorHandler = () => {
    const ifEduNotSelected = !watch("high") && !watch("college") && !watch("four");
    setFieldErrorIfEmpty(watch, jdForm, "task_detail_arr", "* 세부 직무 내용을 입력해 주세요");
    setFieldErrorIfEmpty(watch, jdForm, "pay_arr", "* 급여 정보를 입력해 주세요");
    setFieldErrorIfEmpty(watch, jdForm, "process_arr", "* 채용절차는 최소 1개 이상 기재해 주세요");
    setFieldErrorIfEmpty(watch, jdForm, "apply_route_arr", "* 지원 경로는 최소 1개 이상 기재해 주세요");
    if (ifEduNotSelected) {
      jdForm.setError("high", { message: "* 학력 조건을 하나 이상 선택해 주세요" });
    }
  };

  useEffect(() => {
    const newStartTime = dayjs(jdData?.startTime, "YYYY-MM-DDTHH:mm:ss").add(9, "hour").toDate();
    const newEndTime = dayjs(jdData?.endTime, "YYYY-MM-DDTHH:mm:ss").add(9, "hour").toDate();

    reset({
      title: jdData?.title,
      start_time: new Date(newStartTime).toISOString().substring(0, 19),
      end_time: new Date(newEndTime).toISOString().substring(0, 19),
      cut: jdData?.cut,
      process_arr: setFieldArray(jdData?.processArr || []),
      apply_document_arr: setFieldArray(jdData?.applyDocumentArr || []),
      apply_route_arr: setFieldArray(jdData?.applyRouteArr || []),
      apply_url: jdData?.applyUrl,
      etc_arr: setFieldArray(jdData?.etcArr || []),
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
      task_detail_arr: setFieldArray(jdData?.task.detailArr || []),
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
    if (userInfoData && userInfoData.status.name !== "인증완료") setModal("companyAuthModal");
  }, [setModal, userInfoData]);

  useEffect(() => {
    if (watch("high") || watch("college") || watch("four")) {
      jdForm.clearErrors("high");
    }
  }, [jdForm, watch]);

  useEffect(() => {
    if (submitCount === 0) return;
    jdEditFailEvent(submitCount);
  }, [submitCount]);

  useEffect(() => {
    jdEditPageFunnelEvent();
  }, []);

  return (
    <form onSubmit={handleSubmit(jdEditHandler, jobErrorHandler)}>
      <ButtonPart />
      <PageLayout>
        {jdData?.status.name.includes("반려") && <ReasonPart jdData={jdData} />}
        <TitlePart jdForm={jdForm} />
        <BasicPart jdForm={jdForm} control={control} taskDetailArr={taskDetailArr} />
        <RequiredPart
          jdForm={jdForm}
          control={control}
          requiredEtcArr={requiredEtcArr}
          preferredEtcArr={preferredEtcArr}
        />
        <ConditionPart jdForm={jdForm} control={control} payArr={payArr} />
        <PlacePart jdForm={jdForm} />
        <ApplyPart
          jdForm={jdForm}
          processArr={processArr}
          applyRouteArr={applyRouteArr}
          applyDocumentArr={applyDocumentArr}
          etcArr={etcArr}
        />
      </PageLayout>
    </form>
  );
};

export default JdEditPage;
