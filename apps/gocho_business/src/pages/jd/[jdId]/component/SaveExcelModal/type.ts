import { SaveModalBaseProps } from "../SaveModalBase/type";

export interface SaveExcelModalProps extends Pick<SaveModalBaseProps, "cancel"> {
  applicantIdArr: number[];
}
