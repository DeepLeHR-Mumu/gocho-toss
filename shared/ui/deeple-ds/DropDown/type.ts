import { Key, ReactNode, ReactElement } from "react";

export type MenuOption = { content: ReactNode; key?: Key; focused?: boolean; onClick?: () => void };

export type MenuDirection = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export type MenuLocation = {
  direction: MenuDirection;
  topOrBottom: number;
  leftOrRight: number;
};

export interface MenuProps {
  width?: 128 | 180;
  options?: MenuOption[];
  header?: Omit<MenuOption, "key" | "focused">;
  footer?: Omit<MenuOption, "key" | "focused">;
}

export interface DropDownProps {
  title?: string;
  icon?: { location?: "prefix" | "suffix"; whenMenuVisible?: ReactNode; whenMenuInvisible?: ReactNode };
  customTitle?: ReactElement;
  menu?: MenuProps & { direction?: MenuDirection };
}
