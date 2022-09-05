import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useUserInfo } from "@api/auth";

import { ProfileImg } from "@component/common/atom/profileImg";
import { SPEC_MY_URL, SPEC_URL, SPEC_REGISTER_URL } from "@constant/internalURL";

import { AsideMenuProps } from "./type";
import { wrapper, partContainer, asideProfile, loginNickname, asideLink, activeLink } from "./style";

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
        <ProfileImg imageStr={userInfoData.image} size="S" />
        <p css={loginNickname}>{userInfoData?.nickname}</p>
      </div>
      <Link href={SPEC_REGISTER_URL} passHref>
        <a css={asideLink}>
          스펙
          <br />
          등록하기
        </a>
      </Link>
      <Link href={SPEC_MY_URL} passHref>
        <a css={[asideLink, isSpecMyUrl && activeLink]}>
          등록한
          <br />
          스펙 내역
        </a>
      </Link>
      {isSpecMyUrl && (
        <Link href={SPEC_URL} passHref>
          <a css={asideLink}>
            전체 스펙
            <br />
            리스트
          </a>
        </Link>
      )}
    </aside>
  );
};
