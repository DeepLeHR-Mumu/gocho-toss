import { Dispatch, SetStateAction } from "react";

type TipDataDef = {
  id: number;
  title: string;
  tag: string[];
  description: string;
  thumbnailSrc: string;
};
export interface LatestCardProps {
  currentTipObj: {
    setCurrentTip: Dispatch<SetStateAction<TipDataDef | null>>;
    currentTip: TipDataDef;
  };
  tipData: TipDataDef;
}
