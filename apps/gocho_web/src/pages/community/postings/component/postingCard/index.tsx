import { FunctionComponent } from "react";
import { AiOutlineLike, AiOutlineMessage, AiOutlineEye } from "react-icons/ai";

// import { useModal } from "@recoil/hook/modal";
import { dateConverter } from "@util/date";
import { ProfileImg } from "@component/common/atom/profileImg";
import { SkeletonBox } from "@component/common/atom/skeletonBox";

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

export const PostingCard: FunctionComponent<
  PostingCardProps | PostingCardSkeleton
> = ({ postingData, isSkeleton, modalOpen }) => {
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
        <h2 css={titleCSS}>{postingData.title}</h2>
        <p css={bodyCSS}>{postingData.description}</p>
        <div css={infoContainer}>
          <div css={infoBox}>
            <p css={info}>{postingData.type}</p>
            <p css={info}>{`${year}/${month}/${date}`}</p>
            <AiOutlineLike />
            <p css={numInfo}>{postingData.like}</p>
            <AiOutlineMessage />
            <p css={numInfo}>{postingData.commentCount}</p>
            <AiOutlineEye />
            <p css={numInfo}>{postingData.view}</p>
          </div>
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
