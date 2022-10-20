import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { useUserInfo, useDeleteUserInfo } from "shared-api/auth";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { userInfoKeyObj } from "shared-constant/queryKeyFactory/user/infoKeyObj";
import { MAIN_URL } from "shared-constant/internalURL";

import { useToast } from "@recoil/hook/toast";
import { useModal } from "@recoil/hook/modal";

import { ModalComponent } from "../modalBackground";
import { PictureEditBox } from "./component/pictureEditBox";
import { PasswordEditBox } from "./component/passwordEditBox";
import { wrapper, marginContainer, userNameCSS, buttonCSS, emailCSS, modalContainer, deleteAccountCSS } from "./style";

export const AccountSettingBox: FunctionComponent = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [isPictureEditing, setIsPictureEditing] = useState(true);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);

  const { data: userInfoData } = useUserInfo();
  const { mutate: deleteUserDataInfo } = useDeleteUserInfo();
  const { setCurrentToast } = useToast();
  const { setCurrentModal } = useModal();

  const deleteUserInfo = (id: number) => {
    setCurrentModal("dialogModal", {
      agreeDesc: "삭제",
      title: "계정을 삭제 하시겠습니까?",
      desc: "모든 정보가 삭제되며 복구가 불가합니다. 주의사항에 동의하고 삭제하시겠습니까?",
      doActive: () => {
        deleteUserDataInfo(
          { id },
          {
            onSuccess: () => {
              localStorage.removeItem("token");
              queryClient.resetQueries();
              queryClient.invalidateQueries(userInfoKeyObj.userInfo);
              setCurrentToast("회원탈퇴가 되었습니다.");
              router.push(MAIN_URL);
            },
          }
        );
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
