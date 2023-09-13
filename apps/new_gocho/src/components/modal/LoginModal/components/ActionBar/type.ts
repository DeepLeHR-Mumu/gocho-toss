export type ClickHandler = () => void;

export interface ActionBarProps {
  title?: string;
  previousHandler?: ClickHandler;
  closeHandler?: ClickHandler;
}

export type ActionBarHandlers = Omit<ActionBarProps, "title">;
