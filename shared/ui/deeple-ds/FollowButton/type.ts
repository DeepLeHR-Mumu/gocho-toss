import { ButtonHTMLAttributes } from "react";

import { FollowButtonColor } from "../type";

export interface FollowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: FollowButtonColor;
}
