import { useState } from "react";
import type { NextPage } from "next";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { useFindCompany } from "@api/company/useFindCompany";
import { useAddJob } from "@api/job/useAddJob";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { CommonDataPart } from "./part/commonDataPart";
import { PositionRequiredDataPart } from "./part/positionRequiredDataPart";
import { PositionTaskDataPart } from "./part/positionTaskDataPart";
import { PositionEtcDataPart } from "./part/positionEtcDataPart";
import { JobFormValues, JobSubmitValues } from "../type";
import { formContainer, positionContainer, addPositionButton, submitButton, checkMsgBox } from "./style";
import { blankPosition } from "./constant";

const JdUpload: NextPage = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [checkMsg, setCheckMsg] = useState<string>();

  const jobForm = useForm<JobFormValues>({
    defaultValues: {
      position_arr: [blankPosition],
    },
  });
  const { control, handleSubmit } = jobForm;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "position_arr",
  });

  const { data: companyDataObj, isLoading, isError } = useFindCompany({ word: searchWord, order: "recent" });
  const { mutate: addJobMutate } = useAddJob();

  if (!companyDataObj || isLoading) {
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
      etc_arr: jobObj.etc_arr?.split("\n") || null,
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
            jobForm={jobForm}
            setSearchWord={setSearchWord}
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
