import { FunctionComponent } from "react";
import Link from "next/link";
import { AiOutlineLike, AiOutlineMessage, AiOutlineEye } from "react-icons/ai";

// import { useModal } from "@recoil/hook/modal";
import { COMMUNITY_POSTING_DETAIL_URL } from "shared-constant/internalURL";
import { dateConverter } from "shared-util/date";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { useUserInfo } from "shared-api/auth";

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
  popularBadge,
  viewBadge,
  badgeBox,
} from "./style";
import { PostingCardProps, PostingCardSkeleton } from "./type";

export const PostingCard: FunctionComponent<PostingCardProps | PostingCardSkeleton> = ({ postingData, isSkeleton }) => {
  const { data: userInfoData } = useUserInfo();

  if (isSkeleton || postingData === undefined) {
    return (
      <div css={postingCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }
  const { createdTime } = postingData;
  const postingDay = new Date(createdTime);
  const today = new Date();

  const rangeOfTime = today.getTime() - postingDay.getTime();
  const rangeOfDay = Math.round(rangeOfTime / 1000 / 60 / 60 / 24);
  const isBetweenTwoWeek = Boolean(rangeOfDay <= 14);

  const isHotLikePostion = isBetweenTwoWeek && postingData.like >= 10;
  const isHotViewPosting = isBetweenTwoWeek && postingData.view >= 100;

  const { year, month, date } = dateConverter(postingData.createdTime);

  const isMyPosting = userInfoData?.nickname === postingData.nickname;

  return (
    <Link href={`${COMMUNITY_POSTING_DETAIL_URL}/${postingData.id}${window.location.search}`} passHref>
      <a css={cardContainer}>
        <article>
          {isHotLikePostion ||
            (isHotViewPosting && (
              <ul css={badgeBox}>
                {isHotLikePostion && <li css={popularBadge}>#추천폭발</li>}
                {isHotViewPosting && <li css={viewBadge}>#조회수급상승</li>}
              </ul>
            ))}

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
                <ProfileImg imageStr={userInfoData ? userInfoData.image : "default"} size="S" />
              </div>
              <p css={writerNickname(isMyPosting)}>{postingData.nickname || "탈퇴한 회원"}</p>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};
