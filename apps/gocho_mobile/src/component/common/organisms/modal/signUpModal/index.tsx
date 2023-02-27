import { FunctionComponent, useState, useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";

import { TOS_URL, PRIVACY_URL } from "shared-constant/internalURL";
import { useDoSignUp, useUserInfo } from "shared-api/auth";
import { EMAIL_REGEXP, PWD_REGEXP } from "shared-constant/regExp";
import { EMAIL_ERROR_MESSAGE, NICKNAME_ERROR_MESSAGE, PWD_ERROR_MESSAGE } from "shared-constant/errorMessage";
import { AccountInput } from "shared-ui/common/atom/accountInput";
import { NormalButton } from "shared-ui/common/atom/button";
import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";
import { ErrorResponse } from "shared-api/auth/usePatchUserInfo/type";
import { signupModalOpenEvent, signupModalCloseEvent, signupSuccessEvent } from "shared-ga/auth";

import { useModal } from "@recoil/hook/modal";
import { BottomPopup } from "@component/bottomPopup";
import { closeButton } from "@component/common/organisms/modal/loginModal/style";
import { useToast } from "@recoil/hook/toast";

import { wrapper, desc, formCSS, formArr, logoContainer, bottomDesc, colorPoint, sideErrorMsg } from "./style";
import { SignUpFormValues } from "./type";
import { validateNickname } from "./util";

export const SignUpModal: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm<SignUpFormValues>({ mode: "onChange" });
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const queryClient = useQueryClient();
  const { setCurrentToast } = useToast();
  const { refetch } = useUserInfo();
  const router = useRouter();
  const signupAttempt = useRef(0);

  const { closeModal } = useModal();
  const { mutate } = useDoSignUp();

  const signUpSubmit: SubmitHandler<SignUpFormValues> = (signUpObj) => {
    mutate(signUpObj, {
      onError: (error) => {
        const errorResponse = error.response?.data as ErrorResponse;
        signupAttempt.current += 1;
        setErrorMsg(errorResponse.error.errorMessage);
      },
      onSuccess: (response) => {
        localStorage.setItem("accessToken", `${response?.data.access_token}`);
        signupSuccessEvent();
        queryClient.invalidateQueries();
        closeModal();
        refetch();
        setCurrentToast("님 환영합니다.", watch("nickname"));
      },
    });
  };

  useEffect(() => {
    setErrorMsg(null);
  }, [closeModal]);

  useEffect(() => {
    signupModalOpenEvent();
  }, []);

  return (
    <BottomPopup>
      <div css={wrapper}>
        <button
          css={closeButton}
          type="button"
          onClick={() => {
            signupModalCloseEvent(signupAttempt.current);
            closeModal();
          }}
        >
          닫기
        </button>

        <div css={logoContainer}>
          <Image objectFit="contain" src={smallMono} alt="고초대졸 닷컴" layout="fill" />
        </div>
        <p css={desc}>가입은 5초면 가능!</p>

        <form css={formCSS} onSubmit={handleSubmit(signUpSubmit)}>
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
                setValue={() => {
                  setValue("email", "");
                }}
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
                  pattern: {
                    value: PWD_REGEXP,
                    message: PWD_ERROR_MESSAGE.NOT_SPACE,
                  },
                })}
                setValue={() => {
                  setValue("password", "");
                }}
                placeholder="비밀번호를 입력해주세요"
                label="비밀번호"
                errorObj={errors.password}
                isDirty={dirtyFields.password}
                inputType="password"
              />
            </li>
            <li>
              <AccountInput
                registerObj={register("nickname", {
                  required: NICKNAME_ERROR_MESSAGE.REQUIRED,
                  validate: validateNickname,
                })}
                setValue={() => {
                  setValue("nickname", "");
                }}
                placeholder="닉네임을 입력해주세요"
                label="닉네임"
                errorObj={errors.nickname}
                isDirty={dirtyFields.nickname}
                inputType="text"
              />
            </li>
          </ul>
          <p css={sideErrorMsg}>{errorMsg && errorMsg}</p>

          <NormalButton isSubmit wide text="확인" variant="filled" />
        </form>

        <p css={bottomDesc}>
          회원 가입 시<br />
          <button
            css={colorPoint}
            type="button"
            onClick={() => {
              router.push(TOS_URL);
              closeModal();
            }}
          >
            이용약관
          </button>{" "}
          및{" "}
          <button
            css={colorPoint}
            type="button"
            onClick={() => {
              router.push(PRIVACY_URL);
              closeModal();
            }}
          >
            개인정보처리방침
          </button>
          에 동의하게 됩니다.
        </p>
      </div>
    </BottomPopup>
  );
};
