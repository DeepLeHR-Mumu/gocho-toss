import { useState } from "react";
import Link from "next/link";

import { Profile } from "shared-ui/deeple-ds";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { LoginModal } from "@/components/modal/LoginModal";
import { INTERNAL_URL } from "@/constants";

import { CompanyBookmark } from "../CompanyBookmark";
import { SkeletonBox } from "../SkeletonBox";

import { CompanyRowProps } from "./type";
import { cssObj } from "./style";

export const CompanyRow = ({ company, border = true }: CompanyRowProps) => {
  const [loginModal, setLoginModal] = useState(false);

  if (!company) {
    return (
      <div css={cssObj.skeletonWrapper}>
        <SkeletonBox />
      </div>
    );
  }

  return (
    <>
      <div css={cssObj.wrapper(Boolean(border))}>
        <Link href={`${INTERNAL_URL.COMPANY_DETAIL}/${company.id}`} css={cssObj.companyName}>
          <Profile
            size={60}
            src={company.logo || defaultCompanyLogo}
            altText={`${company.name} 로고`}
            css={cssObj.cursorPointer}
          />
        </Link>
        <div css={cssObj.infoWrapper}>
          <Link href={`${INTERNAL_URL.COMPANY_DETAIL}/${company.id}`} css={cssObj.companyName}>
            {company.name}
          </Link>
          <span css={cssObj.companyCategory}>
            {company.size} · {company.industry}
          </span>
        </div>
        {company.bookmark && <CompanyBookmark companyId={company.id} isBookmark={company.bookmark.state} />}
      </div>
      {loginModal && (
        <LoginModal
          close={() => {
            setLoginModal(false);
          }}
        />
      )}
    </>
  );
};
