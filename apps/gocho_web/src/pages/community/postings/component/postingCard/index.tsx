import { FunctionComponent } from "react";
import { AiOutlineLike, AiOutlineMessage, AiOutlineEye } from "react-icons/ai";

// import { useModal } from "@recoil/hook/modal";
import { dateConverter } from "shared-util/date";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import {
  cardContainer,
  titleCSS,
  bodyCSS,
  infoContainer,
  infoBox,
  info,
  numInfo,
  writerProfile,
  writerProfileImage,
  writerNickname,
  postingCardSkeleton,
} from "./style";
import { PostingCardProps, PostingCardSkeleton } from "./type";

export const PostingCard: FunctionComponent<PostingCardProps | PostingCardSkeleton> = ({
  postingData,
  isSkeleton,
  modalOpen,
}) => {
  if (isSkeleton || postingData === undefined) {
    return (
      <div css={postingCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const { year, month, date } = dateConverter(postingData.createdTime);
  return (
    <button type="button" css={cardContainer} onClick={modalOpen}>
      <article>
        <strong css={titleCSS}>{postingData.title}</strong>
        <p css={bodyCSS}>{postingData.description}</p>
        <div css={infoContainer}>
          <ul css={infoBox}>
            <li css={info}>{postingData.type}</li>
            <li css={info}>{`${year}.${month}.${date}`}</li>

            <li css={numInfo}>
              <AiOutlineLike /> {postingData.like.toLocaleString("Ko-KR")}
            </li>

            <li css={numInfo}>
              <AiOutlineMessage />
              {postingData.commentCount.toLocaleString("Ko-KR")}
            </li>

            <li css={numInfo}>
              <AiOutlineEye /> {postingData.view.toLocaleString("Ko-KR")}
            </li>
          </ul>
          <div css={writerProfile}>
            <div css={writerProfileImage}>
              <ProfileImg imageStr="default_work" size="S" />
            </div>
            <p css={writerNickname}>{postingData.nickname}</p>
          </div>
        </div>
      </article>
    </button>
  );
};
