import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { NormalButton } from "shared-ui/common/atom/button/normalButton";

import { useFindCompany, useEditJd, useJdDetail } from "@/api";
import { ErrorScreen, GlobalLayout, LoadingScreen, PageLayout } from "@/component";
import type { NextPageWithLayout } from "@/types";

import { CommonDataPart } from "./part/commonDataPart";
import { PositionRequiredDataPart } from "./part/positionRequiredDataPart";
import { PositionTaskDataPart } from "./part/positionTaskDataPart";
import { PositionEtcDataPart } from "./part/positionEtcDataPart";
import { JobFormValues } from "./type";
import { blankPosition } from "./constant";
import { cssObj } from "./style";

const JdEdit: NextPageWithLayout = () => {
  const router = useRouter();
  const jobId = Number(router.query.id);

  const [searchWord, setSearchWord] = useState<string>("");
  const [checkMsg, setCheckMsg] = useState<string>();

  const { data: jobData } = useJdDetail({ id: jobId });
  const { data: companyDataObj, isLoading, isError } = useFindCompany({ word: searchWord, order: "recent" });
  const { mutate: editJobMutate } = useEditJd();

  const jobForm = useForm<JobFormValues>({
    defaultValues: {
      company_id: jobData?.company.id,
      position_arr: [blankPosition],
    },
  });
  const { control, handleSubmit, reset } = jobForm;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "position_arr",
  });

  useEffect(() => {
    const newStartTime = jobData?.startTime ? jobData.startTime + 540000 * 60 : 0;
    const newEndTime = jobData?.endTime ? jobData.endTime + 540000 * 60 : 0;

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
      rotation_etc: position.rotationEtc,
      place: {
        type: position.place.type,
        address_arr: position.place.addressArr || [],
        etc: position.place.etc || "",
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
      cut: jobData?.cut,
      process_arr: jobData?.processArr.join("\n"),
      apply_route_arr: jobData?.applyRouteArr.join("\n"),
      apply_url: jobData?.applyUrl,
      etc_arr: jobData?.etcArr.join("\n"),
      position_arr: positionNewArr,
    });
  }, [jobData, reset]);

  if (!companyDataObj || !jobData || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  const jobSubmitHandler: SubmitHandler<JobFormValues> = (jobObj) => {
    editJobMutate(
      { jdId: jobId, dto: jobObj },
      {
        onSuccess: () => {
          setCheckMsg("공고가 수정 되었습니다.");
        },

        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
        },
      }
    );
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
            <CommonDataPart
              companyDataArr={companyDataObj.companyDataArr}
              jobForm={jobForm}
              setSearchWord={setSearchWord}
              jobData={jobData}
            />
            <ul css={cssObj.fieldArrCSS}>
              {fields.map((item, index) => (
                <li key={item.id}>
                  <PositionRequiredDataPart id={item.id} index={index} jobForm={jobForm} />
                  <PositionTaskDataPart id={item.id} index={index} jobForm={jobForm} />
                  <PositionEtcDataPart id={item.id} index={index} jobForm={jobForm} append={append} remove={remove} />
                </li>
              ))}
            </ul>
            {checkMsg && <p css={cssObj.warning}>{checkMsg}</p>}
            <div css={cssObj.buttonBox}>
              <NormalButton
                buttonClick={() => {
                  append(blankPosition);
                }}
                wide={false}
                text="직무 추가"
                variant="outlined"
              />

              <NormalButton isSubmit wide={false} text="공고 수정하기" variant="filled" />
            </div>
          </form>
        </section>
      </PageLayout>
    </main>
  );
};

JdEdit.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdEdit;
