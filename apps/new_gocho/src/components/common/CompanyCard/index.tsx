import Link from "next/link";
import { css } from "@emotion/react";
import { Profile } from "shared-ui/deeple-ds";

import { useGetDeviceType } from "@/globalStates";
import { INTERNAL_URL } from "@/pages/constants";

import { CompanyBookmark } from "../CompanyBookmark";
import { CompanyCardProps } from "./type";
import { cssObj } from "./style";
import { SkeletonBox } from "../SkeletonBox";

export const CompanyCard = ({ company }: CompanyCardProps) => {
  const { isMobile } = useGetDeviceType();

  const isButtonExist = !!company?.bookmark;

  const getProfileSize = () => {
    if (isMobile) {
      return 72;
    }

    return isButtonExist ? 120 : 100;
  };

  if (!company) {
    return (
      <div
        css={css`
          ${cssObj.cardWrapper(true)}
          padding: 0;
        `}
      >
        <SkeletonBox />
      </div>
    );
  }

  return (
    <div css={cssObj.cardWrapper(isButtonExist)}>
      <Profile src={company.logoSrc} size={getProfileSize()} altText={`${name} 로고`} />
      <Link href={`${INTERNAL_URL.COMPANY_DETAIL}/${company.id}`}>
        <h3 css={cssObj.name(isButtonExist)}>{company.name}</h3>
      </Link>
      {!isMobile && <p css={cssObj.hashTags(isButtonExist)}>{company.hashTagArr?.map((hashTag) => `#${hashTag}`).join(" ")}</p>}
      {isButtonExist && <CompanyBookmark companyId={company.id} isBookmark={!!company.bookmark?.state} />}
    </div>
  );
};
