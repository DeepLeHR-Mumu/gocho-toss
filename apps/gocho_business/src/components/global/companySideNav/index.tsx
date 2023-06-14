import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { COMPANY_SIDENAV_LINK_ARR } from "./constant";
import { cssObj } from "./style";

export const CompanySideNav: FunctionComponent = () => {
  const router = useRouter();
  const { pathname } = router;
  const menuUrl = pathname.split("/").join("/");

  return (
    <div css={cssObj.sideNavContainer}>
      {COMPANY_SIDENAV_LINK_ARR.map((linkObj) => (
        <Link
          key={`companySideNavLink${linkObj.name}`}
          href={linkObj.url}
          css={cssObj.link(linkObj.url.includes(menuUrl))}
          passHref
        >
          {linkObj.name}
        </Link>
      ))}
    </div>
  );
};
