import { Popup } from "shared-ui/deeple-ds";
import { ModalProps } from "../type";

export const CancelModal = ({ setModal, cancelHandler, confirmHandler }: ModalProps) => (
  <Popup
    title="작성을 취소하시겠어요?"
    description="현재 페이지를 벗어나시게 되면 작성 중이던 내용이 저장되지 않고 모두 사라져요!"
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
