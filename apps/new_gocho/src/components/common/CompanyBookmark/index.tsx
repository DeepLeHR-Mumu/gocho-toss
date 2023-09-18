import { useState } from "react";
import { FollowButton } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { useCompanyBookmarkToggle } from "@/apis/company";
import { useUserProfile } from "@/apis/auth";
import { LoginModal } from "@/components/modal/LoginModal";

import { CompanyBookmarkProps } from "./type";

export const CompanyBookmark = ({ companyId, isBookmark }: CompanyBookmarkProps) => {
  const [loginModal, setLoginModal] = useState(false);
  const { data: userData } = useUserProfile();
  const { mutate: companyBookmarkToggle } = useCompanyBookmarkToggle();
  const { setToastMessage } = useToast();

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
          if (isBookmark) setToastMessage("팔로잉 기업 목록에서 제외 되었습니다.");
          if (!isBookmark) setToastMessage("기업 팔로우가 완료 되었습니다");
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
