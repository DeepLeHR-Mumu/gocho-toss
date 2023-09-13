import { useState } from "react";
import Link from "next/link";

import { Profile } from "shared-ui/deeple-ds";

import { useGetDeviceType } from "@/globalStates";
import { LoginModal } from "@/components/modal/LoginModal";
import { INTERNAL_URL } from "@/pages/constants";

import { CompanyBookmark } from "../CompanyBookmark";

import { CompanyRowProps } from "./type";
import { cssObj } from "./style";

export const CompanyRow = ({ id, logo, name, size, industry, bookmark, border }: CompanyRowProps) => {
  const [loginModal, setLoginModal] = useState(false);
  const { isMobile } = useGetDeviceType();

  return (
    <>
      <div css={cssObj.wrapper(Boolean(border))}>
        <Profile size={isMobile ? 52 : 60} src={logo} altText={`${name} 로고`} />
        <div css={cssObj.infoWrapper}>
          <Link href={`${INTERNAL_URL.COMPANY_DETAIL}/${id}`} css={cssObj.companyName}>
            {name}
          </Link>
          <span css={cssObj.companyCategory}>
            {size} · {industry}
          </span>
        </div>
        {bookmark && <CompanyBookmark companyId={id} isBookmark={bookmark.state} />}
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
