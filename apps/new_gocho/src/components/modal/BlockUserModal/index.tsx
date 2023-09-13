import { Popup } from "shared-ui/deeple-ds";

import { useBlockUser } from "@/apis/users";

import { BlockUserModalProps } from "./type";
import { useToast } from "@/globalStates";

export const BlockUserModal = ({ companyId, userId, cancelHandler, confirmHandler }: BlockUserModalProps) => {
  const { mutate: postBlockUser } = useBlockUser({ companyId });
  const { setToastMessage } = useToast();

  return (
    <Popup
      title="차단하기"
      description="해당 유저를 차단하시면 해당 유저의 댓글, 게시물 등을 보실 수 없으며 추후 차단 해제가 불가능합니다."
      cancel={{
        text: "취소",
        handler: () => {
          if (cancelHandler) {
            cancelHandler();
          }
        },
      }}
      confirm={{
        text: "확인",
        handler: () => {
          if (userId) {
            postBlockUser({ userId });
          }

          if (confirmHandler) {
            confirmHandler();
          }

          if (cancelHandler) {
            setToastMessage("유저가 차단 되었습니다.");
            cancelHandler();
          }
        },
      }}
    />
  );
};
