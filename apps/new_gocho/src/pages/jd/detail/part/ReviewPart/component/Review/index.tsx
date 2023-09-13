import { getCommunityDateFormat } from "shared-util";

import { CommentThumbs, BlockReportDropDown, DeleteComment } from "@/components";

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
}: ReviewProps) => (
    <div>
      <div css={cssObj.titleWrapper}>
        <span css={cssObj.name}>{uploader.nickname}</span>
        <span css={cssObj.time}>{getCommunityDateFormat(time)}</span>
        {isMyComment ? (
          <DeleteComment size={1} color="gray" companyId={companyId} commentId={commentId} />
        ) : (
          <BlockReportDropDown size={1} companyId={companyId} uploaderId={uploader.id} />
        )}
      </div>
      <div css={cssObj.textBox}>
        <p css={cssObj.comment}>{comment}</p>
        <div css={cssObj.reactionWrapper}>
          <CommentThumbs type="likes" size="small" companyId={companyId} commentId={commentId} {...thumbsUp} />
          <CommentThumbs type="dislikes" size="small" companyId={companyId} commentId={commentId} {...thumbsDown} />
        </div>
      </div>
    </div>
  );
