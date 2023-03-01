import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useUserInfo } from "shared-api/auth";
import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { SPEC_MY_URL, SPEC_LIST_URL, SPEC_REGISTER_URL } from "shared-constant/internalURL";

import { AsideMenuProps } from "./type";
import { wrapper, partContainer, asideProfile, loginNickname, pointLink, asideLink, activeLink } from "./style";

export const AsideMenu: FunctionComponent<AsideMenuProps> = ({ isFix = true }) => {
  const { data: userInfoData, error } = useUserInfo();

  const { pathname } = useRouter();

  if (!userInfoData || error) {
    return <section css={partContainer} />;
  }

  const isSpecMyUrl = pathname === SPEC_MY_URL;
  return (
    <aside css={wrapper(isFix)}>
      <div css={asideProfile}>
        <ProfileImg imageStr={userInfoData.image} size="M" />
        <p css={loginNickname}>{userInfoData.nickname}</p>
      </div>
      <Link
        href={{
          pathname: SPEC_REGISTER_URL,
          hash: "1",
        }}
        passHref
        css={[asideLink, pointLink]}
      >
        스펙
        <br />
        등록하기
      </Link>
      <Link href={SPEC_MY_URL} passHref css={[asideLink, isSpecMyUrl && activeLink]}>
        등록한
        <br />
        스펙 내역
      </Link>
      {isSpecMyUrl && (
        <Link href={SPEC_LIST_URL} passHref css={asideLink}>
          전체 스펙
          <br />
          리스트
        </Link>
      )}
    </aside>
  );
};
