import { FunctionComponent, useEffect } from "react";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";

import { profileMenuArr } from "@constant/menuArr";

import { myProfileMenuWrapper, myProfileTitle, myProfileMenuCSS, logoutCSS } from "./style";

import { MyProfileMenuProps } from "./type";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export const MyProfileMenu: FunctionComponent<MyProfileMenuProps> = ({ active }) => {
  const queryClient = useQueryClient();
  // window.Kakao.init("0687bed33c060c4758f582d26ff44e16");

  useEffect(() => {
    window.Kakao.init("0687bed33c060c4758f582d26ff44e16");
  }, []);
  const doLogout = () => {
    localStorage.removeItem("token");
    queryClient.invalidateQueries();
  };

  return (
    <article css={myProfileMenuWrapper(active)}>
      <p css={myProfileTitle}>나의 프로필</p>
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
