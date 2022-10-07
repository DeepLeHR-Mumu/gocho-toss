import { Dispatch, SetStateAction } from "react";

export interface SubMenuButtonProps {
  subMenuData: {
    pageQuery?: boolean;
    pageOrder?: string;
    menuLink: string;
    menuTitle: string;
  };
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
}
