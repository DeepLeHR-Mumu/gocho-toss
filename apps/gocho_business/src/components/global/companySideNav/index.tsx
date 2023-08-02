import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useManagerProfile } from "@/apis";

import { COMPANY_SIDENAV_LINK_ARR } from "./constant";
import { cssObj } from "./style";

export const CompanySideNav: FunctionComponent = () => {
  const router = useRouter();
  const { pathname } = router;
  const menuUrl = pathname.split("/").join("/");

  const { data: userInfoData } = useManagerProfile();

  return (
    <div css={cssObj.sideNavContainer}>
      {userInfoData?.status.name !== "인증완료" ? (
        <Link
          href={COMPANY_SIDENAV_LINK_ARR[2].url}
          css={cssObj.link(COMPANY_SIDENAV_LINK_ARR[2].url.includes(menuUrl))}
          passHref
        >
          {COMPANY_SIDENAV_LINK_ARR[2].name}
        </Link>
      ) : (
        COMPANY_SIDENAV_LINK_ARR.map((linkObj) => (
          <Link
            key={`companySideNavLink${linkObj.name}`}
            href={linkObj.url}
            css={cssObj.link(linkObj.url.includes(menuUrl))}
            passHref
          >
            {linkObj.name}
          </Link>
        ))
      )}
    </div>
  );
};
