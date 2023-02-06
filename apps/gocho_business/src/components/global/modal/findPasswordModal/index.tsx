import { FunctionComponent } from "react";
import axios from "axios";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";
import { EMAIL_REGEXP } from "shared-constant/regExp";
import { EMAIL_ERROR_MESSAGE } from "shared-constant/errorMessage";
import { AccountInput2 } from "shared-ui/common/atom/accountInput2";
import { NormalButton } from "shared-ui/common/atom/button";

import { useFindPassword } from "@/apis/auth/usefindPassword";
import { CommonCloseButton } from "@/components/common/commonCloseButton";
import { useModal } from "@/globalStates/useModal";
import { useToast } from "@/globalStates/useToast";

import { ModalComponent } from "../modalBackground";

import { LoginFormValues } from "./type";
import { cssObj } from "./style";

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

  console.log(errors.email);

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.closeBtn}>
        <CommonCloseButton size="S" buttonClick={closeFindPasswordModal} />
      </div>
      <div css={cssObj.logoContainer}>
        <Image objectFit="contain" src={smallMono} alt="고초대졸닷컴" />
      </div>
      <p css={cssObj.desc}>가입한 이메일에서 비밀번호를 확인하세요</p>
      <form css={cssObj.formCSS} onSubmit={handleSubmit(loginSubmit)}>
        <ul css={cssObj.formArr}>
          <li>
            <AccountInput2
              registerObj={register("email", {
                required: EMAIL_ERROR_MESSAGE.REQUIRED,
                pattern: {
                  value: EMAIL_REGEXP,
                  message: EMAIL_ERROR_MESSAGE.REGEX,
                },
                maxLength: {
                  value: 30,
                  message: EMAIL_ERROR_MESSAGE.LOGIN_MIN_MAX,
                },
              })}
              setValue={() => {
                setValue("email", "");
              }}
              setError={() => {
                setError("email", {});
              }}
              placeholder="이메일을 입력해주세요"
              label="이메일"
              errorObj={errors.email}
              isDirty={dirtyFields.email}
              inputType="email"
            />
          </li>
        </ul>
        <div css={cssObj.loginButton}>
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
