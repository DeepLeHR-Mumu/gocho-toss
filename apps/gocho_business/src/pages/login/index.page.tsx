import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { CheckBoxWithDesc } from "shared-ui/common/atom/checkbox_desc";
import { NewSharedButton } from "shared-ui/common/newSharedButton";
import { EMAIL_REGEXP, PWD_REGEXP } from "shared-constant";

import { useDoLogin, useManagerProfile } from "@/apis";
import { INTERNAL_URL } from "@/constants";
import { loginPageFunnelEvent, loginSuccessEvent, signupButtonClickEvent } from "@/ga";
import { useModal } from "@/globalStates";
import { commonCssObj } from "@/styles";
import bizTextColor from "@/public/image/deepleLogo/bizTextColor.svg";

import { LOGIN_ERROR_MESSAGES } from "./constant";
import { PageHead } from "./pageHead";
import { LoginFormValues } from "./type";
import { cssObj } from "./style";

const LoginPage: NextPage = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const queryClient = useQueryClient();
  const { isSuccess: isManagerLogin } = useManagerProfile();
  const { mutate: postLogin } = useDoLogin();
  const { setModal } = useModal();
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
          setError("email", { type: "custom", message: LOGIN_ERROR_MESSAGES.NOT_MATCHED_INFO });
          setError("password", { type: "custom", message: LOGIN_ERROR_MESSAGES.NOT_MATCHED_INFO });
        }
      },
      onSuccess: (response) => {
        loginSuccessEvent(watch("auto_login"));
        localStorage.setItem("accessToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
        queryClient.invalidateQueries();

        if (!response.data.is_changed) {
          window.alert("보안을 위해 초기 비밀번호를 변경해주세요");
          router.push(INTERNAL_URL.MY_PAGE);
          return;
        }

        router.push(INTERNAL_URL.HOME);
      },
    });
  };

  useEffect(() => {
    if (isManagerLogin) router.replace(INTERNAL_URL.HOME);
  }, [isManagerLogin, router]);

  useEffect(() => {
    loginPageFunnelEvent();
  }, []);

  const isEmail = Boolean(watch("email"));
  const isPassword = Boolean(watch("password"));

  return (
    <>
      <PageHead />
      <main css={cssObj.mainContainer}>
        <section css={cssObj.backgroundWrapper}>
          여기
          <br /> 텍스트
          <br /> 들어감
        </section>
        <section css={cssObj.loginWrapper}>
          <InvisibleH2 title="고초대졸닷컴 로그인하기" />
          <div css={cssObj.logoBox}>
            <Image src={bizTextColor} alt="고초대졸닷컴" fill />
          </div>
          <form onSubmit={handleSubmit(loginSubmit)}>
            <div css={cssObj.inputBox}>
              <p css={cssObj.inputTitle}>로그인</p>
              <input
                id="id"
                type="email"
                placeholder="아이디(이메일)"
                css={commonCssObj.input(25.5, Boolean(errors.email))}
                {...register("email", {
                  required: LOGIN_ERROR_MESSAGES.BLANK_EMAIL,
                  maxLength: {
                    value: 30,
                    message: LOGIN_ERROR_MESSAGES.EXCEED_LENGTH_EMAIL,
                  },
                  pattern: {
                    value: EMAIL_REGEXP,
                    message: LOGIN_ERROR_MESSAGES.WRONG_EMAIL,
                  },
                })}
                onFocus={() => {
                  if (errors.email?.message === LOGIN_ERROR_MESSAGES.NOT_MATCHED_INFO) {
                    clearErrors("email");
                    clearErrors("password");
                  }
                  clearErrors("email");
                }}
              />
            </div>
            <div css={cssObj.inputBox}>
              <p css={cssObj.inputTitle}>비밀번호</p>
              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="비밀번호"
                css={commonCssObj.input(25.5, Boolean(errors.password))}
                {...register("password", {
                  required: LOGIN_ERROR_MESSAGES.BLANK_PWD,
                  pattern: {
                    value: PWD_REGEXP,
                    message: LOGIN_ERROR_MESSAGES.NO_SPACE,
                  },
                  minLength: {
                    value: 8,
                    message: LOGIN_ERROR_MESSAGES.MIN_PASSWORD,
                  },
                  maxLength: {
                    value: 20,
                    message: LOGIN_ERROR_MESSAGES.MAX_PASSWORD,
                  },
                })}
                onFocus={() => {
                  if (errors.password?.message === LOGIN_ERROR_MESSAGES.NOT_MATCHED_INFO) {
                    clearErrors("email");
                    clearErrors("password");
                  }
                  clearErrors("password");
                }}
              />
              <button
                type="button"
                aria-label="비밀번호 확인"
                css={cssObj.eyeButtonCSS}
                onClick={() => {
                  setIsShowPassword((prev) => !prev);
                }}
              >
                {isShowPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <div css={cssObj.bottomBox}>
              <CheckBoxWithDesc desc="자동 로그인" id="auto_login" registerObj={register("auto_login")} />
              <div css={cssObj.buttonContainer}>
                <button
                  type="button"
                  css={cssObj.findButton}
                  onClick={() => {
                    router.push(INTERNAL_URL.FIND_ID);
                  }}
                >
                  아이디 찾기
                </button>
                <span css={cssObj.contour} />
                <button
                  type="button"
                  css={cssObj.findButton}
                  onClick={() => {
                    setModal("findPasswordModal");
                  }}
                >
                  비밀번호 찾기
                </button>
              </div>
            </div>
            <p css={cssObj.errorMsg}>{errors.email?.message || errors.password?.message}</p>
            <NewSharedButton
              buttonType={
                !isEmail || !isPassword || errors.email?.message || errors.password?.message ? "disabled" : "fillBlue"
              }
              width={25.5}
              text="로그인"
              onClickHandler="submit"
              isLong
            />
            <div css={cssObj.buttonDivider} />
            <NewSharedButton
              buttonType="outLineGray"
              width={25.5}
              text="기업회원 가입하기"
              onClickHandler={() => {
                signupButtonClickEvent();
              }}
              isLong
            />
          </form>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
