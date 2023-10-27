import { SaveModalBaseProps } from "../SaveModalBase/type";

export interface SaveFileModalProps extends Pick<SaveModalBaseProps, "cancel" | "save"> {
  applicantIdArr: number[];
}
