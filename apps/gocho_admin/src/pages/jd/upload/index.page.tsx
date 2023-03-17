import { useState } from "react";
import type { NextPage } from "next";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { NormalButton } from "shared-ui/common/atom/button/normalButton";

import { useFindCompany } from "@api/company/useFindCompany";
import { useAddJd } from "@api/jd/useAddJd";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { Layout } from "@component/layout";

import { CommonDataPart } from "./part/commonDataPart";
import { PositionRequiredDataPart } from "./part/positionRequiredDataPart";
import { PositionTaskDataPart } from "./part/positionTaskDataPart";
import { PositionEtcDataPart } from "./part/positionEtcDataPart";

import { blankPosition } from "./constant";
import { JobFormValues } from "./type";
import { cssObj } from "./style";

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
  const { mutate: addJobMutate } = useAddJd();

  if (!companyDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  const jobSubmitHandler: SubmitHandler<JobFormValues> = (jobObj) => {
    addJobMutate(
      { dto: jobObj },
      {
        onSuccess: () => {
          setCheckMsg("서버에 공고가 업로드 되었습니다.");
        },

        onError: (addJobError) => {
          setCheckMsg(addJobError.response?.data.error_message);
        },
      }
    );
  };

  return (
    <main css={cssObj.wrapper}>
      <Layout>
        <h2 css={cssObj.title}>공고 업로드</h2>
        <form css={cssObj.formContainer} onSubmit={handleSubmit(jobSubmitHandler)}>
          <CommonDataPart
            companyDataArr={companyDataObj.companyDataArr}
            jobForm={jobForm}
            setSearchWord={setSearchWord}
          />
          <ul css={cssObj.fieldArrCSS}>
            {fields.map((item, index) => {
              return (
                <li key={item.id}>
                  <PositionRequiredDataPart id={item.id} index={index} jobForm={jobForm} />
                  <PositionTaskDataPart id={item.id} index={index} jobForm={jobForm} />
                  <PositionEtcDataPart id={item.id} index={index} jobForm={jobForm} append={append} remove={remove} />
                </li>
              );
            })}
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

            <NormalButton isSubmit wide={false} text="공고 등록하기" variant="filled" />
          </div>
        </form>
      </Layout>
    </main>
  );
};

export default JdUpload;
