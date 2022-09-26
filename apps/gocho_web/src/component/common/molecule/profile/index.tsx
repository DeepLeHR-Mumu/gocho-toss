import { FunctionComponent, useState } from "react";
import { BsChevronUp } from "react-icons/bs";

import { useUserInfo } from "shared-api/auth";
import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { MyProfileMenu } from "../myProfileMenu";
import { profileWrapper, greetingMsg, iconCSS } from "./style";

export const Profile: FunctionComponent = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { data: userInfoData } = useUserInfo();

  return (
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
      <MyProfileMenu active={isActive} />
    </button>
  );
};
