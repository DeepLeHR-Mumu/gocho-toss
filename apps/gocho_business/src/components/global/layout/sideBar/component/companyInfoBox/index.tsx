import { FunctionComponent, useState } from "react";
import Image from "next/image";

import defaultLogoSrc from "shared-image/global/common/default_company_logo.svg";

import { CompanyInfoBoxProps } from "./type";
import { cssObj } from "./style";

export const CompanyInfoBox: FunctionComponent<CompanyInfoBoxProps> = ({ name, img }) => {
  const [logoSrc, setLogoSrc] = useState<string>(img);

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.imageBox}>
        <Image src={logoSrc} alt={name} objectFit="contain" layout="fill" onError={() => setLogoSrc(defaultLogoSrc)} />
      </div>
      <p css={cssObj.nameCSS}>{name}</p>
    </div>
  );
};
