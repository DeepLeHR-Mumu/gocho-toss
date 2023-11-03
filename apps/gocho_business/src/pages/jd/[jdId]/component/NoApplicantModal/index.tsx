import { Popup } from "shared-ui/deeple-ds";

import { NoApplicantModalProps } from "./type";

export const NoApplicantModal = ({ confirm }: NoApplicantModalProps) => (
  <Popup
    title="지원자를 선택해주세요"
    description="이력서를 저장할 지원자를 선택해주세요"
    closeHandler={confirm}
    confirm={{ text: "확인", handler: confirm }}
  />
);
