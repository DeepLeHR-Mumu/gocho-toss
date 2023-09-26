import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

import { Profile } from "shared-ui/deeple-ds";
import { getCommunityDateFormat } from "shared-util";

import { CommentThumbs, BlockReportDropDown, DeleteComment } from "@/components";

import { INTERNAL_URL } from "@/pages/constants";
import { ReviewProps } from "./type";
import { cssObj } from "./style";

export const Review = ({ companyId, comment, isMyComment }: ReviewProps) => (
  <div css={cssObj.wrapper}>
    <div css={cssObj.profileWrapper}>
      <Profile src={comment.uploader.image} size={40} altText={`${comment.uploader.nickname} 유저 로고`} />
      <h3 css={cssObj.nickname}>{comment.uploader.nickname}</h3>
      <span css={cssObj.time}>{getCommunityDateFormat(comment.created_time)}</span>
      {isMyComment ? (
        <DeleteComment size={1.25} color="red" companyId={companyId} commentId={comment.id} />
      ) : (
        <BlockReportDropDown size={1.25} companyId={companyId} uploaderId={comment.uploader.id} />
      )}
    </div>
    <div css={cssObj.commentWrapper}>
      {comment.jd && (
        <Link href={`${INTERNAL_URL.JD_DETAIL}/${comment.jd.id}`} css={cssObj.jdLink}>
          {comment.jd.title} <FiChevronRight css={cssObj.rightIcon} />
        </Link>
      )}
      <p css={cssObj.comment}>{comment.description}</p>
      <div css={cssObj.reactionWrapper}>
        <CommentThumbs
          type="likes"
          size="large"
          companyId={companyId}
          commentId={comment.id}
          count={comment.like}
          isClicked={comment.is_liked}
        />
        <CommentThumbs
          type="dislikes"
          size="large"
          companyId={companyId}
          commentId={comment.id}
          count={comment.dislike}
          isClicked={comment.is_disliked}
        />
      </div>
    </div>
  </div>
);
