import { MouseEventHandler } from "react";

export interface MoveCardButtonsProps {
  postSubmit: MouseEventHandler<HTMLButtonElement>;
  movePrevCard?(): void | undefined;
  prevTitle?: string;
  nextTitle?: string;
  prev?: boolean;
  next?: boolean;
}
