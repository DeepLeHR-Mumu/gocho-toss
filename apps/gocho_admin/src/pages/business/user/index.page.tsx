import { NextPage } from "next";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { mainContainer, pageTitle } from "@style/commonStyles";
import { useAddRecruiter } from "@api/recruiter/useAddRecruiter";
import { useFindCompany } from "@api/company/useFindCompany";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { cssObj } from "./style";
import { RecruiterFormValues } from "./type";

const BusinessUser: NextPage = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [checkMsg, setCheckMsg] = useState<string>();

  const { register, handleSubmit, formState } = useForm<RecruiterFormValues>();
  const { mutate: addRecruiterMutate } = useAddRecruiter();
  const { data: companyDataObj, isLoading, isError } = useFindCompany({ word: searchWord, order: "recent" });

  const addRecruiterHandler: SubmitHandler<RecruiterFormValues> = (recruiterObj) => {
    addRecruiterMutate(recruiterObj, {
      onSuccess: () => {
        setCheckMsg("새로운 기업 계정이 추가되었습니다.");
      },

      onError: () => {
        setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
      },
    });
  };

  if (!companyDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>기업회원 등록</h2>
      <form onSubmit={handleSubmit(addRecruiterHandler)}>
        <div css={cssObj.inputWrapper}>
          <div css={cssObj.inputContainer}>
            <strong css={cssObj.inputTitle}>기업</strong>
            <input
              css={cssObj.searchBox}
              type="text"
              onBlur={(e) => {
                setSearchWord(e.target.value);
              }}
            />
            <button css={cssObj.searchCompanyButton} type="button">
              검색
            </button>
            <select
              css={cssObj.selectBox}
              {...register("company_id", { valueAsNumber: true, required: "필수 항목입니다." })}
            >
              <option value="">기업 선택 ▼</option>
              {companyDataObj.companyDataArr.map((company) => {
                return (
                  <option key={company.name} value={company.id}>
                    {company.name}
                  </option>
                );
              })}
            </select>
          </div>
          <p css={cssObj.errorMessage}>{formState.errors.company_id && formState.errors.company_id.message}</p>
        </div>
        <div css={cssObj.inputWrapper}>
          <div css={cssObj.inputContainer}>
            <strong css={cssObj.inputTitle}>이메일(아이디)</strong>
            <input css={cssObj.inputBox} type="email" {...register("email", { required: "필수 항목입니다." })} />
          </div>
          <p css={cssObj.errorMessage}>{formState.errors.email && formState.errors.email.message}</p>
        </div>
        <div css={cssObj.inputWrapper}>
          <div css={cssObj.inputContainer}>
            <strong css={cssObj.inputTitle}>이름</strong>
            <input
              css={cssObj.inputBox}
              {...register("name", {
                required: "필수 항목입니다.",
                maxLength: { value: 5, message: "최대 길이는 5자입니다." },
              })}
            />
          </div>
          <p css={cssObj.errorMessage}>{formState.errors.name && formState.errors.name.message}</p>
        </div>
        <div css={cssObj.inputWrapper}>
          <div css={cssObj.inputContainer}>
            <strong css={cssObj.inputTitle}>부서</strong>
            <input
              css={cssObj.inputBox}
              {...register("department", {
                required: "필수 항목입니다.",
                maxLength: { value: 15, message: "최대 길이는 15자입니다." },
              })}
            />
          </div>
          <p css={cssObj.errorMessage}>{formState.errors.department && formState.errors.department.message}</p>
        </div>

        <button type="submit" css={cssObj.submitButton}>
          등록하기
        </button>
        {checkMsg && <p css={cssObj.checkMsgBox}>{checkMsg}</p>}
      </form>
    </main>
  );
};

export default BusinessUser;
