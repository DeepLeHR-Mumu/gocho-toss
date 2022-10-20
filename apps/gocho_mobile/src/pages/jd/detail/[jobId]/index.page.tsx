import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { META_JD_DETAIL } from "shared-constant/meta";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { useJobDetail } from "shared-api/job";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { useUserInfo } from "shared-api/auth";
import { useAddJobViewCount } from "shared-api/viewCount";
import { jdDetailFunnelEvent } from "shared-ga/jd";

import { DetailComment } from "@component/common/organisms/detailComment";
import { TopMenu } from "../component/topMenu";
import { BottomMenu } from "../component/bottomMenu";
import { PositionObjDef } from "./type";
import { HeaderPart, DetailSupportPart, DetailWorkPart, DetailPreferencePart, ReceptInfoPart } from "../part";

import { wrapper, flexBox, container, containerSkeleton } from "./style";

const JobsDetail: NextPage = () => {
  const [currentPositionId, setCurrentPositionId] = useState<number | null>(null);
  const [freshPosition, setFreshPosition] = useState<PositionObjDef | null>(null);
  const [openComment, setOpenComment] = useState<boolean>(false);

  const { data: userData } = useUserInfo();
  const { data: userJobBookmarkArr, refetch } = useUserJobBookmarkArr({ userId: userData?.id });
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

  useEffect(() => {
    if (jobDetailData) jdDetailFunnelEvent(jobDetailData.id);
  }, [jobDetailData]);

  if (!jobDetailData || isLoading) {
    return (
      <main css={wrapper}>
        <HeaderPart isSkeleton />
        <div css={flexBox}>
          <section css={containerSkeleton}>
            <SkeletonBox />
          </section>
        </div>
      </main>
    );
  }

  const isBookmarked = Boolean(
    userJobBookmarkArr?.some((job) => {
      return job.id === jobDetailData.id;
    })
  );

  const commentData = {
    companyId: jobDetailData.company.companyId,
    name: jobDetailData.company.name,
    title: jobDetailData.title,
    logoUrl: jobDetailData.company.logoUrl,
  };

  const placeDetail = () => {
    const addrObject = jobDetailData.positionArr[0].place;
    if (addrObject.addressArr) return addrObject.addressArr[0];
    if (addrObject.factoryArr) return addrObject.factoryArr[0].factoryName;
    if (addrObject.etc) return addrObject.etc;
    return addrObject.type;
  };

  return (
    <main css={wrapper}>
      <MetaHead
        jdDetail={{
          id: jobDetailData.id,
          companyName: jobDetailData.company.name,
          jdTitle: jobDetailData.title,
          rotation: jobDetailData.positionArr[0].rotationArr[0],
          taskDetail: jobDetailData.positionArr[0].taskDetailArr[0],
          pay: jobDetailData.positionArr[0].payArr && jobDetailData.positionArr[0].payArr[0],
          place: placeDetail(),
          possibleEdu: jobDetailData.positionArr[0].possibleEdu.summary,
        }}
        metaData={META_JD_DETAIL}
      />

      <InvisibleH2 title={jobDetailData.title} />
      <TopMenu title={jobDetailData.title} id={jobDetailData.id} />
      <HeaderPart
        setCurrentPositionId={setCurrentPositionId}
        currentPositionId={currentPositionId}
        isBookmarked={isBookmarked}
        userId={userData?.id}
        refetchUserBookmark={refetch}
      />
      <div css={flexBox}>
        {freshPosition && (
          <section css={container}>
            <DetailSupportPart freshPosition={freshPosition} />
            <DetailWorkPart freshPosition={freshPosition} />
            <DetailPreferencePart freshPosition={freshPosition} />
          </section>
        )}
      </div>
      <ReceptInfoPart jobDetailData={jobDetailData} />
      {openComment && (
        <DetailComment jdId={jobDetailData.id} detailData={commentData} setOpenComment={setOpenComment} />
      )}
      <BottomMenu
        jobDetailData={jobDetailData}
        isBookmarked={isBookmarked}
        userId={userData?.id}
        setOpenComment={setOpenComment}
      />
    </main>
  );
};

export default JobsDetail;
