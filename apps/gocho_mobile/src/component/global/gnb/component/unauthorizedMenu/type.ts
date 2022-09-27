import { Dispatch, SetStateAction } from "react";
import { openedElementDef } from "../../type";

export interface unauthorizedMEnuDef {
  setOpenedElement: Dispatch<SetStateAction<openedElementDef>>;
}
