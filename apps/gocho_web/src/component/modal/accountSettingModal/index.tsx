import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { useUserProfile, useDeleteUserInfo } from "shared-api/auth";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { userInfoKeyObj } from "shared-constant/queryKeyFactory/user/infoKeyObj";
import { MAIN_URL } from "shared-constant";

import { useToast, useModal } from "@/globalStates";
import { ModalComponent } from "../modalBackground";
import { PictureEditBox } from "./component/pictureEditBox";
import { PasswordEditBox } from "./component/passwordEditBox";
import { wrapper, marginContainer, userNameCSS, buttonCSS, emailCSS, modalContainer, deleteAccountCSS } from "./style";

export const AccountSettingBox: FunctionComponent = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [isPictureEditing, setIsPictureEditing] = useState(true);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);

  const { setModal } = useModal();
  const { setToastMessage } = useToast();

  const { data: userInfoData } = useUserProfile();
  const { mutate: deleteUserDataInfo } = useDeleteUserInfo(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    queryClient.resetQueries();
    queryClient.invalidateQueries(userInfoKeyObj.userInfo);
    setToastMessage("회원탈퇴가 되었습니다.");
    router.push(MAIN_URL);
  });

  const deleteUserInfo = (id: number) => {
    setModal("dialogModal", {
      agreeDesc: "삭제",
      title: "계정을 삭제 하시겠습니까?",
      desc: "모든 정보가 삭제되며 복구가 불가합니다. 정말로 삭제하시겠습니까?",
      doActive: () => {
        deleteUserDataInfo({ id });
      },
    });
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
              deleteUserInfo(userInfoData?.id);
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
