import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

import GDTitleSrc from "@public/images/global/deepLeLogo/smallMono.svg";
import { PWD_REGEXP } from "@constant/regExp";
import { usePatchUserInfo } from "@api/auth/usePatchUserInfo";
import { useUserInfo } from "@api/auth";

import {
  formContainer,
  imageContainer,
  menuName,
  inputCSS,
  errorMsgContiner,
  wrapper,
  passwordErrorMsg,
  submitButton,
} from "./style";
import { PasswordChangeFormValues } from "./type";

export const PasswordEditBox: FunctionComponent = () => {
  const [, setServerErrorMsg] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PasswordChangeFormValues>();
  const { data: userInfoData, refetch } = useUserInfo();
  const { mutate } = usePatchUserInfo();

  const passwordSubmit: SubmitHandler<PasswordChangeFormValues> = ({
    originPassword,
    password,
  }) => {
    if (userInfoData) {
      mutate(
        {
          userId: userInfoData.id,
          originPassword,
          password,
        },
        {
          onSuccess: (data) => {
            localStorage.setItem("token", `${data?.data.token}`);
            // LATER 토스 메시지 적용 예정
            refetch();
          },
          onError: (err) => {
            setServerErrorMsg(err.response?.data.error.errorMessage);
          },
        }
      );
    }
  };

  return (
    <div css={wrapper}>
      <div css={imageContainer}>
        <Image
          src={GDTitleSrc}
          layout="responsive"
          objectFit="contain"
          alt="고초대졸닷컴 로고"
        />
      </div>
      <form css={formContainer} onSubmit={handleSubmit(passwordSubmit)}>
        <p css={menuName}>비밀번호 변경</p>
        <input
          {...register("originPassword", {
            required: true,
            minLength: 8,
            maxLength: 20,
            pattern: PWD_REGEXP,
          })}
          css={inputCSS}
          type="password"
          placeholder="현재비밀번호"
        />
        <div css={errorMsgContiner}>
          {errors.originPassword?.type === "required" && (
            <p css={passwordErrorMsg}>현재 비밀번호를 입력해주세요</p>
          )}
          {errors.originPassword?.type === "minLength" && (
            <p css={passwordErrorMsg}>비밀번호는 8자 이상 입력해주세요</p>
          )}
          {errors.originPassword?.type === "maxLength" && (
            <p css={passwordErrorMsg}>최대 입력 글자는 20자입니다.</p>
          )}
        </div>
        <input
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 20,
            pattern: PWD_REGEXP,
          })}
          css={inputCSS}
          type="password"
          placeholder="새 비밀번호"
        />
        <div css={errorMsgContiner}>
          {errors.password?.type === "required" && (
            <p css={passwordErrorMsg}>새로운 비밀번호를 입력해주세요.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p css={passwordErrorMsg}>비밀번호는 8자 이상 입력해주세요</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p css={passwordErrorMsg}>최대 입력 글자는 20자입니다.</p>
          )}
        </div>
        <input
          {...register("chkNewPassword", {
            required: true,
            minLength: 8,
            maxLength: 20,
            pattern: PWD_REGEXP,
            validate: (value) => {
              return watch("password") === value;
            },
          })}
          css={inputCSS}
          type="password"
          placeholder="새 비밀번호 확인"
        />
        <div css={errorMsgContiner}>
          {errors.chkNewPassword?.type === "required" && (
            <p css={passwordErrorMsg}>새 비밀번호를 다시 입력해주세요</p>
          )}
          {(errors.chkNewPassword?.type === "minLength" ||
            errors.chkNewPassword?.type === "maxLength") && (
            <p css={passwordErrorMsg}>비밀번호는 8~20자 사이로 입력해주세요.</p>
          )}
          {errors.chkNewPassword?.type === "validate" && (
            <p css={passwordErrorMsg}>비밀번호가 일치하지 않습니다</p>
          )}
        </div>
        <button type="submit" css={submitButton}>
          확인
        </button>
      </form>
    </div>
  );
};
