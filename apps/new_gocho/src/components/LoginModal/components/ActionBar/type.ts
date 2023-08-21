import { MouseEvent } from "react";

type ClickHandler = <T extends Element>(event: MouseEvent<T>) => void;

export interface ActionBarProps {
  title?: string;
  previousHandler?: ClickHandler;
  closeHandler?: ClickHandler;
}

export type ActionBarHandlers = Omit<ActionBarProps, "title">;
