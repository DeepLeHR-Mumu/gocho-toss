import { FunctionComponent } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

import smallMono from "shared-image/global/deepLeLogo/smallMono.svg";
import kakaoMono from "shared-image/global/sns/kakaoLogo.svg";

import { CloseButton } from "@component/common/atom/closeButton";
import { NICKNAME_ERROR_MESSAGE } from "shared-constant/errorMessage";
import { useModal } from "@recoil/hook/modal";
import { AccountInput } from "shared-ui/common/atom/accountInput";
import { ModalComponent } from "@component/modal/modalBackground";

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

export const KakaoBox: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<SignUpFormValues>({ mode: "onChange" });
  const { closeModal } = useModal();

  const TEST_FUNC: SubmitHandler<SignUpFormValues> = () => {
    return undefined;
  };

  return (
    <div css={wrapper}>
      <div css={closeBtn}>
        <CloseButton size="M" buttonClick={closeModal} />
      </div>
      <div css={logoContainer}>
        <Image src={smallMono} layout="fill" objectFit="contain" alt="고초대졸 닷컴" />
      </div>

      <p css={desc}>카카오톡 계정으로 간편하게 사용해보세요</p>

      <form onSubmit={handleSubmit(TEST_FUNC)} css={formCSS}>
        <ul css={formArr}>
          <li css={positionRelative}>
            <p css={labelCSS}>이메일</p>
            <input css={inputCSS} value="test@naver.com" disabled readOnly />
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

        <button type="submit" css={submitButtonCSS}>
          <div css={kakaoLogoBox}>
            <Image src={kakaoMono} alt="" layout="fill" objectFit="contain" />
          </div>
          카카오로 가입완료하기
        </button>
      </form>
    </div>
  );
};

export const WriteKakaoInfoModal: FunctionComponent = () => {
  return (
    <ModalComponent>
      <KakaoBox />
    </ModalComponent>
  );
};
