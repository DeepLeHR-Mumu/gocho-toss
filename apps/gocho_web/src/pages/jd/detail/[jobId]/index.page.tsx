import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useJobDetail } from "@api/job";
import { SkeletonBox } from "@component/common/atom/skeletonBox";
import { Layout } from "@component/layout";

import { PositionObjDef } from "./type";
import {
  HeaderPart,
  ADPart,
  AsidePart,
  DetailSupportPart,
  DetailWorkPart,
  DetailPreferencePart,
  ReceptInfoPart,
} from "../part";

import { wrapper, flexBox, container, containerSkeleton } from "./style";

const JobsDetail: NextPage = () => {
  const [currentPositionId, setCurrentPositionId] = useState<number | null>(
    null
  );
  const [freshPosition, setFreshPosition] = useState<PositionObjDef | null>(
    null
  );

  const router = useRouter();
  const { jobId } = router.query;

  const { data: jobDetailData, isLoading } = useJobDetail({
    id: Number(jobId),
  });

  useEffect(() => {
    if (!jobDetailData || !currentPositionId) {
      return;
    }
    const filterPosition = jobDetailData.positionArr.find((position) => {
      return position.id === currentPositionId;
    });

    if (filterPosition) {
      setFreshPosition(filterPosition);
    }
  }, [currentPositionId, jobDetailData]);

  if (isLoading || !jobDetailData) {
    return (
      <main css={wrapper}>
        <Layout>
          <HeaderPart isSkeleton />
          <div css={flexBox}>
            <section css={containerSkeleton}>
              <SkeletonBox />
            </section>
            <AsidePart isSkeleton />
          </div>
        </Layout>
      </main>
    );
  }

  return (
    <main css={wrapper}>
      <Layout>
        <HeaderPart
          jobDetailData={jobDetailData}
          setCurrentPositionId={setCurrentPositionId}
          currentPositionId={currentPositionId}
        />
        <div css={flexBox}>
          {freshPosition && (
            <section css={container}>
              <DetailSupportPart freshPosition={freshPosition} />
              <DetailWorkPart freshPosition={freshPosition} />
              <DetailPreferencePart freshPosition={freshPosition} />
            </section>
          )}
          <AsidePart companyId={jobDetailData.company.companyId} />
        </div>
        <ReceptInfoPart jobDetailData={jobDetailData} />
        <ADPart />
      </Layout>
    </main>
  );
};

export default JobsDetail;
