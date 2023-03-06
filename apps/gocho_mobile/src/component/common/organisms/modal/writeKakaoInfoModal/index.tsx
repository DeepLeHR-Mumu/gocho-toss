import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";
import kakaoMono from "shared-image/global/sns/kakaoLogo.svg";
import { tokenDecryptor } from "shared-util";
import { loginSuccessEvent } from "shared-ga/auth";
import { NICKNAME_ERROR_MESSAGE } from "shared-constant";
import { AccountInput } from "shared-ui/common/atom/accountInput";
import { useDoKakaoRegister } from "shared-api/auth/useDoKakaoRegister";

import { BottomPopup } from "@component/bottomPopup";
import { useModal } from "@recoil/hook/modal";
import { useToast } from "@recoil/hook/toast";

import {
  desc,
  formArr,
  formCSS,
  kakaoLogoBox,
  inputCSS,
  logoContainer,
  submitButtonCSS,
  wrapper,
  closeBtn,
  labelCSS,
  positionRelative,
} from "./style";
import { validateNickname } from "./util";
import { SignUpFormValues } from "./type";

export const WriteKakaoInfoModal: FunctionComponent = () => {
  const { mutate: kakaoRegister } = useDoKakaoRegister();
  const { setCurrentToast } = useToast();
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm<SignUpFormValues>({ mode: "onChange" });
  const { closeModal } = useModal();

  const TEST_FUNC: SubmitHandler<SignUpFormValues> = (submitObj) => {
    kakaoRegister(submitObj, {
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          setCurrentToast("이미 사용중인 닉네임 입니다.");
        }
      },
      onSuccess: (response) => {
        queryClient.invalidateQueries();
        const { id, nickname: accountNickname } = tokenDecryptor(response.data.token as string);
        const kakaopath = sessionStorage.getItem("kakaopath");
        loginSuccessEvent(id, "kakao", kakaopath);
        localStorage.setItem("token", `${response.data.token}`);
        router.push(kakaopath as string);
        setCurrentToast("님 환영합니다.", accountNickname);
        router.back();
      },
    });
  };

  const redirectToHome = () => {
    localStorage.clear();
    queryClient.invalidateQueries();
    closeModal();
    router.back();
  };

  return (
    <BottomPopup>
      <div css={wrapper}>
        <button type="button" css={closeBtn} onClick={redirectToHome}>
          홈
        </button>
        <div css={logoContainer}>
          <Image src={smallMono} fill alt="" />
        </div>

        <p css={desc}>카카오톡 계정으로 간편하게 사용해보세요</p>

        <form onSubmit={handleSubmit(TEST_FUNC)} css={formCSS}>
          <ul css={formArr}>
            <li css={positionRelative}>
              <p css={labelCSS}>이메일</p>
              <input css={inputCSS} value={sessionStorage.getItem("kakaoId") as string} disabled readOnly />
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

          <button type="submit" css={submitButtonCSS}>
            <div css={kakaoLogoBox}>
              <Image src={kakaoMono} alt="" fill />
            </div>
            카카오로 가입완료하기
          </button>
        </form>
      </div>
    </BottomPopup>
  );
};
