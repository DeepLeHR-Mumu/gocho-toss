import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useUserProfile } from "shared-api/auth";
import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { MYPAGE_URL } from "shared-constant";
import Link from "next/link";
import { profileWrapper, menuCategory, flexBox, nickname } from "./style";
import { AuthorizedMenuProps } from "./type";

export const AuthorizedMenu: FunctionComponent<AuthorizedMenuProps> = ({ setOpenedElement }) => {
  const queryClient = useQueryClient();

  const doLogout = () => {
    setOpenedElement(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    queryClient.resetQueries();
  };

  const { data: userInfoData } = useUserProfile();

  return (
    <ul>
      <li css={profileWrapper}>
        <Link href={MYPAGE_URL} passHref>
          <button
            type="button"
            css={menuCategory}
            onClick={() => {
              return setOpenedElement(null);
            }}
          >
            마이페이지
          </button>
        </Link>
        {userInfoData && (
          <div css={flexBox}>
            <ProfileImg imageStr={userInfoData.image} size="S" />
            <p css={nickname}>{userInfoData.nickname}</p>
          </div>
        )}
      </li>
      <li>
        <button css={menuCategory} type="button" onClick={doLogout}>
          로그아웃
        </button>
      </li>
    </ul>
  );
};
