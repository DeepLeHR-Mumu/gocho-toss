import { FunctionComponent } from "react";
import Image from "next/image";
import bizTextColor from "@/public/image/deepleLogo/bizTextColor.svg";

import { cssObj } from "./style";

export const AuthNav: FunctionComponent = () => (
  <header css={cssObj.headerWrapper}>
    <div css={cssObj.logoBox}>
      <Image src={bizTextColor} alt="고초대졸닷컴" fill />
    </div>
  </header>
);
