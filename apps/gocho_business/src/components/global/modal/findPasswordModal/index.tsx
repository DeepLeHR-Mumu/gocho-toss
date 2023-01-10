import { FunctionComponent } from "react";
import axios from "axios";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";
import { EMAIL_REGEXP } from "shared-constant/regExp";
import { EMAIL_ERROR_MESSAGE } from "shared-constant/errorMessage";
import { AccountInput } from "shared-ui/common/atom/accountInput";
import { NormalButton } from "shared-ui/common/atom/button";

import { useFindPassword } from "@/apis/auth/usefindPassword";
import { CommonCloseButton } from "@/components/common/commonCloseButton";
import { useModal } from "@/globalStates/useModal";
import { useToast } from "@/globalStates/useToast";

import { ModalComponent } from "../modalBackground";

import { wrapper, desc, formCSS, formArr, closeBtn, loginButton, logoContainer } from "./style";
import { LoginFormValues } from "./type";

export const FindPasswordBox: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm<LoginFormValues>({ mode: "onBlur" });

  const { setToast } = useToast();
  const { mutate: postFindPassword } = useFindPassword();
  const { closeModal } = useModal();

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    postFindPassword(loginObj, {
      onError: (error) => {
        if (axios.isAxiosError(error) && error.response?.status === 404)
          return setError("email", { type: "custom", message: "가입되지 않은 이메일 입니다." });

        return null;
      },

      onSuccess: () => {
        setToast("메일이 전송됐습니다. 이메일을 확인해주세요.");
      },
    });
  };

  const closeFindPasswordModal = () => {
    closeModal();
  };

  return (
    <div css={wrapper}>
      <div css={closeBtn}>
        <CommonCloseButton size="S" buttonClick={closeFindPasswordModal} />
      </div>
      <div css={logoContainer}>
        <Image objectFit="contain" src={smallMono} alt="고초대졸닷컴" />
      </div>
      <p css={desc}>가입한 이메일에서 비밀번호를 확인하세요</p>
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
        </ul>
        <div css={loginButton}>
          <NormalButton wide variant="filled" text="비밀번호 찾기" isSubmit />
        </div>
      </form>
    </div>
  );
};

export const FindPasswordModal: FunctionComponent = () => (
  <ModalComponent>
    <FindPasswordBox />
  </ModalComponent>
);
