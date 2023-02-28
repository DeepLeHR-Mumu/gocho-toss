import { FunctionComponent } from "react";
import Image from "next/image";

import defaultLogoSrc from "shared-image/global/common/default_company_logo.svg";

import { CompanyInfoBoxProps } from "./type";
import { cssObj } from "./style";

export const CompanyInfoBox: FunctionComponent<CompanyInfoBoxProps> = ({ name, img }) => (
  <div css={cssObj.wrapper}>
    <div css={cssObj.imageBox}>
      <Image src={img || defaultLogoSrc} alt={name} fill sizes="1" />
    </div>
    <p css={cssObj.nameCSS}>{name}</p>
  </div>
);
