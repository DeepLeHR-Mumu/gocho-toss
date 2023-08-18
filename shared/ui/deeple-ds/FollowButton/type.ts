import { ButtonHTMLAttributes } from "react";

import { FollowButtonColor } from "deeple-ds/type";

export interface FollowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: FollowButtonColor;
}
