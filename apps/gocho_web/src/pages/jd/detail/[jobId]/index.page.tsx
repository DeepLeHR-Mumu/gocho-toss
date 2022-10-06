import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { META_JD_DETAIL } from "shared-constant/meta";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { useJobDetail } from "shared-api/job";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { Layout } from "@component/layout";
import { DetailComment } from "@component/global/detailComment";
import { useUserInfo } from "shared-api/auth";
import { useAddJobViewCount } from "shared-api/viewCount";

import { PositionObjDef } from "./type";
import { HeaderPart, DetailSupportPart, DetailWorkPart, DetailPreferencePart, ReceptInfoPart } from "../part";

import { wrapper, flexBox, container, containerSkeleton } from "./style";

const JobsDetail: NextPage = () => {
  const [currentPositionId, setCurrentPositionId] = useState<number | null>(null);
  const [freshPosition, setFreshPosition] = useState<PositionObjDef | null>(null);

  const { data: userData } = useUserInfo();
  const { mutate: addViewCount } = useAddJobViewCount();

  const router = useRouter();
  const { jobId } = router.query;

  const { data: jobDetailData, isLoading } = useJobDetail({
    id: Number(jobId),
  });

  useEffect(() => {
    const jobViewStr = sessionStorage.getItem("jobViewArr");
    if (!jobDetailData) return;

    const isViewed = jobViewStr?.includes(String(jobDetailData?.id));
    if (isViewed) return;

    if (jobViewStr) {
      const jobViewArr: number[] = JSON.parse(jobViewStr);
      jobViewArr.push(jobDetailData.id);
      sessionStorage.setItem("jobViewArr", JSON.stringify(jobViewArr));
      addViewCount({ elemId: jobDetailData.id });
      return;
    }
    if (!isViewed) {
      sessionStorage.setItem("jobViewArr", JSON.stringify([jobDetailData.id]));
      addViewCount({ elemId: jobDetailData.id });
    }
  }, [jobDetailData, addViewCount]);

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

  if (!jobDetailData || isLoading) {
    return (
      <main css={wrapper}>
        <Layout>
          <HeaderPart isSkeleton />
          <div css={flexBox}>
            <section css={containerSkeleton}>
              <SkeletonBox />
            </section>
            <DetailComment jdId={null} detailData={null} />
          </div>
        </Layout>
      </main>
    );
  }



  const commentData = {
    companyId: jobDetailData.company.companyId,
    name: jobDetailData.company.name,
    logoUrl: jobDetailData.company.logoUrl,
  };

  return (
    <main css={wrapper}>
      <MetaHead
        jdDetail={{
          companyName: jobDetailData.company.name,
          jdTitle: jobDetailData.title,
          rotation: jobDetailData.positionArr[0].rotationArr[0],
          taskDetail: jobDetailData.positionArr[0].taskDetailArr[0],
          pay: jobDetailData.positionArr[0].payArr && jobDetailData.positionArr[0].payArr[0],
          place: jobDetailData.positionArr[0].placeArr[0],
          possibleEdu: jobDetailData.positionArr[0].possibleEdu.summary,
        }}
        metaData={META_JD_DETAIL}
      />

      <Layout>
        <InvisibleH2 title={jobDetailData.title} />
        <HeaderPart
          jobDetailData={jobDetailData}
          setCurrentPositionId={setCurrentPositionId}
          currentPositionId={currentPositionId}
          userId={userData?.id}
        />
        <div css={flexBox}>
          {freshPosition && (
            <section css={container}>
              <DetailSupportPart freshPosition={freshPosition} />
              <DetailWorkPart freshPosition={freshPosition} />
              <DetailPreferencePart freshPosition={freshPosition} />
            </section>
          )}
          <DetailComment jdId={currentPositionId} detailData={commentData} />
        </div>
        <ReceptInfoPart jobDetailData={jobDetailData} />
      </Layout>
    </main>
  );
};

export default JobsDetail;
