import { useState } from "react";
import Link from "next/link";
import { Profile } from "shared-ui/deeple-ds";

import { LoginModal } from "@/components/modal/LoginModal";
import { useGetDeviceType } from "@/globalStates";
import { INTERNAL_URL } from "@/pages/constants";

import { CompanyBookmark } from "../CompanyBookmark";
import { CompanyCardProps } from "./type";
import { cssObj } from "./style";

export const CompanyCard = ({ id, logoSrc, name, hashTagArr = [], bookmark }: CompanyCardProps) => {
  const [loginModal, setLoginModal] = useState(false);

  const { isMobile } = useGetDeviceType();
  const isButtonExist = !!bookmark;

  const getProfileSize = () => {
    if (isMobile) {
      return 72;
    }

    return isButtonExist ? 120 : 100;
  };

  return (
    <>
      <div css={cssObj.cardWrapper(isButtonExist)}>
        <Profile src={logoSrc} size={getProfileSize()} />
        <Link href={`${INTERNAL_URL.COMPANY_DETAIL}/${id}`}>
          <h3 css={cssObj.name(isButtonExist)}>{name}</h3>
        </Link>
        {!isMobile && (
          <p css={cssObj.hashTags(isButtonExist)}>{hashTagArr.map((hashTag) => `#${hashTag}`).join(" ")}</p>
        )}
        {isButtonExist && <CompanyBookmark companyId={id} isBookmark={bookmark.state} />}
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
