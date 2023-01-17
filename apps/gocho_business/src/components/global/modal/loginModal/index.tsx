import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";
import { EMAIL_REGEXP, PWD_REGEXP } from "shared-constant/regExp";
import { EMAIL_ERROR_MESSAGE, PWD_ERROR_MESSAGE } from "shared-constant/errorMessage";
import { AccountInput } from "shared-ui/common/atom/accountInput";
import { NormalButton } from "shared-ui/common/atom/button";
import { managerTokenDecryptor } from "shared-util/tokenDecryptor";

import { useDoLogin } from "@/apis/auth/useDoLogin";
import { ModalComponent } from "@/components/global/modal/modalBackground";
import { useModal } from "@/globalStates/useModal";
import { useToast } from "@/globalStates/useToast";
import { useUserState } from "@/globalStates/useUserState";
import { tokenService } from "@/utils/tokenService";

import { LoginFormValues } from "./type";
import { cssObj } from "./style";

export const LoginBox: FunctionComponent = () => {
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const queryClient = useQueryClient();

  const { setUserInfoData } = useUserState();
  const { setToast } = useToast();
  const { closeModal } = useModal();
  const { mutate: postLogin } = useDoLogin();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm<LoginFormValues>({ mode: "onChange" });

  const loginSubmit: SubmitHandler<LoginFormValues> = (loginObj) => {
    postLogin(loginObj, {
      onError: (error) => {
        const errorResponse = error.response?.data;
        setErrorMsg(errorResponse?.error_message as string);
      },
      onSuccess: (response) => {
        closeModal();
        tokenService.updateAllToken(`${response.data.access_token}`, `${response.data.refresh_token}`);
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
        setToast("재접속되었습니다");
      },
    });
  };

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.logoContainer}>
        <Image objectFit="contain" src={smallMono} alt="고초대졸 로고" />
      </div>
      <p css={cssObj.desc}>재로그인이 필요합니다</p>
      <form css={cssObj.formCSS} onSubmit={handleSubmit(loginSubmit)}>
        <ul css={cssObj.formArr}>
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
        <div css={cssObj.errorBox}>{errorMsg && <p css={cssObj.errorMsgCSS}>{errorMsg}</p>}</div>

        <div css={cssObj.loginButton}>
          <NormalButton wide variant="filled" text="로그인 하기" isSubmit />
        </div>
      </form>
    </div>
  );
};

export const LoginModal: FunctionComponent = () => (
  <ModalComponent>
    <LoginBox />
  </ModalComponent>
);
