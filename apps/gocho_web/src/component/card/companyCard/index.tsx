import { FunctionComponent, useState } from "react";
import Image from "next/image";

import { SkeletonBox } from "@component/common/atom/skeletonBox";
import defaultCompanyLogo from "@public/images/global/common/default_company_logo.svg";
import { CompanyCardProps, CompanyCardSkeleton } from "./type";
import {
  companyCardSkeleton,
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

export const CompanyCard: FunctionComponent<CompanyCardProps | CompanyCardSkeleton> = ({ companyData, isSkeleton }) => {
  const [imageSrc, setImageSrc] = useState(companyData?.logoUrl as string);

  const size = "";
  const sector = "";

  if (isSkeleton || companyData === undefined) {
    return (
      <div css={companyCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

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
          src={imageSrc}
          alt=""
          onError={() => {
            return setImageSrc(defaultCompanyLogo);
          }}
        />
      </div>
    </article>
  );
};
