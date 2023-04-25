import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { MYPAGE_URL } from "shared-constant";
import { BookmarkedJobCard } from "shared-ui/card/bookmarkedJobCard";
import { useUserJobBookmarkArr } from "shared-api/job";
import { useUserProfile } from "shared-api/auth";
import { dummyArrCreator } from "shared-util";

import { BottomPagination } from "@/component/common/molecule/bottomPagination";

import { cardListContainer, skeletonContainer, desc, warningCSS, bottomPaginationBox } from "./style";

export const BookmarkJobArr: FunctionComponent = () => {
  const router = useRouter();
  const { data: userData } = useUserProfile();
  const { data: userJobBookmarkArrData } = useUserJobBookmarkArr({
    userId: userData?.id,
    page: Number(router.query.page),
  });

  if (!userData) {
    return (
      <div css={skeletonContainer}>
        {dummyArrCreator(4).map((value) => {
          return <BookmarkedJobCard isSkeleton key={`BookmarkedJobCardSkeleton${value}`} />;
        })}
      </div>
    );
  }

  if (!userJobBookmarkArrData) {
    return (
      <div css={cardListContainer}>
        <p css={warningCSS}>공고 북마크를 이용하시면 추천공고가 더 정교해져요 😳</p>
      </div>
    );
  }

  return (
    <div css={cardListContainer}>
      {userJobBookmarkArrData.pageResult.totalElements === 0 && (
        <p css={desc}>{userData.nickname} 님! 북마크를 이용하시면 추천공고가 더 정교해져요 😳</p>
      )}

      {userJobBookmarkArrData.userJobBookmarkArr.map((data) => {
        return <BookmarkedJobCard isMobile={false} key={data.id} jobData={data} isBookmarked />;
      })}

      <div css={bottomPaginationBox}>
        <BottomPagination totalPage={userJobBookmarkArrData.pageResult.totalPages} linkObj={{ pathname: MYPAGE_URL }} />
      </div>
    </div>
  );
};
