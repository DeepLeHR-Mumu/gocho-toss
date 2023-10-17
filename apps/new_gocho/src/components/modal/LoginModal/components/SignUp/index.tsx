import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

import { Input, Button, Divider } from "shared-ui/deeple-ds";
import { EMAIL_ERROR_MESSAGE, PWD_ERROR_MESSAGE, EMAIL_REGEXP, PWD_REGEXP } from "shared-constant";
import { ErrorResponseDef } from "shared-type/api";

import { useDoSignUp } from "@/apis/auth";
import { RequestObjDef as SignUpFormValues } from "@/apis/auth/useDoSignup/type";
import { signupModalCloseEvent, signupSuccessEvent } from "@/ga/auth";
import { useGetDeviceType, useToast } from "@/globalStates";

import ActionBar from "../ActionBar";
import { ActionBarHandlers } from "../ActionBar/type";

import { cssObj } from "./style";

const SignUp = ({ ...actionBarHandlers }: ActionBarHandlers) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { isMobile, browserSize } = useGetDeviceType();
  const { setToastMessage } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({ mode: "onChange" });
  const { mutate: postSignUp, isLoading } = useDoSignUp();

  const signUpSubmit: SubmitHandler<SignUpFormValues> = (signUpObj) => {
    if (!isLoading) {
      postSignUp(signUpObj, {
        onError: (error) => {
          if (axios.isAxiosError(error) && error.response) {
            const errorResponse = error.response?.data as ErrorResponseDef;
            setErrorMessage(errorResponse.error_message);
          }
        },
        onSuccess: (response) => {
          localStorage.setItem("accessToken", `${response?.data.access_token}`);
          localStorage.setItem("refreshToken", `${response?.data.refresh_token}`);
          signupSuccessEvent();
          setToastMessage("환영합니다.");

          if (actionBarHandlers.closeHandler) {
            actionBarHandlers.closeHandler();
          }
        },
      });
    }
  };

  return (
    <div
      css={cssObj.wrapper}
      style={isMobile ? { width: `${browserSize.innerWidth}px`, height: `${browserSize.innerHeight}px` } : {}}
    >
      <ActionBar title="회원가입" gaEvent={signupModalCloseEvent} {...actionBarHandlers} />
      <Divider css={cssObj.mobileDivider} />
      <div css={cssObj.signUpWrapper}>
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
            autoComplete="off"
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
            autoComplete="off"
            placeholder="비밀번호를 입력해주세요."
          />
        </form>
      </div>
      {errorMessage && <p css={cssObj.errorMessage}>{errorMessage}</p>}
      <div css={cssObj.signUpButtonWrapper}>
        <Button type="submit" size="large" fill={isMobile} disabled={isLoading} onClick={handleSubmit(signUpSubmit)}>
          가입하기
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
