import { Dispatch, SetStateAction } from "react";
import { openedElementDef } from "../../type";

export interface unAuthedMenuDef {
  setOpenedElement: Dispatch<SetStateAction<openedElementDef>>;
}
