import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { SIDENAV_LINK_ARR } from "./constant";
import { cssObj } from "./style";

export const SideNav: FunctionComponent = () => {
  const router = useRouter();
  const { pathname } = router;
  const menuUrl = pathname.split("/").join("/");

  return (
    <div css={cssObj.sideNavContainer}>
      {SIDENAV_LINK_ARR.map((linkObj) => (
        <Link
          key={`sideNavLink${linkObj.name}`}
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
