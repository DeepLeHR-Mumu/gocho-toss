import { useState } from "react";
import Link from "next/link";

import { Profile } from "shared-ui/deeple-ds";
import { FollowButton } from "shared-ui/deeple-ds/FollowButton";

import { useUserProfile } from "@/apis/auth";
import { useCompanyBookmarkToggle } from "@/apis/company";
import { useGetDeviceType } from "@/globalStates";
import { LoginModal } from "@/components/modal/LoginModal";

import { CompanyRowProps } from "./type";
import { cssObj } from "./style";

export const CompanyRow = ({ id, logo, name, size, industry, bookmark, border }: CompanyRowProps) => {
  const [loginModal, setLoginModal] = useState(false);
  const { isMobile } = useGetDeviceType();
  const { data: userData } = useUserProfile();
  const { mutate: companyBookmarkToggle } = useCompanyBookmarkToggle();

  const bookmarkToggleHandler = () => {
    if (!userData) {
      setLoginModal(true);
      return;
    }
    companyBookmarkToggle({ companyId: id });
  };

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
        {bookmark && (
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
