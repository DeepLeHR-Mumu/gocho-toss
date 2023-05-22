import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { useJobDetail } from "shared-api/job";
import { Header } from "./component/header";

import { HeaderPartProps, HeaderPartSkeleton } from "./type";
import { positionContainer, skeletonContainer, positionTitleSkeleton } from "./style";

export const HeaderPart: FunctionComponent<HeaderPartProps | HeaderPartSkeleton> = ({
  isSkeleton,
  currentPositionId,
  setCurrentPositionId,
}) => {
  const router = useRouter();
  const { jobId } = router.query;
  const [isStatic, setIsStatic] = useState<boolean>(true);

  const { data: jobDetailData } = useJobDetail({ id: Number(jobId), isStatic });

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

  return <Header jobDetailData={jobDetailData} />;
};
