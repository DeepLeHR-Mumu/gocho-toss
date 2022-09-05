import { FunctionComponent } from "react";
import Image from "next/image";

import { CDN_URL } from "@constant/externalURL";

import { CompanyCardProps } from "./type";
import {
  cardWrapper,
  bookmarkButtonBox,
  bookmarkButtonWrapper,
  isRecruitingCSS,
  NameCSS,
  infoWrapper,
  sizeCSS,
  sectorCSS,
  companyLogoBox,
} from "./style";

export const CompanyCard: FunctionComponent<CompanyCardProps> = ({ companyData }) => {
  let size = "";
  let sector = "";

  companyData.info.forEach((info) => {
    const title = info.split(":")[0].trim();
    const desc = info.split(":")[1].trim();
    if (title === "기업규모") {
      size = desc;
    } else if (title === "업종") {
      sector = desc;
    }
  });
  return (
    <article css={cardWrapper}>
      <div css={bookmarkButtonWrapper}>
        <div css={bookmarkButtonBox}>
          <Image layout="fill" objectFit="contain" src="/images/global/star.png" alt="북마크 버튼" />
        </div>
      </div>
      <p css={isRecruitingCSS}>#채용중</p>
      <div css={NameCSS}>{companyData.name}</div>
      <div css={infoWrapper}>
        <div css={sizeCSS}>{size}</div>
        <div css={sectorCSS}>{sector}</div>
      </div>
      <div css={companyLogoBox}>
        <Image
          layout="fill"
          objectFit="contain"
          src={`${CDN_URL}/company_images/${companyData.id}/logo.png`}
          alt={`${companyData.name} 기업 로고`}
        />
      </div>
    </article>
  );
};
