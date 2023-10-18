import { SelectorResumeFluency } from "@/apis/resume/fluency/useResumeFluency/type";

export interface FluencyFormProps {
  resumeId: number;
  handleEditMode: () => void;
  currentFluency?: SelectorResumeFluency;
}
