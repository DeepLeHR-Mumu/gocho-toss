import { FunctionComponent } from "react";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";

import { profileMenuArr } from "@constant/menuArr";

import {
  myProfileMenuWrapper,
  myProfileTitle,
  myProfileMenuCSS,
  logoutCSS,
} from "./style";

import { MyProfileMenuProps } from "./type";

export const MyProfileMenu: FunctionComponent<MyProfileMenuProps> = ({
  active,
}) => {
  const queryClient = useQueryClient();

  const doLogout = () => {
    localStorage.removeItem("token");
    queryClient.invalidateQueries();
  };

  return (
    <article css={myProfileMenuWrapper(active)}>
      <h3 css={myProfileTitle}>나의 프로필</h3>
      <ul css={myProfileMenuCSS}>
        {profileMenuArr.map((profileMenu) => {
          return (
            <li key={profileMenu.title}>
              <Link href={profileMenu.link} passHref>
                <a>{profileMenu.title}</a>
              </Link>
            </li>
          );
        })}
        <li>
          <button type="button" css={logoutCSS} onClick={doLogout}>
            로그아웃
          </button>
        </li>
      </ul>
    </article>
  );
};
