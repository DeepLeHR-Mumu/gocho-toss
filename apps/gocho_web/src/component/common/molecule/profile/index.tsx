import { FunctionComponent, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

import { useUserInfo } from "@api/auth";
import { ProfileImg } from "@component/common/atom/profileImg";

import { MyProfileMenu } from "../myProfileMenu";
import { profileWrapper, greetingMsg, downIconCSS } from "./style";
import { activeDef } from "./type";

export const Profile: FunctionComponent = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { data: userInfoData } = useUserInfo();

  const handleIsHover: activeDef = (active) => {
    setIsHover(active);
  };

  return (
    <div
      css={profileWrapper}
      onMouseOver={() => {
        handleIsHover(true);
      }}
      onFocus={() => {
        handleIsHover(true);
      }}
      onMouseLeave={() => {
        handleIsHover(false);
      }}
    >
      {userInfoData && <ProfileImg imageStr={userInfoData?.image} size="S" />}

      <p css={greetingMsg}>{userInfoData?.nickname}</p>
      <BsChevronDown css={downIconCSS} />
      <MyProfileMenu active={isHover} />
    </div>
  );
};
