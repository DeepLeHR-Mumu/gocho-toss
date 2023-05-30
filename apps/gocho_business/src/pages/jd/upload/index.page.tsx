import { useEffect, useRef } from "react";
import dayjs from "dayjs";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { BiRocket } from "react-icons/bi";
import { useRouter } from "next/router";

import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";
import { usePreventRouting } from "shared-hooks";

import { useToast } from "@/globalStates";
import {
  jdUploadConfirmEvent,
  jdUploadDoneEvent,
  jdUploadExitDoneEvent,
  jdUploadExitEvent,
  jdUploadFailEvent,
  jdUploadPageFunnelEvent,
} from "@/ga";
import type { NextPageWithLayout } from "@/types";
import { PageLayout } from "@/components";
import { useAddJd } from "@/apis";
import { INTERNAL_URL } from "@/constants";
import {
  HeaderPart,
  BasicInfoPart,
  PositionTitleInfoPart,
  PositionRequiredInfoPart,
  PositionWorkInfoPart,
} from "./part";
import { JobFormValues } from "./type";
import { BLANK_JD, JD_UPLOAD_MESSAGE_OBJ } from "./constant";
import { getFieldArrayValue, getFieldArrayValueWithNull } from "./util";
import { cssObj } from "./style";

const JdUploadPage: NextPageWithLayout = () => {
  const isLoading = useRef(false);

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
    formState: { submitCount, dirtyFields, isSubmitSuccessful },
  } = jobForm;

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
            etc_arr: getFieldArrayValueWithNull(jobObj.etc_arr),
            conversion_rate: jobObj.conversion_rate ? jobObj.conversion_rate : null,
            min_year: jobObj.min_year ? jobObj.min_year : null,
            max_year: jobObj.max_year ? jobObj.max_year : null,
            hire_number: jobObj.hire_number ? jobObj.hire_number : 0,
            task_sub_arr: jobObj.task_sub_arr ? jobObj.task_sub_arr : null,
            task_detail_arr: getFieldArrayValue(jobObj.task_detail_arr),
            required_etc_arr: getFieldArrayValueWithNull(jobObj.required_etc_arr),
            pay_arr: getFieldArrayValue(jobObj.pay_arr),
            place: {
              type: jobObj.place.type,
              address_arr: jobObj.place.address_arr?.length === 0 ? null : jobObj.place.address_arr,
              factory_arr: jobObj.place.factory_arr?.length === 0 ? null : jobObj.place.factory_arr,
              etc: jobObj.place.etc?.length === 0 ? null : jobObj.place.etc,
            },
            preferred_certi_arr: jobObj.preferred_certi_arr?.length === 0 ? null : jobObj.preferred_certi_arr,
            preferred_etc_arr: getFieldArrayValueWithNull(jobObj.preferred_etc_arr),
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

  useEffect(() => {
    if (submitCount === 0) return;
    jdUploadFailEvent(submitCount);
  }, [submitCount]);

  usePreventRouting(
    Boolean(Object.keys(dirtyFields).length) && !isSubmitSuccessful,
    jdUploadExitEvent,
    jdUploadExitDoneEvent
  );

  useEffect(() => {
    jdUploadPageFunnelEvent();
  }, []);

  return (
    <main>
      <PageLayout>
        <div css={cssObj.pageContainer}>
          <form onSubmit={handleSubmit(jobSubmitHandler)}>
            <HeaderPart />
            <BasicInfoPart jobForm={jobForm} processArr={processArr} applyRouteArr={applyRouteArr} etcArr={etcArr} />
            <div css={cssObj.cardContainer}>
              <PositionTitleInfoPart jobForm={jobForm} control={control} />
              <PositionRequiredInfoPart jobForm={jobForm} control={control} />
              <PositionWorkInfoPart jobForm={jobForm} control={control} />
            </div>

            <div css={cssObj.buttonWrapper}>
              <SharedButton
                radius="round"
                fontColor={`${COLORS.GRAY100}`}
                backgroundColor={`${COLORS.BLUE_FIRST40}`}
                isFullWidth
                size="xLarge"
                text="공고 등록"
                iconObj={{ icon: BiRocket, location: "left" }}
                onClickHandler="submit"
              />
            </div>
          </form>
        </div>
      </PageLayout>
    </main>
  );
};

export default JdUploadPage;
