import { ReactElement, useEffect, useState, useRef } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { SharedButton } from "shared-ui/business/sharedButton";
import { useDisabledKeydownSubmit } from "shared-hooks";
import { COLORS } from "shared-style/color";

import { useToast } from "@/globalStates";
import { useEditJd, useJdDetail } from "@/api";
import { GlobalLayout, LoadingScreen, PageLayout } from "@/component";
import type { NextPageWithLayout } from "@/types";
import { INTERNAL_URL } from "@/constant";

import { jdArrKeyObj } from "@/api/jd/useJdArr/type";
import { CommonDataPart, PositionRequiredDataPart, PositionTaskDataPart, PositionEtcDataPart } from "./part";
import { JobFormValues } from "./type";
import { blankPosition } from "./constant";
import { cssObj } from "./style";

const JdEdit: NextPageWithLayout = () => {
  const queryClient = useQueryClient();

  const [checkMsg, setCheckMsg] = useState<string>();
  const router = useRouter();
  const jobId = Number(router.query.id);
  const isUploadLoading = useRef<boolean>(false);

  const jobForm = useForm<JobFormValues>({
    mode: "onBlur",
  });
  const { control, handleSubmit, reset } = jobForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "position_arr",
  });

  const { setToast } = useToast();
  const { data: jobData } = useJdDetail({ id: jobId });
  const { mutate: editJobMutate } = useEditJd();

  useDisabledKeydownSubmit();

  useEffect(() => {
    const newStartTime = dayjs(jobData?.startTime, "YYYY-MM-DDTHH:mm:ss").add(9, "hour").toDate();
    const newEndTime = dayjs(jobData?.endTime, "YYYY-MM-DDTHH:mm:ss").add(9, "hour").toDate();

    const positionNewArr = jobData?.positionArr.map((position) => ({
      id: position.id,
      middle: position.eduSummary.middle,
      high: position.eduSummary.high,
      college: position.eduSummary.college,
      four: position.eduSummary.four,
      required_exp: position.requiredExp.type,
      min_year: position.requiredExp.minYear,
      max_year: position.requiredExp.maxYear,
      required_etc_arr: position.requiredEtcArr?.join("\n"),
      contract_type: position.contractType.type,
      conversion_rate: position.contractType.conversionRate,
      task_main: position.task.mainTask,
      task_sub_arr: position.task.subTaskArr,
      task_detail_arr: position.taskDetailArr.join("\n"),
      rotation_arr: position.rotationArr,
      place: {
        type: position.place.type,
        address_arr: position.place.addressArr || [],
        etc: position.place.etc || "",
        factory_arr: position.place.factoryArr?.map((factoryNumber) => factoryNumber.id) || [],
      },
      hire_number: position.hireCount,
      pay_arr: position.payArr?.join("\n"),
      preferred_certi_arr: position.preferredCertiArr,
      preferred_etc_arr: position.preferredEtcArr?.join("\n"),
    }));

    reset({
      company_id: jobData?.company.id,
      title: jobData?.title,
      start_time: new Date(newStartTime).toISOString().substring(0, 19),
      end_time: new Date(newEndTime).toISOString().substring(0, 19),
      cut: jobData?.cut ? jobData.cut : false,
      process_arr: jobData?.processArr.join("\n"),
      apply_route_arr: jobData?.applyRouteArr.join("\n"),
      apply_url: jobData?.applyUrl,
      etc_arr: jobData?.etcArr.join("\n"),
      position_arr: positionNewArr,
    });
  }, [jobData, reset]);

  if (!jobData) {
    return <LoadingScreen />;
  }

  const jobSubmitHandler: SubmitHandler<JobFormValues> = (jobObj) => {
    if (isUploadLoading.current) return;

    if (!isUploadLoading.current) {
      isUploadLoading.current = true;

      editJobMutate(
        { jdId: jobId, dto: jobObj },
        {
          onSuccess: () => {
            setToast("수정되었습니다");
            queryClient.invalidateQueries(jdArrKeyObj.all);

            router.push({
              pathname: INTERNAL_URL.JD_LIST_URL,
              query: { ...router.query, page: 1 },
            });
          },
          onError: (editJobError) => {
            setCheckMsg(editJobError.response?.data.error_message);
          },
          onSettled: () => {
            isUploadLoading.current = false;
          },
        }
      );
    }
  };

  return (
    <main css={cssObj.wrapper}>
      <PageLayout>
        <h2 css={cssObj.title}>공고 수정</h2>
        <p css={cssObj.infoDesc}>
          <span>필수 작성칸</span> <span>필수 작성아님</span>
        </p>
        <section>
          <form css={cssObj.formContainer} onSubmit={handleSubmit(jobSubmitHandler)}>
            <CommonDataPart jobForm={jobForm} jobData={jobData} />
            <ul css={cssObj.fieldArrCSS}>
              {fields.map((item, index) => (
                <li key={item.id}>
                  <PositionRequiredDataPart id={item.id} index={index} jobForm={jobForm} />
                  <PositionTaskDataPart id={item.id} index={index} jobForm={jobForm} />
                  <PositionEtcDataPart id={item.id} index={index} jobForm={jobForm} jobData={jobData} />

                  <div css={cssObj.cardButtonBox}>
                    <SharedButton
                      onClickHandler={() => append({ ...jobForm.watch("position_arr")[index], id: null })}
                      text="해당 직무 복사"
                      size="medium"
                      radius="round"
                      backgroundColor={COLORS.BLUE_FIRST40}
                      fontColor={COLORS.GRAY100}
                    />
                    <SharedButton
                      onClickHandler={() => remove(index)}
                      text="해당 직무 제거"
                      size="medium"
                      radius="round"
                      backgroundColor={COLORS.BLUE_FIRST40}
                      fontColor={COLORS.GRAY100}
                    />
                  </div>
                </li>
              ))}
            </ul>
            {checkMsg && <p css={cssObj.warning}>{checkMsg}</p>}
            <div css={cssObj.buttonBox}>
              <SharedButton
                onClickHandler={() => {
                  append(blankPosition);
                }}
                text="직무 추가"
                size="large"
                radius="round"
                backgroundColor={COLORS.BLUE_FIRST40}
                fontColor={COLORS.GRAY100}
              />

              <SharedButton
                onClickHandler="submit"
                text="공고 수정하기"
                size="large"
                radius="round"
                backgroundColor={COLORS.BLUE_FIRST40}
                fontColor={COLORS.GRAY100}
              />
            </div>
          </form>
        </section>
      </PageLayout>
    </main>
  );
};

JdEdit.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdEdit;
