import Link from "next/link";

import { Profile } from "shared-ui/deeple-ds";
import { FollowButton } from "shared-ui/deeple-ds/FollowButton";

import { useGetDeviceType } from "@/globalStates";

import { CompanyRowProps } from "./type";
import { cssObj } from "./style";

export const CompanyRow = ({ id, logo, name, size, industry, follow, border }: CompanyRowProps) => {
  const { isMobile } = useGetDeviceType();

  return (
    <Link css={cssObj.wrapper(!!border)} href={`/company/${id}/detail`}>
      <Profile size={isMobile ? 52 : 60} src={logo} />
      <div css={cssObj.infoWrapper}>
        <h3 css={cssObj.companyName}>{name}</h3>
        <span css={cssObj.companyCategory}>
          {size} · {industry}
        </span>
      </div>
      {follow && (
        <FollowButton color={follow.state ? "follow" : "unfollow"} onClick={follow.onClick}>
          {follow.state ? "팔로잉" : "팔로우"}
        </FollowButton>
      )}
    </Link>
  );
};
