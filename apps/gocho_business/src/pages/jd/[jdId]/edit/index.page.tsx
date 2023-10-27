import { useEffect, useRef } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { NextPage } from "next";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { useDisabledKeydownSubmit, usePreventRouting } from "shared-hook";
import { ErrorResponseDef } from "shared-type/api";

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
import { getFieldArrayValue, setFieldErrorIfEmpty, setFieldArray } from "./util";
import { EditJdFormValues } from "./type";
import { BLANK_JD, JD_EDIT_MESSAGE_OBJ, ROTATION_ARR } from "./constant";

const JdEditPage: NextPage = () => {
  const router = useRouter();
  const { setModal } = useModal();

  const isLoading = useRef(false);

  const { data: userInfoData } = useManagerProfile();
  const { mutate: editJdMutate } = useEditJd();
  const { data: jdData } = useJdDetail(Boolean(userInfoData), { id: Number(router.query.jdId) });
  const { setToast } = useToast();

  const jdForm = useForm<EditJdFormValues>({
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

  const taskDescriptionArr = useFieldArray({
    control,
    name: "detail.task_description",
  });

  const requiredEtcArr = useFieldArray({
    control,
    name: "qualification.required_etc",
  });

  const preferredEtcArr = useFieldArray({
    control,
    name: "qualification.preferred_etc",
  });

  const payArr = useFieldArray({
    control,
    name: "detail.pay",
  });

  const applyProcessArr = useFieldArray({
    control,
    name: "apply.process",
  });

  const applyDocumentArr = useFieldArray({
    control,
    name: "apply.document",
  });

  const etcArr = useFieldArray({
    control,
    name: "apply.etc",
  });

  const jdEditHandler: SubmitHandler<EditJdFormValues> = (jdObj) => {
    if (isLoading.current) return;
    isLoading.current = true;

    jdEditConfirmEvent();
    if (window.confirm(JD_EDIT_MESSAGE_OBJ.EDIT)) {
      editJdMutate(
        {
          jdId: Number(router.query.jdId),
          ...jdObj,
          title: jdObj.title,
          detail: {
            task_main: jdObj.detail.task_main,
            task_sub: jdObj.detail.task_sub,
            task_description: getFieldArrayValue(jdObj.detail.task_description),
            contract_type: jdObj.detail.contract_type,
            conversion_rate: jdObj.detail.conversion_rate,
            hire_number: jdObj.detail.hire_number,
            pay: getFieldArrayValue(jdObj.detail.pay),
            shift: jdObj.detail.shift,
            place: {
              is_undefined: jdObj.detail.place.is_undefined,
              data: jdObj.detail.place.data.map((eachPlace) => {
                if (eachPlace.type === "일반") {
                  return {
                    type: eachPlace.type,
                    location: eachPlace.location,
                  };
                }

                return {
                  type: eachPlace.type,
                  factory_id: eachPlace.factory.id,
                };
              }),
              etc: jdObj.detail.place.etc,
            },
          },
          qualification: {
            ...jdObj.qualification,
            required_etc: getFieldArrayValue(jdObj.qualification.required_etc),
            preferred_etc: getFieldArrayValue(jdObj.qualification.preferred_etc),
          },
          apply: {
            ...jdObj.apply,
            start_time: dayjs(new Date(jdObj.apply.start_time)).format("YYYY-MM-DDTHH:mm:ss"),
            end_time: dayjs(new Date(jdObj.apply.end_time)).format("YYYY-MM-DDTHH:mm:ss"),
            document: getFieldArrayValue(jdObj.apply.document),
            etc: getFieldArrayValue(jdObj.apply.etc),
            process: getFieldArrayValue(jdObj.apply.process),
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
    const ifEduNotSelected =
      !watch("qualification.highschool") && !watch("qualification.college") && !watch("qualification.university");

    setFieldErrorIfEmpty(watch, jdForm, "detail.task_description", "* 세부 직무 내용을 입력해 주세요");
    setFieldErrorIfEmpty(watch, jdForm, "detail.pay", "* 급여 정보를 입력해 주세요");
    setFieldErrorIfEmpty(watch, jdForm, "apply.process", "* 채용절차는 최소 1개 이상 기재해 주세요");
    setFieldErrorIfEmpty(watch, jdForm, "apply.route", "* 지원 경로는 최소 1개 이상 기재해 주세요");

    if (!watch("detail.place.is_undefined") && watch("detail.place.data").length === 0 && watch("detail.place.etc")) {
      jdForm.setError("detail.place", { message: "* 근무지를 추가해 주세요." });
    }

    if (ifEduNotSelected) {
      jdForm.setError("qualification.highschool", { message: "* 학력 조건을 하나 이상 선택해 주세요" });
    }
  };

  useEffect(() => {
    if (jdData) {
      const newStartTime = dayjs(jdData.apply.startTime, "YYYY-MM-DDTHH:mm:ss").add(9, "hour").toDate();
      const newEndTime = dayjs(jdData.apply.endTime, "YYYY-MM-DDTHH:mm:ss").add(9, "hour").toDate();

      reset({
        title: jdData.title,
        detail: {
          task_main: jdData.detail.taskMain,
          task_sub: jdData.detail.taskSubArr,
          task_description: setFieldArray(jdData.detail.taskDescription || []),
          contract_type: jdData.detail.contractType,
          conversion_rate: jdData.detail.conversionRate,
          hire_number: jdData.detail.hireNumber,
          pay: setFieldArray(jdData.detail.pay || []),
          shift: jdData.detail.shift.map(
            (eachShift) => ROTATION_ARR.find((rotationObj) => rotationObj.name === eachShift)?.data
          ),
          place: {
            is_undefined: jdData.detail.place.is_undefined,
            data: jdData.detail.place.data.map((eachPlace) => ({
              type: eachPlace.type,
              factory_id: eachPlace.factory?.id,
              location: eachPlace.location,
            })),
            etc: jdData.detail.place.etc,
          },
        },
        qualification: {
          highschool: jdData.qualification.highschool,
          college: jdData.qualification.college,
          university: jdData.qualification.university,
          required_etc: setFieldArray(jdData.qualification.requiredEtc),
          required_experience: jdData.qualification.requiredExperience,
          required_min_year: jdData.qualification.requiredMinYear || undefined,
          required_max_year: jdData.qualification.requiredMaxYear || undefined,
          preferred_certification: jdData.qualification.preferredCertification,
          preferred_etc: setFieldArray(jdData.qualification.preferredEtc),
        },
        apply: {
          start_time: new Date(newStartTime).toISOString().substring(0, 19),
          end_time: new Date(newEndTime).toISOString().substring(0, 19),
          document: setFieldArray(jdData.apply.document || []),
          etc: setFieldArray(jdData.apply.etc || []),
          process: setFieldArray(jdData.apply.process || []),
          route: jdData.apply.route,
          cut: jdData.apply.cut,
        },
      });
    }
  }, [jdData, reset]);

  useDisabledKeydownSubmit();

  usePreventRouting(
    Boolean(Object.keys(dirtyFields).length) && !isSubmitSuccessful,
    jdEditExitEvent,
    jdEditExitDoneEvent
  );

  useEffect(() => {
    if (userInfoData && userInfoData.status.name !== "인증완료") setModal("companyAuthModal");
  }, [setModal, userInfoData]);

  useEffect(() => {
    if (watch("qualification.highschool") || watch("qualification.college") || watch("qualification.university")) {
      jdForm.clearErrors("qualification.highschool");
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
        <BasicPart jdForm={jdForm} taskDetailArr={taskDescriptionArr} />
        <RequiredPart jdForm={jdForm} requiredEtcArr={requiredEtcArr} preferredEtcArr={preferredEtcArr} />
        <ConditionPart jdForm={jdForm} payArr={payArr} />
        <PlacePart jdForm={jdForm} />
        <ApplyPart jdForm={jdForm} processArr={applyProcessArr} applyDocumentArr={applyDocumentArr} etcArr={etcArr} />
      </PageLayout>
    </form>
  );
};

export default JdEditPage;
