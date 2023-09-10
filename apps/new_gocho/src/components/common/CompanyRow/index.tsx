import { useState } from "react";
import Link from "next/link";

import { Profile } from "shared-ui/deeple-ds";

import { useGetDeviceType } from "@/globalStates";
import { LoginModal } from "@/components/modal/LoginModal";

import { CompanyBookmark } from "../CompanyBookmark";

import { CompanyRowProps } from "./type";
import { cssObj } from "./style";

export const CompanyRow = ({ id, logo, name, size, industry, bookmark, border }: CompanyRowProps) => {
  const [loginModal, setLoginModal] = useState(false);
  const { isMobile } = useGetDeviceType();

  return (
    <>
      <div css={cssObj.wrapper(!!border)}>
        <Profile size={isMobile ? 52 : 60} src={logo} />
        <div css={cssObj.infoWrapper}>
          <Link href={`/company/${id}/detail`} css={cssObj.companyName}>
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
