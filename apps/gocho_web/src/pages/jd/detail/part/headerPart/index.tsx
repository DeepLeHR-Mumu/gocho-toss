import { FunctionComponent, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { useJobDetail } from "shared-api/job";
import { dDayCalculator } from "shared-util";

import { HeaderFix } from "./component/headerFix";
import { Header } from "./component/header";

import { HeaderPartProps, HeaderPartSkeleton } from "./type";
import { positionContainer, observeCSS, skeletonContainer, positionTitleSkeleton } from "./style";

export const HeaderPart: FunctionComponent<HeaderPartProps | HeaderPartSkeleton> = ({
  isSkeleton,
  currentPositionId,
  setCurrentPositionId,
}) => {
  const router = useRouter();
  const { jobId } = router.query;
  const [isStatic, setIsStatic] = useState<boolean>(true);
  const [isOverlap, setIsOverlap] = useState(true);
  const observeRef = useRef<HTMLDivElement | null>(null);
  const { data: jobDetailData } = useJobDetail({ id: Number(jobId), isStatic });

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
      {isOverlap ? (
        <Header jobDetailData={jobDetailData} isDdayEnd={isDdayEnd} />
      ) : (
        <HeaderFix jobDetailData={jobDetailData} isDdayEnd={isDdayEnd} />
      )}
      <div css={observeCSS} ref={observeRef} />
    </div>
  );
};
