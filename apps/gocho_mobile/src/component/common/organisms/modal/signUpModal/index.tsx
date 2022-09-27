import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

import { useDoSignUp, useUserInfo } from "shared-api/auth";
import { EMAIL_REGEXP, PWD_REGEXP } from "shared-constant/regExp";
import { EMAIL_ERROR_MESSAGE, NICKNAME_ERROR_MESSAGE, PWD_ERROR_MESSAGE } from "shared-constant/errorMessage";
import { AccountInput } from "shared-ui/common/atom/accountInput";
import { NormalButton } from "shared-ui/common/atom/button";
import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";

import { useModal } from "@recoil/hook/modal";
import { BottomPopup } from "@component/bottomPopup";

import { closeButton } from "@component/common/organisms/modal/loginModal/style";
import { wrapper, desc, formCSS, formArr, logoContainer } from "./style";
import { SignUpFormValues } from "./type";
import { validateNickname } from "./util";

export const SignUpModal: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<SignUpFormValues>({ mode: "onChange" });

  const { refetch } = useUserInfo();
  const { closeModal } = useModal();
  const { mutate } = useDoSignUp();

  const signUpSubmit: SubmitHandler<SignUpFormValues> = (signUpObj) => {
    mutate(signUpObj, {
      onSuccess: (response) => {
        localStorage.setItem("token", `${response?.data.token}`);
        refetch();
        closeModal();
      },
    });
  };

  return (
    <BottomPopup>
      <div css={wrapper}>
        <button
          css={closeButton}
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          닫기
        </button>
        <div css={logoContainer}>
          <Image objectFit="contain" src={smallMono} alt="고초대졸 로고" />
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
                    // TODO: 메시지 전달받기
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
            <li>
              <AccountInput
                registerObj={register("nickname", {
                  required: NICKNAME_ERROR_MESSAGE.REQUIRED,
                  validate: validateNickname,
                })}
                placeholder="닉네임을 입력해주세요"
                label="닉네임"
                errorObj={errors.nickname}
                isDirty={dirtyFields.nickname}
                inputType="text"
              />
            </li>
          </ul>
          <NormalButton isSubmit wide text="확인" variant="filled" />
        </form>
      </div>
    </BottomPopup>
  );
};
