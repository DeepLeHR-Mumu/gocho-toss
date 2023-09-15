import { useState } from "react";
import { css } from "@emotion/react";
import { FiTrash2 } from "react-icons/fi";

import { Popup } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { useDeleteCompanyComment } from "@/apis/company";

import { DeleteCommentProps } from "./type";
import { cssObj } from "./style";

export const DeleteComment = ({ size, color, companyId, commentId }: DeleteCommentProps) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { setToastMessage } = useToast();

  const { mutate: deleteCompanyComment } = useDeleteCompanyComment({ companyId });

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setDeleteModal(true);
        }}
      >
        <FiTrash2
          css={css`
            ${cssObj.size(size)}${cssObj[color]}
          `}
        />
      </button>
      {deleteModal && (
        <Popup
          title="삭제하기"
          description="남기신 리뷰를 삭제하시겠습니까?"
          cancel={{
            text: "닫기",
            handler: () => {
              setDeleteModal(false);
            },
          }}
          confirm={{
            text: "확인",
            handler: () => {
              if (commentId && companyId) {
                deleteCompanyComment({ commentId, companyId });
                setToastMessage("리뷰가 삭제되었습니다.");
              }
            },
          }}
        />
      )}
    </>
  );
};
