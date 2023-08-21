import { MouseEventHandler } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SocialLoginProps {
  toEmailLogin?: MouseEventHandler<HTMLButtonElement>;
  closeHandler?: MouseEventHandler<SVGElement>;
}
