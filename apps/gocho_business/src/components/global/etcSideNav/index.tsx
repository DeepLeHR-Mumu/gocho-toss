import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { ETC_SIDENAV_LINK_ARR } from "./constant";
import { cssObj } from "./style";

export const EtcSideNav: FunctionComponent = () => {
  const router = useRouter();
  const { pathname } = router;
  const menuUrl = pathname.split("/")[1];
  console.log(menuUrl);

  return (
    <div css={cssObj.sideNavContainer}>
      {ETC_SIDENAV_LINK_ARR.map((linkObj) => (
        <Link
          key={`etcSideNavLink${linkObj.name}`}
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
