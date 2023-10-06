import { useEffect, useRef } from "react";
import { NextPage, GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "@tanstack/react-query";

import { Layout } from "@/components";
import { getCompanyDetail } from "@/apis/company";
import { useAddCompanyViewCount } from "@/apis/viewCount";
import { companyDetailKeyObj } from "@/constants/queryKeyFactory/company/companyDetailKeyObj";
import { isQueryString } from "@/utils";
import { companyDetailFunnelEvent } from "@/ga/company";

import { JdPart } from "./part/JdPart";
import { CompanyInfoPart } from "./part/CompanyInfoPart";
import { ReviewPart } from "./part/ReviewPart";
import { TitlePart } from "./part/TitlePart";
import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const CompanyDetail: NextPage = () => {
  const router = useRouter();

  const isFirstRender = useRef(false);

  const { mutate: addViewCount } = useAddCompanyViewCount();

  useEffect(() => {
    if (router.isReady && !isQueryString(router.query.type)) {
      router.replace({ pathname: router.pathname, query: { companyId: router.query.companyId, type: "company" } });
    }
  }, [router]);

  useEffect(() => {
    if (router.query.companyId && !isFirstRender.current) {
      isFirstRender.current = true;
      addViewCount({ companyId: Number(router.query.companyId) });
    }
  }, [router.query.companyId, addViewCount]);

  useEffect(() => {
    if (router.isReady) {
      companyDetailFunnelEvent(Number(router.query.companyId));
    }
  }, [router.isReady, router.query.companyId]);

  return (
    <main css={cssObj.background}>
      <PageHead />
      <TitlePart />
      <Layout>
        {router.query.type === "company" && <CompanyInfoPart />}
        {router.query.type === "jd" && <JdPart />}
        {router.query.type === "review" && <ReviewPart />}
      </Layout>
    </main>
  );
};

export default CompanyDetail;

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

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});
