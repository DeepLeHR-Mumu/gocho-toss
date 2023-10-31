import { Popup } from "shared-ui/deeple-ds";
import { ModalProps } from "../type";

export const ProfileAlertModal = ({ setModal, confirmHandler }: ModalProps) => (
  <Popup
    title="사진 용량이 초과되었어요"
    description="5MB 이하의 사진을 첨부해 주세요"
    confirm={{
      text: "확인",
      handler: () => {
        setModal(false);
        if (confirmHandler) confirmHandler();
      },
    }}
  />
);
