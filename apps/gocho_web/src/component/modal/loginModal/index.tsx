import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";
import kakaoMono from "shared-image/global/sns/kakaoLogo.svg";
import { useDoLogin } from "shared-api/auth";
import { EMAIL_REGEXP, PWD_REGEXP } from "shared-constant/regExp";
import { EMAIL_ERROR_MESSAGE, PWD_ERROR_MESSAGE } from "shared-constant/errorMessage";
import { AccountInput } from "shared-ui/common/atom/accountInput";
import { NormalButton } from "shared-ui/common/atom/button";

import { ModalComponent } from "@component/modal/modalBackground";
import { CloseButton } from "@component/common/atom/closeButton";
import { loginObjDef } from "@recoil/atom/modal";
import { useModal } from "@recoil/hook/modal";

import {
  wrapper,
  desc,
  formCSS,
  formArr,
  errorMsgCSS,
  closeBtn,
  errorBox,
  loginButton,
  logoContainer,
  kakaoLogoBox,
  kakaoLoginBox,
} from "./style";
import { ButtonProps, LoginFormValues } from "./type";

export const LoginBox: FunctionComponent<ButtonProps> = ({ button }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<LoginFormValues>({ mode: "onChange" });
  const queryClient = useQueryClient();

  const { mutate } = useDoLogin();
  const { closeModal, setCurrentModal } = useModal();

  const [errorMsg] = useState<null | string>(null);

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    mutate(loginObj, {
      onSuccess: (response) => {
        localStorage.setItem("token", `${response.data.token}`);
        queryClient.invalidateQueries();
        closeModal();
      },
    });
  };

  return (
    <div css={wrapper}>
      <div css={closeBtn}>
        {button === "home" ? <CloseButton size="S" isHome /> : <CloseButton size="S" buttonClick={closeModal} />}
      </div>
      <div css={logoContainer}>
        <Image objectFit="contain" src={smallMono} alt="고초대졸 로고" />
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
                pattern: {
                  value: PWD_REGEXP,
                  message: "비밀번호 달라요",
                },
              })}
              placeholder="비밀번호를 입력해주세요"
              label="비밀번호"
              errorObj={errors.password}
              isDirty={dirtyFields.password}
              inputType="password"
            />
          </li>
        </ul>
        <div css={errorBox}>{errorMsg && <p css={errorMsgCSS}>{errorMsg}</p>}</div>
        <div css={loginButton}>
          <NormalButton wide variant="filled" text="로그인 하기" isSubmit />
          <button type="button" css={kakaoLoginBox}>
            <div css={kakaoLogoBox}>
              <Image src={kakaoMono} alt="카카오 로그인" layout="fill" objectFit="contain" />
            </div>
            카카오톡으로 로그인하기
          </button>
        </div>
        <NormalButton
          wide
          variant="text"
          text="회원가입하기"
          buttonClick={() => {
            setCurrentModal("signUpModal");
          }}
        />
      </form>
    </div>
  );
};

export const LoginModal: FunctionComponent = () => {
  const { currentModal } = useModal();

  const loginObj = currentModal?.modalContentObj as loginObjDef;
  return (
    <ModalComponent>
      <LoginBox button={loginObj.button} />
    </ModalComponent>
  );
};
