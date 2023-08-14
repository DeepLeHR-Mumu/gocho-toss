import { MouseEventHandler } from "react";

export interface PopupProps {
  title?: string;
  description?: string | string[];
  closeHandler?: MouseEventHandler<SVGElement>;
  cancel?: {
    text?: string;
    handler?: MouseEventHandler<HTMLButtonElement>;
  };
  confirm?: {
    text?: string;
    handler?: MouseEventHandler<HTMLButtonElement>;
  };
}
