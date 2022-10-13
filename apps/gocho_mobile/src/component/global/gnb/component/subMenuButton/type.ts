import { Dispatch, SetStateAction } from "react";
import { openedElementDef } from "@component/global/gnb/type";

export interface SubMenuButtonProps {
  link: string;
  title: string;
  setOpenedElement: Dispatch<SetStateAction<openedElementDef>>;
}
