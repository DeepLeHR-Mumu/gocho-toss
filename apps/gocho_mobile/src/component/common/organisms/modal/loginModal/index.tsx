import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";
import kakaoMono from "shared-image/global/sns/kakaoLogo.svg";
import { useDoLogin } from "shared-api/auth";
import { EMAIL_REGEXP, PWD_REGEXP } from "shared-constant/regExp";
import { EMAIL_ERROR_MESSAGE, PWD_ERROR_MESSAGE } from "shared-constant/errorMessage";
import { AccountInput } from "shared-ui/common/atom/accountInput";
import { NormalButton } from "shared-ui/common/atom/button";
import { useToast } from "@recoil/hook/toast";
import { useModal } from "@recoil/hook/modal";
import { BottomPopup } from "@component/bottomPopup";
import { ErrorResponse } from "shared-api/auth/usePatchUserInfo/type";

import { MAIN_URL } from "shared-constant/internalURL";
import {
  wrapper,
  closeButton,
  desc,
  formCSS,
  formArr,
  errorMsgCSS,
  loginButton,
  logoContainer,
  kakaoLoginBox,
  kakaoLogoBox,
  findPwButton,
} from "./style";
import { LoginFormValues } from "./type";

export const LoginModal: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<LoginFormValues>({ mode: "onChange" });
  const queryClient = useQueryClient();

  const { setCurrentToast } = useToast();
  const { mutate } = useDoLogin();
  const { closeModal, setCurrentModal, currentModal } = useModal();

  const [errorMsg, setErrorMsg] = useState<null | string>(null);

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    mutate(loginObj, {
      onError: (error) => {
        const errorResponse = error.response?.data as ErrorResponse;
        setErrorMsg(errorResponse.error.errorMessage);
      },
      onSuccess: (response) => {
        localStorage.setItem("token", `${response.data.token}`);
        queryClient.invalidateQueries();
        closeModal();
        setCurrentToast("접속해주셔서 감사합니다.");
      },
    });
  };

  return (
    <BottomPopup>
      <div css={wrapper}>
        {currentModal?.modalContentObj?.button === "close" && (
          <button
            css={closeButton}
            type="button"
            onClick={() => {
              closeModal();
            }}
          >
            닫기
          </button>
        )}

        {currentModal?.modalContentObj?.button === "home" && (
          <Link href={MAIN_URL}>
            <a css={closeButton}>홈으로</a>
          </Link>
        )}

        <div css={logoContainer}>
          <Image objectFit="contain" src={smallMono} alt="고초대졸 로고" layout="fill" />
        </div>

        <p css={desc}>로그인이 필요한 서비스입니다.</p>

        <form css={formCSS} onSubmit={handleSubmit(loginSubmit)}>
          <ul css={formArr}>
            <li>
              <AccountInput
                registerObj={register("email", {
                  required: EMAIL_ERROR_MESSAGE.REQUIRED,
                  pattern: {
                    value: EMAIL_REGEXP,
                    message: EMAIL_ERROR_MESSAGE.REGEX,
                  },
                })}
                placeholder="이메일을 입력해주세요"
                label="이메일"
                errorObj={errors.email}
                isDirty={dirtyFields.email}
                inputType="email"
              />
            </li>
            <li>
              <AccountInput
                registerObj={register("password", {
                  required: PWD_ERROR_MESSAGE.REQUIRED,
                  minLength: { value: 8, message: PWD_ERROR_MESSAGE.MIN_MAX },
                  maxLength: { value: 20, message: PWD_ERROR_MESSAGE.MIN_MAX },
                  pattern: PWD_REGEXP,
                })}
                placeholder="비밀번호를 입력해주세요"
                label="비밀번호"
                errorObj={errors.password}
                isDirty={dirtyFields.password}
                inputType="password"
              />
            </li>
          </ul>
          <p css={errorMsgCSS}>{errorMsg}</p>
          <div css={loginButton}>
            <NormalButton wide variant="filled" text="로그인" isSubmit />

            <button
              type="button"
              css={kakaoLoginBox}
              onClick={() => {
                return undefined;
              }}
            >
              <div css={kakaoLogoBox}>
                <Image src={kakaoMono} alt="카카오 로그인" layout="fill" objectFit="contain" />
              </div>
              카카오톡으로 로그인하기
            </button>
          </div>
          <NormalButton
            wide
            variant="text"
            text="고초대졸 회원가입하기"
            buttonClick={() => {
              setCurrentModal("signUpModal");
            }}
          />

          <button type="button" css={findPwButton}>
            비밀번호 찾기
          </button>
        </form>
      </div>
    </BottomPopup>
  );
};
