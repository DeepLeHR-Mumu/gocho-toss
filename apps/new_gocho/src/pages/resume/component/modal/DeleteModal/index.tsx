import { Popup } from "shared-ui/deeple-ds";
import { ModalProps } from "../type";

export const DeleteModal = ({ setModal, cancelHandler, confirmHandler }: ModalProps) => (
  <Popup
    title="해당 이력을 삭제하시겠습니까?"
    description="해당 항목을 삭제할 경우 복구가 불가능합니다."
    cancel={{
      text: "취소",
      handler: () => {
        setModal(false);
        if (cancelHandler) cancelHandler();
      },
    }}
    confirm={{
      text: "확인",
      handler: () => {
        setModal(false);
        if (confirmHandler) confirmHandler();
      },
    }}
  />
);
