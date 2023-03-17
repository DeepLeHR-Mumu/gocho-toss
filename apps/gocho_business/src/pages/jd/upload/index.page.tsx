import { ReactElement, useEffect, useState, useRef } from "react";
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
} from "@/ga/jdUpload";
import type { NextPageWithLayout } from "@/pages/index/type";
import { PageLayout, GlobalLayout } from "@/components";
import { useAddJd } from "@/apis";

import { INTERNAL_URL } from "@/constants";
import { HeaderPart } from "./part/headerPart";
import { BasicInfoPart } from "./part/basicInfoPart";
import { PositionHeaderPart } from "./part/positionHeaderPart";
import { PositionTitleInfoPart } from "./part/positionTitleInfoPart";
import { PositionRequiredInfoPart } from "./part/positionRequiredInfoPart";
import { PositionWorkInfoPart } from "./part/positionWorkInfoPart";

import { JobFormValues } from "./type";
import { BLANK_POSITION, JD_UPLOAD_MESSAGE_OBJ } from "./constant";
import { getFieldArrayValue, getFieldArrayValueWithNull } from "./util";
import { cssObj } from "./style";

const JdUploadPage: NextPageWithLayout = () => {
  const [isCardOpenArr, setIsCardOpenArr] = useState<boolean[]>([true]);
  const isLoading = useRef(false);

  const { mutate: addJobMutate } = useAddJd();
  const { setToast } = useToast();
  const router = useRouter();

  const jobForm = useForm<JobFormValues>({
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
    formState: { submitCount, dirtyFields, isSubmitSuccessful },
  } = jobForm;

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

  const jobSubmitHandler: SubmitHandler<JobFormValues> = (jobObj) => {
    if (isLoading.current) return;
    isLoading.current = true;

    jdUploadConfirmEvent();
    if (window.confirm(JD_UPLOAD_MESSAGE_OBJ.UPLOAD)) {
      addJobMutate(
        {
          dto: {
            ...jobObj,
            start_time: new Date(jobObj.start_time).getTime(),
            end_time: new Date(jobObj.end_time).getTime(),
            apply_url: jobObj.apply_url.includes("@") ? `mailto: ${jobObj.apply_url}` : jobObj.apply_url,
            process_arr: getFieldArrayValue(jobObj.process_arr),
            apply_route_arr: getFieldArrayValue(jobObj.apply_route_arr),
            etc_arr: getFieldArrayValueWithNull(jobObj.etc_arr),
            position_arr: jobObj.position_arr.map((position) => ({
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
            <PositionHeaderPart fields={fields} append={append} setIsCardOpen={setIsCardOpenArr} />
            <ul>
              {fields.map((item, index) => (
                <li key={`${item.id}`} css={cssObj.cardContainer}>
                  <PositionTitleInfoPart
                    id={item.id}
                    positionIndex={index}
                    jobForm={jobForm}
                    appendPosition={append}
                    removePosition={remove}
                    control={control}
                    isCardOpen={isCardOpenArr[index]}
                    setIsCardOpen={setIsCardOpenArr}
                  />
                  {isCardOpenArr[index] && (
                    <>
                      <PositionRequiredInfoPart
                        id={item.id}
                        positionIndex={index}
                        jobForm={jobForm}
                        control={control}
                      />
                      <PositionWorkInfoPart id={item.id} positionIndex={index} jobForm={jobForm} control={control} />
                    </>
                  )}
                </li>
              ))}
            </ul>
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

JdUploadPage.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdUploadPage;
