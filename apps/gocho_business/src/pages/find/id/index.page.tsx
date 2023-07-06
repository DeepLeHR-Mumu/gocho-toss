import { NextPage } from "next";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiArrowLeft, FiX } from "react-icons/fi";

import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { useDoLogin } from "@/apis";
import { AuthNav } from "@/components/global/authNav";
import { commonCssObj } from "@/styles";
import { INTERNAL_URL } from "@/constants";
import { LoginFormValues } from "@/pages/login/type";

import { cssObj } from "./style";

const FindId: NextPage = () => {
  const { mutate: postLogin } = useDoLogin();
  const {
    register,
    watch,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: "onChange" });

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    postLogin(loginObj, {
      onError: (error) => {
        const errorResponse = error.response?.data;
        if (errorResponse?.error_code === "BLANK_MEMBER" || errorResponse?.error_code === "NOT_MATCHED_INFO") {
          setError("email", { type: "custom", message: "asdf" });
          setError("password", { type: "custom", message: "asdf" });
        }
      },
      onSuccess: (response) => {
        localStorage.setItem("accessToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);

        if (!response.data.is_changed) {
          window.alert("보안을 위해 초기 비밀번호를 변경해주세요");
        }
      },
    });
  };

  const isEmail = Boolean(watch("email"));
  const isPassword = Boolean(watch("password"));

  return (
    <main>
      <AuthNav />
      <section css={cssObj.sectionContainer}>
        <div css={cssObj.titleContainer}>
          <Link href={INTERNAL_URL.HOME} passHref css={cssObj.backIcon}>
            <FiArrowLeft />
          </Link>
          <p css={cssObj.title}>아이디 찾기</p>
          <Link href={INTERNAL_URL.HOME} passHref css={cssObj.closeIcon}>
            <FiX />
          </Link>
        </div>
        <form onSubmit={handleSubmit(loginSubmit)}>
          <div css={cssObj.inputBox}>
            <p css={cssObj.inputTitle}>담당자 명(이름)</p>
            <input
              id="id"
              type="email"
              placeholder="이름을 입력해 주세요"
              css={commonCssObj.input(25.5, Boolean(errors.email))}
              {...register("email", {
                required: "이름을 입력해 주세요",
              })}
              onFocus={() => {
                if (errors.email?.message === "asdf") {
                  clearErrors("email");
                  clearErrors("password");
                }
                clearErrors("email");
              }}
            />
          </div>
          <div css={cssObj.inputBox}>
            <p css={cssObj.inputTitle}>휴대폰 번호</p>
            <input
              type="text"
              placeholder="숫자만 입력해 주세요"
              css={commonCssObj.input(25.5, Boolean(errors.password))}
              {...register("password", {
                required: "전화번호를 입력해 주세요",
              })}
              onFocus={() => {
                if (errors.password?.message === "asdf") {
                  clearErrors("email");
                  clearErrors("password");
                }
                clearErrors("password");
              }}
            />
          </div>
          <p css={cssObj.errorMsg}>{errors.email?.message || errors.password?.message}</p>
          <NewSharedButton
            buttonType={
              !isEmail || !isPassword || errors.email?.message || errors.password?.message ? "disabled" : "fillBlue"
            }
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

export default FindId;
