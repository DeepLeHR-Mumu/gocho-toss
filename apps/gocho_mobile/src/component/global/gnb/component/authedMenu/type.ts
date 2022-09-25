import { Dispatch, SetStateAction } from "react";
import { openedElementDef } from "../../type";

export interface authedMenuDef {
  setOpenedElement: Dispatch<SetStateAction<openedElementDef>>;
}
