import { useState } from "react";
import Link from "next/link";

import { Profile } from "shared-ui/deeple-ds";

import { useGetDeviceType } from "@/globalStates";
import { LoginModal } from "@/components/modal/LoginModal";
import { INTERNAL_URL } from "@/pages/constants";

import { CompanyBookmark } from "../CompanyBookmark";
import { SkeletonBox } from "../SkeletonBox";

import { CompanyRowProps } from "./type";
import { cssObj } from "./style";

export const CompanyRow = ({ company, border }: CompanyRowProps) => {
  const [loginModal, setLoginModal] = useState(false);
  const { isMobile } = useGetDeviceType();

  if (!company) {
    return (
      <div css={cssObj.skeletonWrapper}>
        <SkeletonBox />
      </div>
    );
  }

  return (
    <>
      <div css={cssObj.wrapper(!!border)}>
        <Profile size={isMobile ? 52 : 60} src={company.logo} />
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
