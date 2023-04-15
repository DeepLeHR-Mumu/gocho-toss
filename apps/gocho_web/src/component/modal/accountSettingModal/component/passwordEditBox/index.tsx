import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

import { CloseButton } from "@component/common/atom/closeButton";
import GDTitleSrc from "shared-image/global/deepLeLogo/smallMono.svg";
import { PWD_REGEXP } from "shared-constant";
import { useUserProfile, usePatchUserPassword } from "shared-api/auth";

import { NormalButton } from "shared-ui/common/atom/button";
import { useToast, useModal } from "@/globalStates";

import {
  formContainer,
  imageContainer,
  menuName,
  inputCSS,
  errorMsgContainer,
  wrapper,
  passwordErrorMsg,
  closeButtonBox,
} from "./style";
import { PasswordChangeFormValues } from "./type";

export const PasswordEditBox: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PasswordChangeFormValues>();
  const { data: userInfoData, refetch } = useUserProfile();
  const { mutate } = usePatchUserPassword();
  const { setToastMessage } = useToast();
  const { closeModal } = useModal();
  const [failCurrentPw, setFailCurrentPw] = useState(false);

  const passwordSubmit: SubmitHandler<PasswordChangeFormValues> = ({ originPassword, password }) => {
    if (userInfoData) {
      mutate(
        {
          userId: userInfoData.id,
          origin_password: originPassword,
          new_password: password,
        },
        {
          onError: () => {
            setFailCurrentPw(true);
          },
          onSuccess: (data) => {
            setFailCurrentPw(false);
            setToastMessage("비밀번호가 변경되었습니다.");
            closeModal();
            localStorage.setItem("accessToken", `${data?.data.access_token}`);
            refetch();
          },
        }
      );
    }
  };

  return (
    <div css={wrapper}>
      <div css={closeButtonBox}>
        <CloseButton size="M" buttonClick={closeModal} />
      </div>
      <div css={imageContainer}>
        <Image src={GDTitleSrc} fill alt="" />
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
          placeholder="현재 비밀번호"
        />
        <div css={errorMsgContainer}>
          {failCurrentPw && <p css={passwordErrorMsg}>현재 비밀번호가 일치하지 않습니다.</p>}
          {errors.originPassword?.type === "required" && <p css={passwordErrorMsg}>현재 비밀번호를 입력해주세요</p>}
          {errors.originPassword?.type === "minLength" && (
            <p css={passwordErrorMsg}>비밀번호는 8자 이상 입력해주세요</p>
          )}
          {errors.originPassword?.type === "maxLength" && <p css={passwordErrorMsg}>최대 입력 글자는 20자입니다.</p>}
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
        <div css={errorMsgContainer}>
          {errors.password?.type === "required" && <p css={passwordErrorMsg}>새로운 비밀번호를 입력해주세요.</p>}
          {errors.password?.type === "minLength" && <p css={passwordErrorMsg}>비밀번호는 8자 이상 입력해주세요</p>}
          {errors.password?.type === "maxLength" && <p css={passwordErrorMsg}>최대 입력 글자는 20자입니다.</p>}
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
        <div css={errorMsgContainer}>
          {errors.chkNewPassword?.type === "required" && <p css={passwordErrorMsg}>새 비밀번호를 다시 입력해주세요</p>}
          {(errors.chkNewPassword?.type === "minLength" || errors.chkNewPassword?.type === "maxLength") && (
            <p css={passwordErrorMsg}>비밀번호는 8~20자 사이로 입력해주세요.</p>
          )}
          {errors.chkNewPassword?.type === "validate" && <p css={passwordErrorMsg}>비밀번호가 일치하지 않습니다</p>}
        </div>

        <NormalButton text="변경하기" isSubmit wide variant="outlined" />
      </form>
    </div>
  );
};
