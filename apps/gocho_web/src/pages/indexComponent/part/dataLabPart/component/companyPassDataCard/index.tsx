import { FunctionComponent } from "react";
import Image from "next/image";

import { companyLogoBox } from "./style";
import { CompanyPassDataCardProps } from "./type";
// NOTMYFAULT - 훗날 이미지 CDN으로 뺀 후 타입 string 변경

export const CompanyPassDataCard: FunctionComponent<CompanyPassDataCardProps> =
  ({ companyName, companyLogo }) => {
    return (
      <div css={companyLogoBox}>
        <Image
          src={companyLogo}
          alt={companyName}
          layout="fill"
          objectFit="contain"
        />
      </div>
    );
  };
