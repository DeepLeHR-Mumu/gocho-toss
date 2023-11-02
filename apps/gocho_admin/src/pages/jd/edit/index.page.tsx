import { ReactElement, useEffect, useState, useRef } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { SharedButton } from "shared-ui/common/sharedButton";
import { useDisabledKeydownSubmit, usePreventRouting } from "shared-hook";

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

  usePreventRouting(Boolean(Object.keys(jobForm.formState.dirtyFields).length));

  useEffect(() => {
    const newStartTime = dayjs(jobData?.apply.startTime, "YYYY-MM-DDTHH:mm:ss").add(9, "hour").toDate();
    const newEndTime = dayjs(jobData?.apply.endTime, "YYYY-MM-DDTHH:mm:ss").add(9, "hour").toDate();

    reset({
      id: jobData?.id,
      company_id: jobData?.company.id,
      title: jobData?.title,
      detail: {
        task_main: jobData?.detail.taskMain,
        task_sub: jobData?.detail.taskSubArr,
        task_description: jobData?.detail.taskDescription.join("\n"),
        contract_type: jobData?.detail.contractType,
        conversion_rate: jobData?.detail.conversionRate,
        hire_number: jobData?.detail.hireNumber,
        pay: jobData?.detail.pay.join("\n"),
        shift: jobData?.detail.shift,
        place: {
          is_undefined: jobData?.detail.place.is_undefined,
          data: jobData?.detail.place.data.map((eachPlace) => ({
            type: eachPlace.type,
            factory_id: eachPlace.factory?.id,
            location: eachPlace.location,
          })),
          etc: jobData?.detail.place.etc,
        },
      },
      qualification: {
        highschool: jobData?.qualification.highschool,
        college: jobData?.qualification.college,
        university: jobData?.qualification.university,
        required_etc: jobData?.qualification.requiredEtc.join("\n"),
        required_experience: jobData?.qualification.requiredExperience,
        min_year: jobData?.qualification.requiredMinYear || undefined,
        max_year: jobData?.qualification.requiredMaxYear || undefined,
        preferred_certification: jobData?.qualification.preferredCertification,
        preferred_etc: jobData?.qualification.preferredEtc.join("\n"),
      },
      apply: {
        start_time: new Date(newStartTime).toISOString().substring(0, 19),
        end_time: new Date(newEndTime).toISOString().substring(0, 19),
        document: jobData?.apply.document.join("\n"),
        etc: jobData?.apply.etc.join("\n"),
        process: jobData?.apply.process.join("\n"),
        route: jobData?.apply.route,
        cut: jobData?.apply.cut,
      },
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
            <SharedButton buttonType="fillBlue" width={10} onClickHandler="submit" text="공고 수정하기" />
          </form>
        </section>
      </PageLayout>
    </main>
  );
};

JdEdit.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdEdit;
