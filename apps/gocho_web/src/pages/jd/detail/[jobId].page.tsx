import { NextPage, GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "@tanstack/react-query";

import logoSrc from "shared-image/global/deepLeLogo/largeColor.svg";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { getJobDetail, useJobDetail } from "shared-api/job";
import { useAddJobViewCount } from "shared-api/viewCount";
import { useCompanyCommentArr } from "shared-api/company";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { jobDetailKeyObj } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";
import { useUserProfile } from "shared-api/auth";
import { jdDetailFunnelEvent } from "shared-ga/jd";

import { Layout } from "@component/layout";
import { DetailComment } from "@component/global/detailComment";

import { HeaderPart, DetailSupportPart, DetailWorkPart, DetailPreferencePart, ReceptInfoPart } from "./part";
import { PageHead } from "./pageHead";

import { wrapper, flexBox, container, containerSkeleton, logoImageBox } from "./style";

const JobsDetail: NextPage = () => {
  const [currentPositionId, setCurrentPositionId] = useState<number>(0);
  const [isStatic, setIsStatic] = useState<boolean>(true);
  const isFirstRender = useRef(true);

  const { data: userData } = useUserProfile();
  const { mutate: addViewCount } = useAddJobViewCount();

  const router = useRouter();
  const { jobId } = router.query;

  const { data: jobDetailData } = useJobDetail({
    id: Number(jobId),
    isStatic,
  });

  const { data: companyCommentData } = useCompanyCommentArr({
    companyId: Number(jobDetailData?.company.id),
  });

  useEffect(() => {
    if (jobId && isFirstRender.current) {
      isFirstRender.current = false;
      addViewCount({ jobId: Number(jobId) });
    }
  }, [addViewCount, jobId]);

  useEffect(() => {
    setIsStatic(false);
  }, []);

  useEffect(() => {
    if (jobDetailData) jdDetailFunnelEvent(jobDetailData.id);
  }, [jobDetailData]);

  if (!jobDetailData || router.isFallback) {
    return (
      <main css={wrapper}>
        <Layout>
          <HeaderPart isSkeleton />
          <div css={flexBox}>
            <section css={containerSkeleton}>
              <SkeletonBox />
            </section>
            {companyCommentData && (
              <DetailComment
                company={companyCommentData.company}
                commentDataArr={companyCommentData.commentArr}
                userInfo={userData}
              />
            )}
          </div>
        </Layout>
      </main>
    );
  }

  return (
    <main css={wrapper}>
      <PageHead
        option={{
          id: jobDetailData.id,
          title: jobDetailData.title,
          companyName: jobDetailData.company.name,
          rotation: jobDetailData.rotationArr[0],
          pay: jobDetailData.payArr && jobDetailData.payArr[0],
          place: jobDetailData.place.addressArr && jobDetailData.place.addressArr[0],
          possibleEdu: jobDetailData.possibleEdu.summary,
          taskDetail: jobDetailData.taskDetailArr[0],
        }}
      />
      <InvisibleH1 title={`[${jobDetailData.company.name}]${jobDetailData.title} - 고초대졸닷컴`} />

      <Layout>
        <InvisibleH2 title={jobDetailData.title} />
        <HeaderPart
          setCurrentPositionId={setCurrentPositionId}
          currentPositionId={currentPositionId}
          userId={userData?.id}
        />
        <div css={flexBox}>
          <section css={container}>
            <div css={logoImageBox}>
              <Image src={logoSrc} alt="" fill />
            </div>
            <DetailSupportPart freshPosition={jobDetailData} />
            <DetailWorkPart freshPosition={jobDetailData} />
            <DetailPreferencePart freshPosition={jobDetailData} />
          </section>
          {!userData && !companyCommentData && <DetailComment company={jobDetailData.company} />}
          {companyCommentData && (
            <DetailComment
              company={companyCommentData.company}
              commentDataArr={companyCommentData.commentArr}
              userInfo={userData}
            />
          )}
        </div>
        <ReceptInfoPart jobDetailData={jobDetailData} />
      </Layout>
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

  if (params) {
    await queryClient.prefetchQuery(jobDetailKeyObj.detail({ id: Number(params.jobId), isStatic: true }), getJobDetail);
  }

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
