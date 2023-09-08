import { useState } from "react";
import { FiMoreVertical, FiThumbsDown, FiThumbsUp, FiTrash2 } from "react-icons/fi";

import { DropDown, Popup } from "shared-ui/deeple-ds";
import { getCommunityDateFormat } from "shared-util";

import { useCompanyCommentToggle, useDeleteCompanyComment } from "@/apis/company";
import { ReportUserModal, BlockUserModal } from "@/components";

import { ReviewProps } from "./type";
import { cssObj } from "./style";

export const Review = ({
  companyId,
  commentId,
  uploader,
  time,
  comment,
  thumbsUp,
  thumbsDown,
  isMyComment,
}: ReviewProps) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [blockUserModal, setBlockUserModal] = useState(false);
  const [reportUserModal, setReportUserModal] = useState(false);

  const { mutate: companyCommentToggle } = useCompanyCommentToggle({ companyId });
  const { mutate: deleteCompanyComment } = useDeleteCompanyComment({ companyId });

  return (
    <>
      <div>
        <div css={cssObj.titleWrapper}>
          <span css={cssObj.name}>{uploader.nickname}</span>
          <span css={cssObj.time}>{getCommunityDateFormat(time)}</span>
          {isMyComment ? (
            <button
              type="button"
              onClick={() => {
                setDeleteModal(true);
              }}
            >
              <FiTrash2 css={cssObj.submenuIcon} />
            </button>
          ) : (
            <DropDown
              customTitle={<FiMoreVertical css={cssObj.submenuIcon} />}
              menu={{
                closeAfterClickEvent: true,
                options: [
                  {
                    content: "신고하기",
                    onClick: () => {
                      setReportUserModal(true);
                    },
                  },
                  {
                    content: "차단하기",
                    onClick: () => {
                      setBlockUserModal(true);
                    },
                  },
                ],
              }}
            />
          )}
        </div>
        <div css={cssObj.textBox}>
          <p css={cssObj.comment}>{comment}</p>
          <div css={cssObj.reactionWrapper}>
            <div css={cssObj.thumbsUpWrapper(thumbsUp.isClicked)}>
              <button type="button">
                <FiThumbsUp
                  onClick={() => {
                    if (companyId && commentId) {
                      companyCommentToggle({ type: "likes", companyId, commentId });
                    }
                  }}
                />
              </button>
              <span>{thumbsUp.count}</span>
            </div>
            <div css={cssObj.thumbsDownWrapper(thumbsDown.isClicked)}>
              <button type="button">
                <FiThumbsDown
                  onClick={() => {
                    if (companyId && commentId) {
                      companyCommentToggle({ type: "dislikes", companyId, commentId });
                    }
                  }}
                />
              </button>
              <span>{thumbsDown.count}</span>
            </div>
          </div>
        </div>
      </div>
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
              }
            },
          }}
        />
      )}
      {blockUserModal && uploader.id && (
        <BlockUserModal
          companyId={companyId}
          userId={uploader.id}
          cancelHandler={() => {
            setBlockUserModal(false);
          }}
        />
      )}
      {reportUserModal && uploader.id && (
        <ReportUserModal
          userId={uploader.id}
          closeHandler={() => {
            setReportUserModal(false);
          }}
        />
      )}
    </>
  );
};
