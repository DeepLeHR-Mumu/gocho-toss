import { SAVE_MODAL_STEP } from "../constant";

export interface SaveModalBaseProps {
  type: "file" | "excel";
  applicantsNumber: number;
  cancel?: () => void;
  save?: () => void;
  step: SAVE_MODAL_STEP;
}
