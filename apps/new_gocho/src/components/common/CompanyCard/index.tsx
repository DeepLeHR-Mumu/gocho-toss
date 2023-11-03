import Link from "next/link";
import { css } from "@emotion/react";
import { Profile } from "shared-ui/deeple-ds";

import { useGetDeviceType } from "@/globalStates";
import { INTERNAL_URL } from "@/constants";

import { CompanyBookmark } from "../CompanyBookmark";
import { SkeletonBox } from "../SkeletonBox";
import { CompanyCardProps } from "./type";
import { cssObj } from "./style";

export const CompanyCard = ({ company, replace = false, callback, blockClick }: CompanyCardProps) => {
  const { isMobile } = useGetDeviceType();

  const isButtonExist = !!company?.bookmark;

  const getProfileSize = () => {
    if (isMobile) {
      return 72;
    }

    return 100;
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
      <Link
        href={`${INTERNAL_URL.COMPANY_DETAIL}/${company.id}`}
        replace={replace}
        onClick={(e) => {
          if (blockClick) {
            e.preventDefault();
            return;
          }

          if (callback) {
            callback();
          }
        }}
      >
        <Profile
          src={company.logoSrc}
          size={getProfileSize()}
          altText={`${company.name} 로고`}
          css={cssObj.cursorPointer}
        />
      </Link>
      <Link href={`${INTERNAL_URL.COMPANY_DETAIL}/${company.id}`} replace={replace} onClick={callback}>
        <div css={cssObj.linkBox}>
          <h3 css={cssObj.name(isButtonExist)}>{company.name}</h3>
        </div>
      </Link>
      {!isMobile && (
        <div css={cssObj.hashTagWrapper(isButtonExist)}>
          {company.hashTagArr?.map((hashTag) => (
            <p key={hashTag} css={cssObj.hashTags}>
              #{hashTag}
            </p>
          ))}
        </div>
      )}
      {isButtonExist && <CompanyBookmark companyId={company.id} isBookmark={!!company.bookmark?.state} />}
    </div>
  );
};
