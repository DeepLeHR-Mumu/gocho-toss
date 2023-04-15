import { FunctionComponent, useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { useRouter } from "next/router";

import { useUserProfile } from "shared-api/auth";
import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { MyProfileMenu } from "../myProfileMenu";
import { profileWrapper, greetingMsg, iconCSS, wrapper } from "./style";

export const Profile: FunctionComponent = () => {
  const { pathname } = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);
  const { data: userInfoData } = useUserProfile();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <div css={wrapper}>
      <button
        css={profileWrapper}
        type="button"
        aria-label={isActive ? "서브메뉴 열기" : "서브메뉴 닫기"}
        onClick={() => {
          setIsActive((isPrev) => {
            return !isPrev;
          });
        }}
      >
        {userInfoData && <ProfileImg imageStr={userInfoData?.image} size="S" />}

        <p css={greetingMsg}>{userInfoData?.nickname}</p>
        <BsChevronUp css={iconCSS(isActive)} />
      </button>
      <MyProfileMenu active={isActive} />
    </div>
  );
};
