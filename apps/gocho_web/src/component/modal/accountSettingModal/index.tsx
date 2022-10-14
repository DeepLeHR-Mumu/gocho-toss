import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useUserInfo, useDeleteUserInfo } from "shared-api/auth";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { userInfoKeyObj } from "shared-constant/queryKeyFactory/user/infoKeyObj";
import { useToast } from "@recoil/hook/toast";
import { ModalComponent } from "../modalBackground";
import { wrapper, marginContainer, userNameCSS, buttonCSS, emailCSS, modalContainer, deleteAccountCSS } from "./style";
import { PictureEditBox } from "./component/pictureEditBox";
import { PasswordEditBox } from "./component/passwordEditBox";

export const AccountSettingBox: FunctionComponent = () => {
  const [isPictureEditing, setIsPictureEditing] = useState(true);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const queryClient = useQueryClient();

  const { data: userInfoData } = useUserInfo();
  const { setCurrentToast } = useToast();
  const { mutate } = useDeleteUserInfo();

  const deleteUserInfo = (id: number) => {
    mutate(
      { id },
      {
        onSuccess: () => {
          setCurrentToast("회원탈퇴가 되었습니다.");
          queryClient.invalidateQueries(userInfoKeyObj.userInfo);
        },
      }
    );
  };

  return (
    <div css={modalContainer}>
      <div css={wrapper}>
        <div css={marginContainer}>
          {userInfoData?.image && <ProfileImg imageStr={userInfoData?.image} size="L" />}
          <p css={userNameCSS}>{userInfoData?.nickname}</p>
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

        <button
          type="button"
          css={deleteAccountCSS}
          onClick={() => {
            if (userInfoData) {
              deleteUserInfo(userInfoData.id);
            }
          }}
        >
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
