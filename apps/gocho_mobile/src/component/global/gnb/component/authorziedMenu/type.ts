import { Dispatch, SetStateAction } from "react";
import { openedElementDef } from "../../type";

export interface authorziedMenu {
  setOpenedElement: Dispatch<SetStateAction<openedElementDef>>;
}
