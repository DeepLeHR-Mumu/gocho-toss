import { FunctionComponent } from "react";
import Image from "next/image";

import { getUserBadgeSrc } from "./util";
import { UserBadgeProps } from "./type";
import { badgeCSS } from "./style";

export const UserBadge: FunctionComponent<UserBadgeProps> = ({ badge }) => {
  return (
    <div css={badgeCSS}>
      <Image src={getUserBadgeSrc(badge)} alt={badge} layout="fill" objectFit="contain" />
    </div>
  );
};
