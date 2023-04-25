import { FunctionComponent, useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useRouter } from "next/router";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { useJobDetail } from "shared-api/job";
import { dDayCalculator } from "shared-util";
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
  currentPositionId,
  setCurrentPositionId,
}) => {
  const router = useRouter();
  const { jobId } = router.query;
  const [defaultCardCount, setDefaultCardCount] = useState(5);
  const [isStatic, setIsStatic] = useState<boolean>(true);

  const { data: jobDetailData } = useJobDetail({ id: Number(jobId), isStatic });

  const handleMoreCardCount = () => {
    if (jobDetailData) {
      setDefaultCardCount(jobDetailData.positionArr.length);
    }
  };

  const handleLessCardCount = () => {
    setDefaultCardCount(5);
  };

  useEffect(() => {
    setIsStatic(false);
  }, []);

  if (isSkeleton || !jobDetailData || setCurrentPositionId === undefined || currentPositionId === undefined) {
    return (
      <div>
        <div css={skeletonContainer}>
          <SkeletonBox />
        </div>
        <section css={positionContainer}>
          <div css={positionTitleSkeleton}>
            <SkeletonBox />
          </div>
        </section>
      </div>
    );
  }

  const isDdayEnd = dDayCalculator(jobDetailData.endTime) === "만료";

  return (
    <div>
      <Header jobDetailData={jobDetailData} />

      <section css={positionContainer}>
        <p css={positionTitle}>
          채용중인 직무<span>{jobDetailData.positionArr.length}</span>
        </p>
        <div css={cardContainer}>
          {jobDetailData.positionArr.map((position, index) => {
            return (
              index < defaultCardCount && (
                <PositionCard
                  isDdayEnd={isDdayEnd}
                  currentPositionId={currentPositionId}
                  setCurrentPositionId={() => {
                    setCurrentPositionId(index);
                  }}
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
