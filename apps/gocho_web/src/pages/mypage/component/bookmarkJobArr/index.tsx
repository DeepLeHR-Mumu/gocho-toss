import { FunctionComponent } from "react";

import { JobCard } from "@pages/mypage/part/bookmarkPart/jobCard";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { useUserInfo } from "shared-api/auth";

import { cardListContainer, skeletonContainer, desc } from "./style";

export const BookmarkJobArr: FunctionComponent = () => {
  const { data: userInfoData } = useUserInfo();

  const {
    data: userJobBookmarkArrData,
    isLoading,
    isError,
  } = useUserJobBookmarkArr({
    userId: userInfoData?.id,
  });

  // LATER 데이터 없을때 처리가 안된듯 - 테스트 코드에도 데이터 없을때 없다고 표시되는지 코드 추가하기
  if (!userInfoData || !userJobBookmarkArrData || isError || isLoading) {
    return (
      <div css={skeletonContainer}>
        <SkeletonBox />
      </div>
    );
  }

  return (
    <div css={cardListContainer}>
      {userJobBookmarkArrData.length === 0 && (
        <p css={desc}>{userInfoData.nickname} 님! 북마크를 이용하시면 추천공고가 더 정교해져요 😳</p>
      )}
      {userJobBookmarkArrData.map((job) => {
        return <JobCard key={job.id} jobData={job} />;
      })}
    </div>
  );
};
