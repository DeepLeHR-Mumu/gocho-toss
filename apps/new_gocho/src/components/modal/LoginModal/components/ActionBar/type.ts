export type ClickHandler = () => void;

export interface ActionBarProps {
  title?: string;
  previousHandler?: ClickHandler;
  closeHandler?: ClickHandler;
  gaEvent?: ClickHandler;
}

export type ActionBarHandlers = Omit<ActionBarProps, "title">;
