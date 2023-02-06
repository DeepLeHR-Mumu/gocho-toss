import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { managerTokenDecryptor } from "shared-util/tokenDecryptor";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { CheckBoxWithDesc } from "shared-ui/common/atom/checkbox_desc";
import gochoColorSrc from "shared-image/global/deepLeLogo/logoIconColor.svg";
import { EMAIL_REGEXP, PWD_REGEXP } from "shared-constant/regExp";

import { useModal } from "@/globalStates/useModal";
import { INTERNAL_URL } from "@/constants/url";
import { useUserState } from "@/globalStates/useUserState";
import { TopBar } from "@/components/global/layout/topBar";
import { useDoLogin } from "@/apis/auth/useDoLogin";
import { loginPageFunnelEvent, loginSuccessEvent, signupButtonClickEvent } from "@/ga/auth";

import { LOGIN_ERROR_MESSAGES } from "./constant";
import { PageHead } from "./pageHead";
import { LoginFormValues } from "./type";
import { cssObj } from "./style";

const LoginPage: NextPage = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const queryClient = useQueryClient();
  const { setUserInfoData, userInfoData } = useUserState();
  const { mutate: postLogin } = useDoLogin();
  const { setCurrentModal } = useModal();
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
        const { id, company_id, company_name, company_logo, iat, exp, email, name, department } = managerTokenDecryptor(
          response.data.access_token
        );
        setUserInfoData({
          id,
          companyId: company_id,
          companyName: company_name,
          companyLogo: company_logo,
          email,
          name,
          department,
          iat,
          exp,
        });
        queryClient.invalidateQueries();
        router.push(INTERNAL_URL.JD_LIST);
      },
    });
  };

  useEffect(() => {
    const isLogin = Boolean(userInfoData);
    if (isLogin) router.replace(INTERNAL_URL.JD_LIST);
  }, [router, userInfoData]);

  useEffect(() => {
    loginPageFunnelEvent();
  }, []);

  const isEmail = Boolean(watch("email"));
  const isPassword = Boolean(watch("password"));

  return (
    <>
      <PageHead />
      <TopBar />
      <main css={cssObj.wrapper}>
        <InvisibleH2 title="고초대졸닷컴 로그인하기" />
        <div css={cssObj.container}>
          <div css={cssObj.titleBox}>
            <div css={cssObj.gochoLogoBox}>
              <Image src={gochoColorSrc} alt="고초대졸닷컴" layout="fill" objectFit="contain" />
            </div>
            <strong css={cssObj.title}>생산직 채용의 새로운 기준</strong>
          </div>

          <form css={cssObj.formCSS} onSubmit={handleSubmit(loginSubmit)}>
            <ul>
              <li css={cssObj.inputBox(errors.email?.message)}>
                <input
                  type="email"
                  placeholder="아이디(이메일)"
                  css={cssObj.inputCSS}
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
              </li>
              <li css={cssObj.inputBox(errors.password?.message)}>
                <input
                  type={isShowPassword ? "text" : "password"}
                  placeholder="비밀번호"
                  css={cssObj.inputCSS}
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
              </li>
            </ul>
            <div css={cssObj.bottomBox}>
              <CheckBoxWithDesc desc="자동 로그인" id="auto_login" registerObj={register("auto_login")} />

              <button
                type="button"
                css={cssObj.findPasswordButton}
                onClick={() => {
                  setCurrentModal("findPasswordModal");
                }}
              >
                비밀번호 찾기
              </button>
            </div>

            <p css={cssObj.errorMsg}>{errors.email?.message || errors.password?.message}</p>

            <button type="submit" css={cssObj.submitButton(isEmail && isPassword)} disabled={!isEmail || !isPassword}>
              로그인
            </button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYgeAv0BREQSPEtgjHO6-1rHh-srF3EDnRHAWL2e2g1PL_Pw/viewform"
              css={cssObj.signupButton}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                signupButtonClickEvent();
              }}
            >
              기업회원 가입하기
            </a>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
