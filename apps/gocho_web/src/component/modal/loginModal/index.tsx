import { FunctionComponent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";
import kakaoMono from "shared-image/global/sns/kakaoLogo.svg";
import { loginModalCloseEvent, loginModalOpenEvent, loginSuccessEvent } from "shared-ga/auth";
import { useDoLogin } from "shared-api/auth";
import { EMAIL_REGEXP, PWD_REGEXP, EMAIL_ERROR_MESSAGE, PWD_ERROR_MESSAGE } from "shared-constant";
import { AccountInput } from "shared-ui/common/atom/accountInput";
import { NormalButton } from "shared-ui/common/atom/button";
import { ModalComponent } from "@component/modal/modalBackground";
import { CloseButton } from "@component/common/atom/closeButton";
import { loginObjDef } from "@recoil/atom/modal";
import { useModal } from "@recoil/hook/modal";
import { useToast } from "@recoil/hook/toast";

import { tokenDecryptor } from "shared-util";
import { ErrorResponse } from "shared-api/auth/usePatchUserInfo/type";
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
  findPasswordButton,
} from "./style";
import { ButtonProps, LoginFormValues } from "./type";

export const LoginBox: FunctionComponent<ButtonProps> = ({ button }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm<LoginFormValues>({ mode: "onChange" });
  const queryClient = useQueryClient();

  const { setCurrentToast } = useToast();
  const { mutate } = useDoLogin();
  const { closeModal, setCurrentModal } = useModal();
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const ref = useRef(0);
  const router = useRouter();

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    mutate(loginObj, {
      onError: (error) => {
        const errorResponse = error.response?.data as ErrorResponse;
        setErrorMsg(errorResponse.error_message);
        ref.current += 1;
      },
      onSuccess: (response) => {
        localStorage.setItem("accessToken", `${response.data.access_token}`);
        localStorage.setItem("refreshToken", `${response.data.refresh_token}`);
        queryClient.invalidateQueries();
        const { id, nickname } = tokenDecryptor(response.data.access_token);
        loginSuccessEvent(id, "gocho");
        closeModal();
        setCurrentToast("님 반갑습니다.", nickname);
      },
    });
  };

  const closeLoginModal = () => {
    loginModalCloseEvent(ref.current);
    closeModal();
  };

  const kakaoLogin = () => {
    sessionStorage.setItem("kakaopath", router.asPath);
    window.Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}/kakaologin`,
    });
  };

  useEffect(() => {
    loginModalOpenEvent();
  }, []);

  return (
    <div css={wrapper}>
      <div css={closeBtn}>
        {button === "home" ? <CloseButton size="S" isHome /> : <CloseButton size="S" buttonClick={closeLoginModal} />}
      </div>
      <div css={logoContainer}>
        <Image src={smallMono} alt="고초대졸 로고" fill />
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
                minLength: { value: 8, message: PWD_ERROR_MESSAGE.LOGIN_MIN_MAX },
                maxLength: { value: 20, message: PWD_ERROR_MESSAGE.LOGIN_MIN_MAX },
                pattern: PWD_REGEXP,
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
        </ul>
        <div css={errorBox}>{errorMsg && <p css={errorMsgCSS}>아이디 또는 비밀번호가 틀렸습니다.</p>}</div>
        <div css={loginButton}>
          <NormalButton wide variant="filled" text="로그인 하기" isSubmit />

          <button type="button" css={kakaoLoginBox} onClick={kakaoLogin}>
            <div css={kakaoLogoBox}>
              <Image src={kakaoMono} alt="카카오 로그인" fill />
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
        <button
          type="button"
          css={findPasswordButton}
          onClick={() => {
            setCurrentModal("findPasswordModal");
          }}
        >
          비밀번호 찾기
        </button>
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
