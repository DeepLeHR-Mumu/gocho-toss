import { FunctionComponent, useEffect, useState, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { useUserInfo } from "shared-api/auth";
import { dDayCalculator } from "shared-util/date";
import { PositionCard } from "./component/positionCard";
import { HeaderFix } from "./component/headerFix";
import { Header } from "./component/header";

import { HeaderPartProps, HeaderPartSkeleton } from "./type";
import {
  positionContainer,
  positionTitle,
  cardContainer,
  moreButton,
  observeCSS,
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
  const [isOverlap, setIsOverlap] = useState(true);
  const observeRef = useRef<HTMLDivElement | null>(null);

  const { data: userData } = useUserInfo();

  useEffect(() => {
    if (setCurrentPositionId) {
      setCurrentPositionId(jobDetailData.positionArr[0].id);
    }
  }, [setCurrentPositionId, jobDetailData]);

  useEffect(() => {
    if (observeRef.current) {
      const observer = new IntersectionObserver(
        (entry) => {
          setIsOverlap(entry[0].isIntersecting);
        },
        { threshold: 0.2 }
      );
      observer.observe(observeRef.current);
    }
  }, [currentPositionId]);

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
          <div css={positionTitleSkeleton}>
            <SkeletonBox />
          </div>
          <div css={cardContainer}>
            <PositionCard isSkeleton />
          </div>
        </section>
      </div>
    );
  }

  const isDdayEnd = dDayCalculator(jobDetailData.endTime) === "만료";

  return (
    <div>
      {isOverlap ? (
        <Header jobDetailData={jobDetailData} userId={userData?.id} isDdayEnd={isDdayEnd} />
      ) : (
        <HeaderFix jobDetailData={jobDetailData} userId={userData?.id} isDdayEnd={isDdayEnd} />
      )}

      <div css={observeCSS} ref={observeRef} />

      <section css={positionContainer}>
        <p css={positionTitle(isDdayEnd)}>
          채용중인 직무<span>{jobDetailData.positionArr.length}</span>
        </p>
        <div css={cardContainer}>
          {jobDetailData.positionArr.map((position, index) => {
            return (
              index < defaultCardCount && (
                <PositionCard
                  isDdayEnd={isDdayEnd}
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
