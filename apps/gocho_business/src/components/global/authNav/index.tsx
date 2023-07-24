import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import bizTextColor from "@/public/image/deepleLogo/bizTextColor.svg";

import { INTERNAL_URL } from "@/constants";
import { cssObj } from "./style";

export const AuthNav: FunctionComponent = () => (
  <header css={cssObj.headerWrapper}>
    <Link href={INTERNAL_URL.LOGIN} passHref css={cssObj.logoBox}>
      <Image src={bizTextColor} alt="고초대졸닷컴" fill />
    </Link>
  </header>
);
