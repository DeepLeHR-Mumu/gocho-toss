import { useEffect, useRef, useState } from "react";
import { NextPage, GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "@tanstack/react-query";

import { dummyArrCreator } from "shared-util";
import { HiddenH1 } from "shared-ui/deeple-ds";

import { Layout, JdRow } from "@/components";
import { getJdDetail, useJdDetail, useJdArr } from "@/apis/jd";
import { jdDetailKeyObj } from "@/constants/queryKeyFactory/jd/jdDetailKeyObj";
import { isQueryString } from "@/utils";
import { useAddJdViewCount } from "@/apis/viewCount";
import { jdDetailFunnelEvent } from "@/ga/jd";

import { TitlePart, SummaryPart, DetailPart, ReviewPart } from "./part";
import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const JdDetail: NextPage = () => {
  const router = useRouter();

  const [isStatic, setIsStatic] = useState<boolean>(true);
  const isFirstRender = useRef(false);

  const jdId = isQueryString(router.query.jdId) ? Number(router.query.jdId) : null;
  const { data: jdDetailData } = useJdDetail({ id: jdId, isStatic });
  const { data: jdArrData } = useJdArr({
    order: "view",
    size: 3,
    filter: "valid",
    page: 1,
    task: jdDetailData?.detail.taskMain,
    contractType: jdDetailData?.detail.contractType,
  });
  const { mutate: addJdViewCount } = useAddJdViewCount();

  useEffect(() => {
    if (jdId && !isFirstRender.current) {
      isFirstRender.current = true;
      addJdViewCount({ jdId: Number(jdId) });
    }
  }, [addJdViewCount, jdId]);

  useEffect(() => {
    if (jdDetailData) jdDetailFunnelEvent(jdDetailData.id);
  }, [jdDetailData]);

  useEffect(() => {
    setIsStatic(false);
  }, []);

  if (!jdDetailData) {
    return null;
  }

  const getPlace = () => {
    const { data, etc } = jdDetailData.detail.place;

    if (data.length !== 0) {
      return data[0].type === "일반" ? data[0].location.address : data[0].factory.address;
    }

    if (etc) {
      return etc;
    }

    return "채용 후 결정";
  };

  const getPossibleEdu = () => {
    const { highschool, university, college } = jdDetailData.qualification;

    const possibleEdu: string[] = [];

    if (highschool) {
      possibleEdu.push("고졸");
    }

    if (college) {
      possibleEdu.push("초대졸");
    }

    if (university) {
      possibleEdu.push("4년제");
    }

    return possibleEdu.join(", ");
  };

  return (
    <main>
      <PageHead
        option={{
          id: jdDetailData.id,
          title: jdDetailData.title,
          companyName: jdDetailData.company.name,
          rotation: jdDetailData.detail.shift[0],
          pay: jdDetailData.detail.pay && jdDetailData.detail.pay[0],
          place: getPlace(),
          possibleEdu: getPossibleEdu(),
          taskDetail: jdDetailData.detail.taskMain,
        }}
      />
      <HiddenH1 title={`[${jdDetailData.company.name}] ${jdDetailData.title} - 고초대졸닷컴`} />

      <TitlePart
        jd={{
          jdId: jdDetailData.id,
          companyName: jdDetailData.company.name,
          title: jdDetailData.title,
          isBookmark: jdDetailData.isBookmark,
          bookmarkCount: jdDetailData.bookmark,
          applyUrl: jdDetailData.apply.route.link || "",
          endTime: jdDetailData.apply.endTime,
        }}
      />
      <SummaryPart
        jd={{
          company: {
            id: jdDetailData.company.id,
            logoUrl: jdDetailData.company.logoUrl,
            name: jdDetailData.company.name,
            industry: jdDetailData.company.industry,
            size: jdDetailData.company.size,
          },
          title: jdDetailData.title,
          endTime: jdDetailData.apply.endTime,
          view: jdDetailData.view,
          cut: jdDetailData.apply.cut,
        }}
      />
      <div css={cssObj.background}>
        <Layout>
          <div css={cssObj.contentsWrapper}>
            <DetailPart />
            <div css={cssObj.reviewWrapper}>
              {jdDetailData && (
                <ReviewPart
                  company={{
                    id: jdDetailData.company.id,
                    logoUrl: jdDetailData.company.logoUrl,
                    name: jdDetailData.company.name,
                  }}
                  title={jdDetailData.title}
                  jdId={jdDetailData.id}
                />
              )}
            </div>
          </div>
        </Layout>
      </div>
      <Layout>
        <div css={cssObj.similarJdWrapper}>
          <h3 css={cssObj.similarJdTitle}>이 공고와 비슷한 공고들도 둘러보세요.</h3>
          <div css={cssObj.similarJdList}>
            {jdArrData
              ? jdArrData.jdDataArr.map((jd) => (
                  <JdRow
                    key={jd.id}
                    jd={{
                      jdId: jd.id,
                      companyName: jd.company.name,
                      jdTitle: jd.title,
                      dueDate: jd.endTime,
                      bookmarked: jd.isBookmark,
                      cut: jd.cut,
                    }}
                  />
                ))
              : dummyArrCreator(3).map((dummy) => <JdRow key={`jdDetailPage${dummy}`} />)}
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default JdDetail;

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const queryClient = new QueryClient();

  if (Number.isNaN(Number(params?.jdId))) {
    return { notFound: true };
  }

  if (params) {
    await queryClient.prefetchQuery(jdDetailKeyObj.detail({ id: Number(params.jdId), isStatic: true }), getJdDetail);
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? 600 : 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});
