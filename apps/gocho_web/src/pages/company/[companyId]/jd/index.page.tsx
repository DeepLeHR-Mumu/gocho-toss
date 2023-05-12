import { NextPage, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { QueryClient, dehydrate } from "@tanstack/react-query";

import { useCompanyDetail, getCompanyDetail } from "shared-api/company";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { companyJdFunnelEvent } from "shared-ga/company";
import { useAddCompanyViewCount } from "shared-api/viewCount";

import { Layout } from "@component/layout";

import { PageHead } from "./pageHead";
import { TopButton } from "../component/topButton";
import { HeaderPart } from "../part/headerPart";
import { CompanyJobPart } from "../part/companyJobPart";
import { mainContainer, mainContainerSkeleton } from "./style";

const JdPage: NextPage = () => {
  const [isStatic, setIsStatic] = useState<boolean>(true);
  const router = useRouter();
  const isFirstRender = useRef(true);

  const { data: companyDetailData } = useCompanyDetail({
    companyId: Number(router.query.companyId),
    isStatic,
  });
  const { mutate: addViewCount } = useAddCompanyViewCount();

  useEffect(() => {
    setIsStatic(false);
  }, []);

  useEffect(() => {
    if (companyDetailData) {
      companyJdFunnelEvent(companyDetailData.id);
    }
  }, [companyDetailData]);

  useEffect(() => {
    if (router.query.companyId && isFirstRender.current) {
      isFirstRender.current = false;
      addViewCount({ companyId: Number(router.query.companyId) });
    }
  }, [addViewCount, router.query.companyId]);

  if (!companyDetailData || router.isFallback) {
    return <main css={mainContainerSkeleton} />;
  }

  return (
    <main css={mainContainer}>
      <PageHead />
      <Layout>
        <HeaderPart />
        <InvisibleH1 title={`${companyDetailData.name} > 생산직 채용공고 - 고초대졸닷컴`} />
        <TopButton id={companyDetailData.id} pathName="jd" />

        <section>
          <InvisibleH2 title={`${companyDetailData.name} 채용공고 모음`} />
          <CompanyJobPart />
        </section>
      </Layout>
    </main>
  );
};

export default JdPage;

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const queryClient = new QueryClient();

  if (Number.isNaN(Number(params?.companyId))) {
    return { notFound: true };
  }

  if (params)
    await queryClient.prefetchQuery(
      companyDetailKeyObj.detail({ companyId: Number(params.companyId), isStatic: true }),
      getCompanyDetail
    );

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
