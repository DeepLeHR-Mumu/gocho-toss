import { Profile } from "shared-ui/deeple-ds";
import FollowButton from "shared-ui/deeple-ds/FollowButton";

import { useGetDeviceType } from "@/globalStates";

import { CompanyRowProps } from "./type";
import { cssObj } from "./style";

export const CompanyRow = ({ logo, name, size, industry, follow, onClick }: CompanyRowProps) => {
  const { isMobile } = useGetDeviceType();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div css={cssObj.wrapper} onClick={onClick}>
      <Profile size={isMobile ? 52 : 60} src={logo} />
      <div css={cssObj.infoWrapper}>
        <h3 css={cssObj.companyName}>{name}</h3>
        <span css={cssObj.companyCategory}>
          {size} {industry}
        </span>
      </div>
      <FollowButton color={follow.state ? "follow" : "unfollow"} onClick={follow.onClick}>
        {follow.state ? "팔로잉" : "팔로우"}
      </FollowButton>
    </div>
  );
};
