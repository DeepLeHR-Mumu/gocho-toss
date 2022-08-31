import { Dispatch, SetStateAction } from "react";
import { MySpecDataDef } from "../../type";

export interface SimpleCardProps {
  index: number;
  evalCount: number;
  currentActiveIndex: number | null;
  setActiveCardIndex: Dispatch<SetStateAction<number | null>>;
  mySpecData: MySpecDataDef;
}
