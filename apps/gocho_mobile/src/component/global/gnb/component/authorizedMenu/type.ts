import { Dispatch, SetStateAction } from "react";
import { openedElementDef } from "../../type";

export interface AuthorizedMenuProps {
  setOpenedElement: Dispatch<SetStateAction<openedElementDef>>;
}
