import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { FiEyeOff, FiEye } from "react-icons/fi";

import { Input, Button, Divider } from "shared-ui/deeple-ds";
import { EMAIL_ERROR_MESSAGE, PWD_ERROR_MESSAGE, EMAIL_REGEXP, PWD_REGEXP } from "shared-constant";

import { useDoLogin } from "@/apis/auth";
import { RequestObjDef as LoginFormValues } from "@/apis/auth/useDoLogin/type";
import { useGetDeviceType, useToast } from "@/globalStates";
import kakaoLogo from "@/public/kakao.svg";

import ActionBar from "../ActionBar";

import { EmailLoginProps } from "./type";
import { cssObj } from "./style";

const EmailLogin = ({ toFindPassword, toSignUp, ...actionBarHandlers }: EmailLoginProps) => {
  const { setToastMessage } = useToast();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: "onChange" });
  const queryClient = useQueryClient();
  const { mutate: postLogin } = useDoLogin();
  const { isMobile, browserSize } = useGetDeviceType();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const changePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    postLogin(loginObj, {
      onError: () => {
        setError("email", { type: "custom", message: "" });
        setError("password", { type: "custom", message: "이메일 또는 비밀번호가 일치하지 않습니다." });
      },
      onSuccess: (response) => {
        localStorage.setItem("accessToken", `${response.data.access_token}`);
        localStorage.setItem("refreshToken", `${response.data.refresh_token}`);
        queryClient.invalidateQueries();
        setToastMessage("고초대졸닷컴에 오신 것을 환영합니다.");

        if (actionBarHandlers.closeHandler) {
          actionBarHandlers.closeHandler();
        }
      },
    });
  };

  return (
    <div
      css={cssObj.wrapper}
      style={isMobile ? { width: `${browserSize.innerWidth}px`, height: `${browserSize.innerHeight}px` } : {}}
    >
      <ActionBar title="로그인" {...actionBarHandlers} />
      {isMobile ? (
        <>
          <Divider css={cssObj.mobileDivider} />
          <div css={cssObj.loginWrapper}>
            <form css={cssObj.form}>
              <Input
                label="이메일"
                {...register("email", {
                  required: EMAIL_ERROR_MESSAGE.REQUIRED,
                  pattern: {
                    value: EMAIL_REGEXP,
                    message: EMAIL_ERROR_MESSAGE.REGEX,
                  },
                })}
                underline={isMobile}
                state={errors.email ? { state: "error", message: errors.email.message } : undefined}
                placeholder="이메일을 입력해주세요."
              />
              <Input
                label="비밀번호"
                type={passwordVisible ? "text" : "password"}
                maxLength={20}
                suffix={
                  passwordVisible ? (
                    <FiEye css={cssObj.eye} onClick={changePasswordVisible} />
                  ) : (
                    <FiEyeOff css={cssObj.eyeOff} onClick={changePasswordVisible} />
                  )
                }
                {...register("password", {
                  required: PWD_ERROR_MESSAGE.REQUIRED,
                  minLength: { value: 8, message: PWD_ERROR_MESSAGE.MIN_MAX },
                  pattern: {
                    value: PWD_REGEXP,
                    message: PWD_ERROR_MESSAGE.NOT_SPACE,
                  },
                })}
                underline={isMobile}
                state={errors.password ? { state: "error", message: errors.password.message } : undefined}
                placeholder="비밀번호를 입력해주세요."
              />
            </form>
          </div>
          <div css={cssObj.loginButtonWrapper}>
            <Button type="submit" size="large" fill onClick={handleSubmit(loginSubmit)}>
              로그인
            </Button>
          </div>
          <div css={cssObj.findPasswordButtonWrapper}>
            <Button size="small" css={cssObj.findPasswordButton} onClick={toFindPassword}>
              비밀번호를 잊어버리셨나요?
            </Button>
          </div>
          <div css={cssObj.mobileFooterWrapper}>
            <p css={cssObj.mobileDescription}>소셜 계정으로 간편하게 이용해 보세요</p>
            {/** TODO 소셜로그인 */}
            <button type="button" css={cssObj.mobileKakaoButton}>
              <Image src={kakaoLogo} alt="kakao" css={cssObj.mobileKakaoLogo} />
            </button>
            <div css={cssObj.signUpButtonWrapper}>
              <Button size="large" color="outlineGray" fill onClick={toSignUp}>
                이메일로 가입하기
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div css={cssObj.loginWrapper}>
            <form css={cssObj.form}>
              <Input
                label="이메일"
                {...register("email", {
                  required: EMAIL_ERROR_MESSAGE.REQUIRED,
                  pattern: {
                    value: EMAIL_REGEXP,
                    message: EMAIL_ERROR_MESSAGE.REGEX,
                  },
                })}
                underline={isMobile}
                state={errors.email ? { state: "error", message: errors.email.message } : undefined}
                placeholder="이메일을 입력해주세요."
              />
              <Input
                label="비밀번호"
                type="password"
                maxLength={20}
                {...register("password", {
                  required: PWD_ERROR_MESSAGE.REQUIRED,
                  minLength: { value: 8, message: PWD_ERROR_MESSAGE.MIN_MAX },
                  pattern: {
                    value: PWD_REGEXP,
                    message: PWD_ERROR_MESSAGE.NOT_SPACE,
                  },
                })}
                underline={isMobile}
                state={errors.password ? { state: "error", message: errors.password.message } : undefined}
                placeholder="비밀번호를 입력해주세요."
              />
            </form>
          </div>
          <div css={cssObj.loginButtonWrapper}>
            <Button type="submit" size="large" onClick={handleSubmit(loginSubmit)}>
              로그인
            </Button>
          </div>
          <div css={cssObj.findPasswordButtonWrapper}>
            <Button size="small" css={cssObj.findPasswordButton} onClick={toFindPassword}>
              비밀번호를 잊어버리셨나요?
            </Button>
          </div>
          <div css={cssObj.signUpButtonWrapper}>
            <Button size="large" color="outlineGray" onClick={toSignUp}>
              이메일로 가입하기
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailLogin;
