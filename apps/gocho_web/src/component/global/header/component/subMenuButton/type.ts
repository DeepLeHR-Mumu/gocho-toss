import { Dispatch, SetStateAction } from "react";

export interface SubMenuButtonProps {
  link: string;
  title: string;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
}
