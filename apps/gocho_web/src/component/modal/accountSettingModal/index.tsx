import { FunctionComponent, useState } from "react";

import { useUserInfo } from "shared-api/auth";

import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { ModalComponent } from "../modalBackground";
import {
  wrapper,
  marginContainer,
  userNameCSS,
  accountCSS,
  buttonCSS,
  emailCSS,
  deleteAccountCSS,
  modalContainer,
} from "./style";
import { PictureEditBox } from "./component/pictureEditBox";
import { PasswordEditBox } from "./component/passwordEditBox";

export const AccountSettingBox: FunctionComponent = () => {
  const [isPictureEditing] = useState(true);
  const [isPasswordEditing] = useState(false);

  const { data: userInfoData } = useUserInfo();

  return (
    <div css={modalContainer}>
      <div css={wrapper}>
        <div css={marginContainer}>
          {userInfoData?.image && <ProfileImg imageStr={userInfoData?.image} size="L" />}
          <p css={userNameCSS}>{userInfoData?.nickname}</p>
          <p css={accountCSS}>{userInfoData?.id}</p>
          <p css={emailCSS}>{userInfoData?.email}</p>
        </div>
        <button type="button" css={buttonCSS}>
          비밀번호 변경
        </button>
        <button type="button" css={deleteAccountCSS}>
          계정삭제
        </button>
      </div>
      {isPictureEditing && <PictureEditBox />}
      {isPasswordEditing && <PasswordEditBox />}
    </div>
  );
};

export const AccountSettingModal: FunctionComponent = () => {
  return (
    <ModalComponent>
      <AccountSettingBox />
    </ModalComponent>
  );
};
