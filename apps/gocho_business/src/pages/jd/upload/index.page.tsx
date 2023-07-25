import { useEffect, useRef } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { NextPage } from "next";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { usePreventRouting } from "shared-hooks";

import { useModal, useToast } from "@/globalStates";
import {
  jdUploadConfirmEvent,
  jdUploadDoneEvent,
  jdUploadExitDoneEvent,
  jdUploadExitEvent,
  jdUploadFailEvent,
  jdUploadPageFunnelEvent,
} from "@/ga";
import { PageLayout } from "@/components";
import { useAddJd, useManagerProfile } from "@/apis";
import { INTERNAL_URL } from "@/constants";

import { ButtonPart, TitlePart, BasicPart, RequiredPart, ConditionPart, PlacePart, ApplyPart } from "./part";
import { JobFormValues } from "./type";
import { BLANK_JD, JD_UPLOAD_MESSAGE_OBJ } from "./constant";
import { getFieldArrayValue } from "./util";

const JdUploadPage: NextPage = () => {
  const { setModal } = useModal();

  const isLoading = useRef(false);

  const { data: userInfoData } = useManagerProfile();
  const { mutate: addJobMutate } = useAddJd();
  const { setToast } = useToast();
  const router = useRouter();

  const jobForm = useForm<JobFormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: { ...BLANK_JD },
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { submitCount, dirtyFields, isSubmitSuccessful },
  } = jobForm;

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

  const jobSubmitHandler: SubmitHandler<JobFormValues> = (jobObj) => {
    if (isLoading.current) return;
    isLoading.current = true;

    jdUploadConfirmEvent();
    if (window.confirm(JD_UPLOAD_MESSAGE_OBJ.UPLOAD)) {
      addJobMutate(
        {
          dto: {
            ...jobObj,
            start_time: dayjs(new Date(jobObj.start_time)).format("YYYY-MM-DDTHH:mm:ss"),
            end_time: dayjs(new Date(jobObj.end_time)).format("YYYY-MM-DDTHH:mm:ss"),
            apply_url: jobObj.apply_url.includes("@") ? `mailto: ${jobObj.apply_url}` : jobObj.apply_url,
            process_arr: getFieldArrayValue(jobObj.process_arr),
            apply_route_arr: getFieldArrayValue(jobObj.apply_route_arr),
            apply_document_arr: getFieldArrayValue(jobObj.apply_document_arr),
            etc_arr: getFieldArrayValue(jobObj.etc_arr),
            conversion_rate: jobObj.conversion_rate ? jobObj.conversion_rate : null,
            min_year: jobObj.min_year ? jobObj.min_year : null,
            max_year: jobObj.max_year ? jobObj.max_year : null,
            hire_number: jobObj.hire_number ? jobObj.hire_number : 0,
            task_sub_arr: jobObj.task_sub_arr ? jobObj.task_sub_arr : null,
            task_detail_arr: getFieldArrayValue(jobObj.task_detail_arr),
            required_etc_arr: getFieldArrayValue(jobObj.required_etc_arr),
            pay_arr: getFieldArrayValue(jobObj.pay_arr),
            place: {
              type: jobObj.place.type,
              address_arr: jobObj.place.address_arr?.length === 0 ? null : jobObj.place.address_arr,
              factory_arr: jobObj.place.factory_arr?.length === 0 ? null : jobObj.place.factory_arr,
              etc: jobObj.place.etc?.length === 0 ? null : jobObj.place.etc,
            },
            preferred_certi_arr: jobObj.preferred_certi_arr?.length === 0 ? null : jobObj.preferred_certi_arr,
            preferred_etc_arr: getFieldArrayValue(jobObj.preferred_etc_arr),
          },
        },
        {
          onSuccess: () => {
            jdUploadDoneEvent();
            router.push(INTERNAL_URL.JD_LIST);
            setToast("등록되었습니다");
          },

          onError: () => {
            alert("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
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

  const setFieldErrorIfEmpty = (fieldName: "pay_arr" | "process_arr" | "apply_route_arr", errorMessage: string) => {
    if (watch(fieldName).length === 0 || watch(fieldName).every((field) => !field.value || field.value.trim() === "")) {
      jobForm.setError(fieldName, {
        message: errorMessage,
      });
    }
  };

  const jobErrorHandler = () => {
    setFieldErrorIfEmpty("pay_arr", "* 급여 정보를 입력해 주세요");
    setFieldErrorIfEmpty("process_arr", "* 채용절차는 최소 1개 이상 기재해 주세요");
    setFieldErrorIfEmpty("apply_route_arr", "* 지원 경로는 최소 1개 이상 기재해 주세요");
  };

  usePreventRouting(
    Boolean(Object.keys(dirtyFields).length) && !isSubmitSuccessful,
    jdUploadExitEvent,
    jdUploadExitDoneEvent
  );

  useEffect(() => {
    if (userInfoData && userInfoData.status.name !== "인증완료") setModal("companyAuthModal");
  }, [setModal, userInfoData]);

  useEffect(() => {
    if (submitCount === 0) return;
    jdUploadFailEvent(submitCount);
  }, [submitCount]);

  useEffect(() => {
    jdUploadPageFunnelEvent();
  }, []);

  return (
    <form onSubmit={handleSubmit(jobSubmitHandler, jobErrorHandler)}>
      <ButtonPart />
      <PageLayout>
        <TitlePart jobForm={jobForm} />
        <BasicPart jobForm={jobForm} control={control} taskDetailArr={taskDetailArr} />
        <RequiredPart
          jobForm={jobForm}
          control={control}
          requiredEtcArr={requiredEtcArr}
          preferredEtcArr={preferredEtcArr}
        />
        <ConditionPart jobForm={jobForm} control={control} payArr={payArr} />
        <PlacePart jobForm={jobForm} />
        <ApplyPart
          jobForm={jobForm}
          processArr={processArr}
          applyRouteArr={applyRouteArr}
          applyDocumentArr={applyDocumentArr}
          etcArr={etcArr}
        />
      </PageLayout>
    </form>
  );
};

export default JdUploadPage;
