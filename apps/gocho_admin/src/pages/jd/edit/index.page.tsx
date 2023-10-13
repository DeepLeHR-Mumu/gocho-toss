import { ReactElement, useEffect, useState, useRef } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { SharedButton } from "shared-ui/common/sharedButton";
import { useDisabledKeydownSubmit } from "shared-hook";

import { useEditJd, useJdDetail } from "@/api";
import { useToast } from "@/globalStates";
import { GlobalLayout, LoadingScreen, PageLayout } from "@/component";
import type { NextPageWithLayout } from "@/types";
import { INTERNAL_URL } from "@/constant";
import { jdArrKeyObj } from "@/api/jd/useJdArr/type";
import { CommonDataPart, PositionRequiredDataPart, PositionTaskDataPart, PositionEtcDataPart } from "./part";
import { JobFormValues } from "./type";
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
  const { handleSubmit, reset } = jobForm;

  const { setToast } = useToast();
  const { data: jobData } = useJdDetail({ id: jobId });
  const { mutate: editJobMutate } = useEditJd();

  useDisabledKeydownSubmit();

  useEffect(() => {
    const newStartTime = dayjs(jobData?.startTime, "YYYY-MM-DDTHH:mm:ss").add(9, "hour").toDate();
    const newEndTime = dayjs(jobData?.endTime, "YYYY-MM-DDTHH:mm:ss").add(9, "hour").toDate();

    reset({
      id: jobData?.id,
      company_id: jobData?.company.id,
      title: jobData?.title,
      start_time: new Date(newStartTime).toISOString().substring(0, 19),
      end_time: new Date(newEndTime).toISOString().substring(0, 19),
      cut: jobData?.cut ? jobData.cut : false,
      process_arr: jobData?.processArr.join("\n"),
      apply_route_arr: jobData?.applyRouteArr.join("\n"),
      apply_document_arr: jobData?.applyDocumentArr.join("\n"),
      apply_url: jobData?.applyUrl,
      etc_arr: jobData?.etcArr.join("\n"),
      middle: jobData?.eduSummary.middle,
      high: jobData?.eduSummary.high,
      college: jobData?.eduSummary.college,
      four: jobData?.eduSummary.four,
      required_exp: jobData?.requiredExp.type,
      min_year: jobData?.requiredExp.minYear,
      max_year: jobData?.requiredExp.maxYear,
      required_etc_arr: jobData?.requiredEtcArr?.join("\n"),
      contract_type: jobData?.contractType.type,
      conversion_rate: jobData?.contractType.conversionRate,
      task_main: jobData?.task.mainTask,
      task_sub_arr: jobData?.task.subTaskArr,
      task_detail_arr: jobData?.taskDetailArr.join("\n"),
      rotation_arr: jobData?.rotationArr,
      place: {
        type: jobData?.place.type,
        address_arr: jobData?.place.addressArr || [],
        etc: jobData?.place.etc || "",
        factory_arr: jobData?.place.factoryArr?.map((factoryNumber) => factoryNumber.id) || [],
      },
      hire_number: jobData?.hireCount,
      pay_arr: jobData?.payArr?.join("\n"),
      preferred_certi_arr: jobData?.preferredCertiArr,
      preferred_etc_arr: jobData?.preferredEtcArr?.join("\n"),
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
            <PositionRequiredDataPart jobForm={jobForm} />
            <PositionTaskDataPart jobForm={jobForm} />
            <PositionEtcDataPart jobForm={jobForm} jobData={jobData} />
            {checkMsg && <p css={cssObj.warning}>{checkMsg}</p>}
            <p css={cssObj.warning}>asdf</p>
            <SharedButton buttonType="fillBlue" width={10} onClickHandler="submit" text="공고 수정하기" />
          </form>
        </section>
      </PageLayout>
    </main>
  );
};

JdEdit.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdEdit;
