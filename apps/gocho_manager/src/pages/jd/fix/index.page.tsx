import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { useFindCompany } from "@api/company/useFindCompany";
import { useAddJob } from "@api/job/useAddJob";
import { useJobDetail } from "@api/job/useJobDetail";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { CommonDataPart } from "./part/commonDataPart";
import { PositionRequiredDataPart } from "./part/positionRequiredDataPart";
import { PositionTaskDataPart } from "./part/positionTaskDataPart";
import { PositionEtcDataPart } from "./part/positionEtcDataPart";
import { JobFormValues, JobSubmitValues } from "./type";
import { formContainer, positionContainer, addPositionButton, submitButton, checkMsgBox } from "./style";
import { blankPosition } from "./constant";

const JdUpload: NextPage = () => {
  const router = useRouter();
  const jobId = Number(router.query.id);

  const [searchWord, setSearchWord] = useState<string>("");
  const [checkMsg, setCheckMsg] = useState<string>();

  const { data: jobData } = useJobDetail({ id: jobId });
  const { data: companyDataObj, isLoading, isError } = useFindCompany({ word: searchWord, order: "recent" });
  const { mutate: addJobMutate } = useAddJob();

  const jobForm = useForm<JobFormValues>({
    defaultValues: {
      company_id: jobData?.companyId,
      position_arr: [blankPosition],
    },
  });

  const { register, control, handleSubmit, watch, setValue, reset } = jobForm;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "position_arr",
  });

  useEffect(() => {
    const positionNewArr = jobData?.positionArr.map((position) => {
      return {
        middle: position.edu_summary.middle,
        high: position.edu_summary.high,
        college: position.edu_summary.college,
        four: position.edu_summary.four,
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
        },
        hire_number: position.hireCount,
        pay_arr: position.payArr?.join("\n"),
        preferred_certi_arr: position.preferredCertiArr,
        preferred_etc_arr: position.preferredEtcArr?.join("\n"),
      };
    });
    reset({
      company_id: jobData?.companyId,
      title: jobData?.title,
      start_time: jobData?.startTime,
      end_time: jobData?.endTime,
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
    const newJobObj: JobSubmitValues = {
      ...jobObj,
      process_arr: jobObj.process_arr?.split("\n"),
      apply_route_arr: jobObj.apply_route_arr?.split("\n"),
      etc_arr: jobObj.etc_arr?.split("\n"),
      position_arr: jobObj.position_arr.map((position) => {
        return {
          ...position,
          required_etc_arr: position.required_etc_arr?.split("\n") || null,
          task_detail_arr: position.task_detail_arr?.split("\n"),
          pay_arr: position.pay_arr?.split("\n"),
          preferred_etc_arr: position.preferred_etc_arr?.split("\n") || null,
        };
      }),
    };
    const formData = new FormData();
    const json = JSON.stringify(newJobObj);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("dto", blob);

    addJobMutate(
      { dto: formData },
      {
        onSuccess: () => {
          setCheckMsg("서버에 공고가 업로드 되었습니다.");
        },

        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
        },
      }
    );
  };

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공고 업로드</h2>
      <section>
        <form css={formContainer} onSubmit={handleSubmit(jobSubmitHandler)}>
          <CommonDataPart
            companyDataArr={companyDataObj.companyDataArr}
            register={register}
            watch={watch}
            setValue={setValue}
            setSearchWord={setSearchWord}
            jobData={jobData}
          />
          <ul>
            {fields.map((item, index) => {
              return (
                <li css={positionContainer} key={item.id}>
                  <PositionRequiredDataPart id={item.id} index={index} jobForm={jobForm} />
                  <PositionTaskDataPart id={item.id} index={index} jobForm={jobForm} />
                  <PositionEtcDataPart id={item.id} index={index} jobForm={jobForm} append={append} remove={remove} />
                </li>
              );
            })}
          </ul>
          <button
            css={addPositionButton}
            type="button"
            onClick={() => {
              append(blankPosition);
            }}
          >
            직무 추가
          </button>
          <button css={submitButton} type="submit">
            공고 등록하기
          </button>
          {checkMsg && <p css={checkMsgBox}>{checkMsg}</p>}
        </form>
      </section>
    </main>
  );
};

export default JdUpload;
