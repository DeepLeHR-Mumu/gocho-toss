import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NextPage } from "next";
import Link from "next/link";
import { FiArrowLeft, FiX } from "react-icons/fi";

import { EMAIL_ERROR_MESSAGE } from "shared-constant";
import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { useFindCompany, useFindPassword } from "@/apis";
import { AuthNav } from "@/components/global/authNav";
import { INTERNAL_URL } from "@/constants";
import { commonCssObj } from "@/styles";

import { SignupValues } from "./type";
import { cssObj } from "./style";

const Signup: NextPage = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const { mutate: postFindPassword } = useFindPassword();
  const { data: companyDataObj } = useFindCompany({ word: searchWord });
  const {
    watch,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({ mode: "onChange" });

  const findPasswordHandler: SubmitHandler<SignupValues> = (SignupObj) => {
    postFindPassword(SignupObj, {
      onError: (error) => {
        const errorResponse = error.response?.data;
        if (errorResponse?.error_code === "BLANK_MEMBER") {
          setError("email", { type: "custom", message: EMAIL_ERROR_MESSAGE.NOT_EXISTING });
        }
      },
    });
  };

  const isEmail = Boolean(watch("email"));

  return (
    <main>
      <AuthNav />
      <section css={cssObj.sectionContainer}>
        <div css={cssObj.titleContainer}>
          <Link href={INTERNAL_URL.HOME} passHref css={cssObj.backIcon}>
            <FiArrowLeft />
          </Link>
          <p css={cssObj.title}>회원가입</p>
          <Link href={INTERNAL_URL.HOME} passHref css={cssObj.closeIcon}>
            <FiX />
          </Link>
        </div>
        <form onSubmit={handleSubmit(findPasswordHandler)}>
          <div css={cssObj.formWrapper}>
            <div css={cssObj.inputWrapper}>
              <p css={cssObj.inputTitle}>기업명이 무엇인가요?</p>
              <input
                css={commonCssObj.input(25.5, false)}
                type="text"
                onChange={(e) => {
                  setSearchWord(e.target.value);
                }}
              />
            </div>
            {companyDataObj?.companyDataArr.map((company) => (
              <p key={`SignupCompany${company.id}`}>{company.name}</p>
            ))}
            <p css={cssObj.errorMsg}>{errors.email?.message}</p>
          </div>
          <NewSharedButton
            buttonType={!isEmail || errors.email?.message ? "disabled" : "fillBlue"}
            width={25.5}
            text="다음"
            onClickHandler="submit"
            isLong
          />
        </form>
      </section>
    </main>
  );
};

export default Signup;
