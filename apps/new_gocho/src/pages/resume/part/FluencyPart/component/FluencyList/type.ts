import { SelectorResumeFluencyArr } from "@/apis/resume/fluency/useResumeFluencyArr/type";
import { SelectorResumeFluency } from "@/apis/resume/fluency/useResumeFluency/type";

export interface FluencyListProps {
  resumeId: number;
  selectFluency: (fluency: SelectorResumeFluency) => void;
  myFluencyList: SelectorResumeFluencyArr;
}
