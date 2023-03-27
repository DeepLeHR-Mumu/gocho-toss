import { FunctionComponent } from "react";
import Image from "next/image";

import { getUserBadgeSrc } from "./util";
import { UserBadgeProps } from "./type";
import { badgeCSS } from "./style";

export const UserBadge: FunctionComponent<UserBadgeProps> = ({ badge }) => (
  <div css={badgeCSS}>
    <Image src={getUserBadgeSrc(badge)} alt={`${badge} 뱃지`} fill sizes="1" quality={100} />
  </div>
);
