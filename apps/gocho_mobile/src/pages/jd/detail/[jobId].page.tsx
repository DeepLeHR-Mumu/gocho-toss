import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { getJobDetail, useJobDetail } from "shared-api/job";
import { useAddJobViewCount } from "shared-api/viewCount";
import { useCompanyCommentArr } from "shared-api/company";
import { jobDetailKeyObj } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";
import { jdDetailFunnelEvent } from "shared-ga/jd";

import { DetailComment } from "@component/common/organisms/detailComment";

import { TopMenu } from "./component/topMenu";
import { BottomMenu } from "./component/bottomMenu";
import { PageHead } from "./pageHead";
import { HeaderPart, DetailSupportPart, DetailWorkPart, DetailPreferencePart, ReceptInfoPart } from "./part";
import { wrapper, flexBox, container, containerSkeleton } from "./style";

const JobsDetail: NextPage = () => {
  const [currentPositionId, setCurrentPositionId] = useState<number>(0);
  const [openComment, setOpenComment] = useState<boolean>(false);
  const [isStatic, setIsStatic] = useState<boolean>(true);
  const isFirstRender = useRef(true);

  const router = useRouter();
  const { jobId } = router.query;

  const { mutate: addViewCount } = useAddJobViewCount();
  const { data: jobDetailData, isLoading } = useJobDetail({
    id: Number(jobId),
    isStatic,
  });

  const { data: companyCommentData } = useCompanyCommentArr({
    companyId: Number(jobDetailData?.company.id),
  });

  useEffect(() => {
    setIsStatic(false);
  }, []);

  useEffect(() => {
    if (jobDetailData) jdDetailFunnelEvent(jobDetailData.id);
  }, [jobDetailData]);

  useEffect(() => {
    if (jobId && isFirstRender.current) {
      isFirstRender.current = false;
      addViewCount({ jobId: Number(jobId) });
    }
  }, [addViewCount, jobId]);

  if (!jobDetailData || isLoading || router.isFallback) {
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

  const commentData = {
    companyId: jobDetailData.company.id,
    name: jobDetailData.company.name,
    title: jobDetailData.title,
    logoUrl: jobDetailData.company.logoUrl,
  };

  return (
    <main css={wrapper}>
      <PageHead
        option={{
          id: jobDetailData.id,
          title: jobDetailData.title,
          companyName: jobDetailData.company.name,
          rotation: jobDetailData.positionArr[0].rotationArr[0],
          pay: jobDetailData.positionArr[0].payArr && jobDetailData.positionArr[0].payArr[0],
          place: jobDetailData.positionArr[0].place.addressArr && jobDetailData.positionArr[0].place.addressArr[0],
          possibleEdu: jobDetailData.positionArr[0].possibleEdu.summary,
          taskDetail: jobDetailData.positionArr[0].taskDetailArr[0],
        }}
      />
      <InvisibleH1 title={`[${jobDetailData.company.name}]${jobDetailData.title} - 고초대졸닷컴`} />

      <InvisibleH2 title={jobDetailData.title} />
      <TopMenu title={jobDetailData.title} id={jobDetailData.id} />
      <HeaderPart setCurrentPositionId={setCurrentPositionId} currentPositionId={currentPositionId} />

      <div css={flexBox}>
        <section css={container}>
          <DetailSupportPart freshPosition={jobDetailData.positionArr[currentPositionId]} />
          <DetailWorkPart freshPosition={jobDetailData.positionArr[currentPositionId]} />
          <DetailPreferencePart freshPosition={jobDetailData.positionArr[currentPositionId]} />
        </section>
      </div>
      <ReceptInfoPart jobDetailData={jobDetailData} />
      {openComment && companyCommentData && <DetailComment detailData={commentData} setOpenComment={setOpenComment} />}
      <BottomMenu jobDetailData={jobDetailData} setOpenComment={setOpenComment} />
    </main>
  );
};

export default JobsDetail;

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const queryClient = new QueryClient();

  if (Number.isNaN(Number(params?.jobId))) {
    return { notFound: true };
  }

  if (params)
    await queryClient.prefetchQuery(jobDetailKeyObj.detail({ id: Number(params.jobId), isStatic: true }), getJobDetail);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? 600 : 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
