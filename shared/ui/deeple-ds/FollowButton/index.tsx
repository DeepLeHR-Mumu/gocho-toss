import { css } from "@emotion/react";
import { followButtonColor } from "../style/color";

import { FollowButtonProps } from "./type";
import { cssObj } from "./style";

const FollowButton = ({ color = "unfollow", children, ...props }: FollowButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button
    css={css`
      ${cssObj.followButton}${followButtonColor[color]}
    `}
    {...props}
  >
    {children}
  </button>
);

export default FollowButton;
