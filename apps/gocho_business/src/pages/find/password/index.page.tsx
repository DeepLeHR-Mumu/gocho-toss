import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NextPage } from "next";
import Link from "next/link";
import { router } from "next/client";
import { FiArrowLeft, FiX } from "react-icons/fi";

import { EMAIL_REGEXP, EMAIL_ERROR_MESSAGE } from "shared-constant";
import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { AuthNav } from "@/components/global/authNav";
import { INTERNAL_URL } from "@/constants";
import { commonCssObj } from "@/styles";
import { useFindPassword } from "@/apis";

import { cssObj } from "./style";
import { FindPasswordFormValues } from "./type";

const FindPassword: NextPage = () => {
  const [didfoundPassword, setDidFoundPassword] = useState<boolean>(false);
  const { mutate: postFindPassword } = useFindPassword();
  const {
    register,
    watch,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<FindPasswordFormValues>({ mode: "onChange" });

  const findPasswordHandler: SubmitHandler<FindPasswordFormValues> = (findPasswordObj) => {
    postFindPassword(findPasswordObj, {
      onError: (error) => {
        const errorResponse = error.response?.data;
        if (errorResponse?.error_code === "BLANK_MEMBER") {
          setError("email", { type: "custom", message: EMAIL_ERROR_MESSAGE.NOT_EXISTING });
        }
      },
      onSuccess: () => {
        setDidFoundPassword(true);
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
          <p css={cssObj.title}>비밀번호 찾기</p>
          <Link href={INTERNAL_URL.HOME} passHref css={cssObj.closeIcon}>
            <FiX />
          </Link>
        </div>
        {didfoundPassword ? (
          <div>
            <div css={cssObj.resultContainer}>
              아래 메일로 임시 비밀번호가 전송되었습니다.
              <p css={cssObj.result}>{watch("email")}</p>
            </div>
            <NewSharedButton
              buttonType="fillBlue"
              width={25.5}
              text="로그인 하기"
              isLong
              onClickHandler={() => {
                router.push(INTERNAL_URL.LOGIN);
              }}
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit(findPasswordHandler)}>
            <div css={cssObj.formWrapper}>
              <div css={cssObj.inputWrapper}>
                <p css={cssObj.inputTitle}>아이디 (이메일)</p>
                <input
                  placeholder="이름을 입력해 주세요"
                  css={commonCssObj.input(25.5, Boolean(errors.email))}
                  {...register("email", {
                    required: EMAIL_ERROR_MESSAGE.REQUIRED,
                    pattern: {
                      value: EMAIL_REGEXP,
                      message: EMAIL_ERROR_MESSAGE.REGEX,
                    },
                  })}
                  onFocus={() => {
                    if (errors.email?.message === EMAIL_ERROR_MESSAGE.NOT_EXISTING) {
                      clearErrors("email");
                    }
                  }}
                />
              </div>
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
        )}
      </section>
    </main>
  );
};

export default FindPassword;
