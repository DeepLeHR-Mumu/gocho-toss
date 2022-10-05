import { Dispatch, SetStateAction } from "react";

export interface SubMenuButtonProps {
  isPageQuery: boolean;
  link: string;
  title: string;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
}
