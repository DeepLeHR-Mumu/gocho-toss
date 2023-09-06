import { useState } from "react";
import Link from "next/link";
import { Profile, FollowButton } from "shared-ui/deeple-ds";

import { LoginModal } from "@/components/modal/LoginModal";
import { useGetDeviceType } from "@/globalStates";
import { useUserProfile } from "@/apis/auth";
import { useCompanyBookmarkToggle } from "@/apis/company";

import { CompanyCardProps } from "./type";
import { cssObj } from "./style";
import { URL } from "@/pages/constants";

export const CompanyCard = ({ id, logoSrc, name, hashTagArr = [], bookmark }: CompanyCardProps) => {
  const [loginModal, setLoginModal] = useState(false);

  const { isMobile } = useGetDeviceType();
  const isButtonExist = !!bookmark;

  const { data: userData } = useUserProfile();
  const { mutate: companyBookmarkToggle } = useCompanyBookmarkToggle();

  const bookmarkToggleHandler = () => {
    if (bookmark) {
      if (!userData) {
        setLoginModal(true);
        return;
      }

      companyBookmarkToggle({ companyId: id });
    }
  };

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
        <Link href={`${URL.COMPANY_DETAIL}/${id}`}>
          <h3 css={cssObj.name(isButtonExist)}>{name}</h3>
        </Link>
        {!isMobile && (
          <p css={cssObj.hashTags(isButtonExist)}>
            {hashTagArr
              .map((hashTag) => {
                return `#${hashTag}`;
              })
              .join(" ")}
          </p>
        )}
        {isButtonExist && (
          <FollowButton color={bookmark.state ? "follow" : "unfollow"} onClick={bookmarkToggleHandler}>
            {bookmark.state ? "팔로잉" : "팔로우"}
          </FollowButton>
        )}
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
