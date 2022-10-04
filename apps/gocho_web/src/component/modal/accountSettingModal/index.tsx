import { FunctionComponent, useState } from "react";

import { useUserInfo } from "shared-api/auth";

import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { ModalComponent } from "../modalBackground";
import { wrapper, marginContainer, userNameCSS, accountCSS, buttonCSS, emailCSS, modalContainer } from "./style";
import { PictureEditBox } from "./component/pictureEditBox";
import { PasswordEditBox } from "./component/passwordEditBox";

export const AccountSettingBox: FunctionComponent = () => {
  const [isPictureEditing, setIsPictureEditing] = useState(true);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);

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

        {isPictureEditing && (
          <button
            type="button"
            css={buttonCSS}
            onClick={() => {
              setIsPictureEditing(false);
              setIsPasswordEditing(true);
            }}
          >
            비밀번호 변경
          </button>
        )}
        {isPasswordEditing && (
          <button
            type="button"
            css={buttonCSS}
            onClick={() => {
              setIsPictureEditing(true);
              setIsPasswordEditing(false);
            }}
          >
            프로필 이미지 변경
          </button>
        )}

        {/* LATER : api 완료시 추가 예정 */}
        {/* <button type="button" css={deleteAccountCSS}>
          계정삭제
        </button> */}
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
