import { FunctionComponent, useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { useUserInfo } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { PositionCard } from "./component/positionCard";
import { Header } from "./component/header";

import { HeaderPartProps, HeaderPartSkeleton } from "./type";
import {
  positionContainer,
  positionTitle,
  cardContainer,
  moreButton,
  skeletonContainer,
  positionTitleSkeleton,
} from "./style";

export const HeaderPart: FunctionComponent<HeaderPartProps | HeaderPartSkeleton> = ({
  isSkeleton,
  jobDetailData,
  currentPositionId,
  setCurrentPositionId,
}) => {
  const [defaultCardCount, setDefaultCardCount] = useState(5);

  const { data: userData } = useUserInfo();
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });

  useEffect(() => {
    if (setCurrentPositionId) {
      setCurrentPositionId(jobDetailData.positionArr[0].id);
    }
  }, [setCurrentPositionId, jobDetailData]);

  const handleMoreCardCount = () => {
    if (jobDetailData) {
      setDefaultCardCount(jobDetailData.positionArr.length);
    }
  };

  const handleLessCardCount = () => {
    setDefaultCardCount(5);
  };

  if (isSkeleton || !jobDetailData) {
    return (
      <div>
        <div css={skeletonContainer}>
          <SkeletonBox />
        </div>
        <section css={positionContainer}>
          <p css={positionTitleSkeleton}>
            <SkeletonBox />
          </p>
          <div css={cardContainer}>
            <PositionCard isSkeleton />
          </div>
        </section>
      </div>
    );
  }

  const isBookmarked = Boolean(
    userJobBookmarkArr?.some((job) => {
      return job.id === jobDetailData.id;
    })
  );

  return (
    <div>
      <Header jobDetailData={jobDetailData} isBookmarked={isBookmarked} userId={userData?.id} />

      <section css={positionContainer}>
        <p css={positionTitle}>
          채용중인 직무<span>{jobDetailData.positionArr.length}</span>
        </p>
        <div css={cardContainer}>
          {jobDetailData.positionArr.map((position, index) => {
            return (
              index < defaultCardCount && (
                <PositionCard
                  currentPositionId={currentPositionId}
                  setCurrentPositionId={setCurrentPositionId}
                  position={position}
                  key={position.id}
                />
              )
            );
          })}

          {jobDetailData.positionArr.length > 5 &&
            (defaultCardCount === jobDetailData.positionArr.length ? (
              <button css={moreButton} type="button" onClick={handleLessCardCount} aria-label="공고리스트 줄이기">
                줄이기 <FiChevronUp />
              </button>
            ) : (
              <button css={moreButton} type="button" onClick={handleMoreCardCount} aria-label="공고리스트 더보기">
                더보기 <FiChevronDown />
              </button>
            ))}
        </div>
      </section>
    </div>
  );
};
