import { useState } from "react";
import { Profile, FollowButton } from "shared-ui/deeple-ds";

import { LoginModal } from "@/components/modal/LoginModal";
import { useGetDeviceType } from "@/globalStates";
import { useUserProfile } from "@/apis/auth";
import { useCompanyBookmarkToggle } from "@/apis/company";

import { CompanyCardProps } from "./type";
import { cssObj } from "./style";

export const CompanyCard = ({ logoSrc, name, hashTagArr = [], bookmark }: CompanyCardProps) => {
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

      companyBookmarkToggle({ companyId: bookmark.companyId });
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
        <h3 css={cssObj.name(isButtonExist)}>{name}</h3>
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
