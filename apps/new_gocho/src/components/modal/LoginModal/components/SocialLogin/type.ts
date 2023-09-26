import { MouseEventHandler } from "react";

export interface SocialLoginProps {
  toEmailLogin?: MouseEventHandler<HTMLButtonElement>;
  closeHandler?: MouseEventHandler<SVGElement>;
}
