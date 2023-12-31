import { FunctionComponent, useState, useRef } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { FiCheckCircle, FiX } from "react-icons/fi";

import smallMono from "shared-image/global/deeple/smallMono.svg";
import { EMAIL_REGEXP, PWD_REGEXP } from "shared-constant";
import { useFocusTrap } from "shared-hook";
import { SharedButton } from "shared-ui/common/sharedButton";

import { useDoLogin } from "@/apis";
import { useModal, useToast } from "@/globalStates";
import { loginSuccessEvent } from "@/ga";

import { ModalComponent } from "../modalBackground";
import { LOGIN_ERROR_MESSAGES } from "./constant";
import { LoginFormValues } from "./type";
import { cssObj } from "./style";

export const LoginModal: FunctionComponent = () => {
  const [isFocusObj, setIsFocusObj] = useState({
    email: false,
    password: false,
  });
  const modalRef = useRef<HTMLDivElement>(null);

  useFocusTrap(modalRef);
  const queryClient = useQueryClient();

  const { setToast } = useToast();
  const { closeModal } = useModal();
  const { mutate: postLogin } = useDoLogin();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    watch,
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
        closeModal();
        loginSuccessEvent(watch("auto_login"));
        localStorage.setItem("accessToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
        queryClient.invalidateQueries();
        setToast("재접속되었습니다");
      },
    });
  };

  const emailCSSObj = {
    isError: Boolean(errors.email),
    isFocus: isFocusObj.email,
    isSuccess: Boolean(watch("email")) && Boolean(!errors.email),
  };

  const passwordCSSObj = {
    isError: Boolean(errors.password),
    isFocus: isFocusObj.password,
    isSuccess: Boolean(watch("password")) && Boolean(!errors.password),
  };

  return (
    <ModalComponent>
      <div css={cssObj.wrapper} ref={modalRef} tabIndex={-1}>
        <div css={cssObj.logoContainer}>
          <Image src={smallMono} alt="고초대졸 로고" />
        </div>
        <p css={cssObj.desc}>재로그인이 필요합니다</p>
        <form css={cssObj.formCSS} onSubmit={handleSubmit(loginSubmit)}>
          <ul css={cssObj.formArr}>
            <li>
              <p css={cssObj.label(emailCSSObj)}>이메일</p>
              <input
                css={cssObj.input(emailCSSObj)}
                type="email"
                placeholder="이메일을 입력해주세요"
                {...register("email", {
                  required: LOGIN_ERROR_MESSAGES.BLANK_EMAIL,
                  pattern: {
                    value: EMAIL_REGEXP,
                    message: LOGIN_ERROR_MESSAGES.WRONG_EMAIL,
                  },
                  maxLength: {
                    value: 30,
                    message: LOGIN_ERROR_MESSAGES.EXCEED_LENGTH_EMAIL,
                  },
                  onBlur: () => {
                    setIsFocusObj({
                      email: false,
                      password: false,
                    });
                  },
                })}
                onFocus={() => {
                  if (errors.email?.message === LOGIN_ERROR_MESSAGES.NOT_MATCHED_INFO) {
                    clearErrors("password");
                  }
                  clearErrors("email");
                  setIsFocusObj({
                    email: true,
                    password: false,
                  });
                }}
              />
              {errors.email && (
                <button
                  css={cssObj.deleteButton}
                  type="button"
                  aria-label="이메일 제거"
                  onClick={() => {
                    setValue("email", "");
                    clearErrors("email");
                  }}
                >
                  <FiX />
                </button>
              )}
              {watch("email") && !errors.email && (
                <p css={cssObj.successIconBox}>
                  <FiCheckCircle />
                </p>
              )}
            </li>
            <li>
              <p css={cssObj.label(passwordCSSObj)}>비밀번호</p>
              <input
                css={cssObj.input(passwordCSSObj)}
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...register("password", {
                  required: LOGIN_ERROR_MESSAGES.BLANK_PWD,
                  minLength: { value: 8, message: LOGIN_ERROR_MESSAGES.MIN_PASSWORD },
                  maxLength: { value: 20, message: LOGIN_ERROR_MESSAGES.MAX_PASSWORD },
                  pattern: {
                    value: PWD_REGEXP,
                    message: LOGIN_ERROR_MESSAGES.NO_SPACE,
                  },
                  onBlur: () => {
                    setIsFocusObj({
                      email: false,
                      password: false,
                    });
                  },
                })}
                onFocus={() => {
                  if (errors.password?.message === LOGIN_ERROR_MESSAGES.NOT_MATCHED_INFO) {
                    clearErrors("email");
                  }
                  clearErrors("password");
                  setIsFocusObj({
                    email: false,
                    password: true,
                  });
                }}
              />
              {errors.password && (
                <button
                  css={cssObj.deleteButton}
                  type="button"
                  aria-label="비밀번호 제거"
                  onClick={() => {
                    setValue("password", "");
                    clearErrors("password");
                  }}
                >
                  <FiX />
                </button>
              )}
              {watch("password") && !errors.password && (
                <p css={cssObj.successIconBox}>
                  <FiCheckCircle />
                </p>
              )}
            </li>
          </ul>

          <div css={cssObj.errorBox}>
            <p css={cssObj.errorMsgCSS}>{errors.email?.message || errors.password?.message}</p>
          </div>

          <div css={cssObj.loginButton}>
            <SharedButton buttonType="fillBlue" text="로그인 하기" onClickHandler="submit" isLong width={18} />
          </div>
        </form>
      </div>
    </ModalComponent>
  );
};
