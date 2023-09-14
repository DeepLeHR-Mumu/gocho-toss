import { useState } from "react";
import { FollowButton } from "shared-ui/deeple-ds";

import { useCompanyBookmarkToggle } from "@/apis/company";
import { useUserProfile } from "@/apis/auth";
import { LoginModal } from "@/components/modal/LoginModal";

import { CompanyBookmarkProps } from "./type";

export const CompanyBookmark = ({ companyId, isBookmark }: CompanyBookmarkProps) => {
  const [loginModal, setLoginModal] = useState(false);
  const { data: userData } = useUserProfile();
  const { mutate: companyBookmarkToggle } = useCompanyBookmarkToggle();

  const bookmarkToggleHandler = () => {
    if (!userData) {
      setLoginModal(true);
      return;
    }
    if (companyId) {
      companyBookmarkToggle({ companyId });
    }
  };

  return (
    <>
      <FollowButton
        color={isBookmark ? "follow" : "unfollow"}
        onClick={(e) => {
          e.preventDefault();
          bookmarkToggleHandler();
        }}
      >
        {isBookmark ? "팔로잉" : "팔로우"}
      </FollowButton>
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
