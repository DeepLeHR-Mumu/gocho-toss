import { NextPage, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QueryClient, dehydrate } from "@tanstack/react-query";

import { useAddCompanyViewCount } from "shared-api/viewCount";
import { useCompanyDetail, getCompanyDetail } from "shared-api/company";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { companyJdFunnelEvent } from "shared-ga/company";

import { Layout } from "@component/layout";

import { PageRecruitHead } from "../component/pageRecruitHead";
import { TopButton } from "../component/topButton";
import { HeaderPart } from "../part/headerPart";
import { CompanyJobPart } from "./part/companyJobPart";
import { mainContainer, mainContainerSkeleton } from "./style";

const JdPage: NextPage = () => {
  const router = useRouter();
  const { companyId } = router.query;

  const { data: companyDetailData } = useCompanyDetail({
    companyId: Number(companyId),
  });
  const { mutate: addViewCount } = useAddCompanyViewCount();

  useEffect(() => {
    const companyViewStr = sessionStorage.getItem("companyViewArr");

    if (!companyDetailData) return;

    const isViewed = companyViewStr?.includes(String(companyDetailData?.id));
    if (isViewed) return;

    if (companyViewStr) {
      const companyViewArr: number[] = JSON.parse(companyViewStr);
      companyViewArr.push(companyDetailData.id);
      sessionStorage.setItem("companyViewArr", JSON.stringify(companyViewArr));
      addViewCount({ elemId: companyDetailData.id });
      return;
    }

    if (!isViewed) {
      sessionStorage.setItem("companyViewArr", JSON.stringify([companyDetailData.id]));
      addViewCount({ elemId: companyDetailData.id });
    }
  }, [companyDetailData, addViewCount]);

  useEffect(() => {
    if (companyDetailData) {
      companyJdFunnelEvent(companyDetailData.id);
    }
  }, [companyDetailData]);

  if (!companyDetailData || router.isFallback) {
    return <main css={mainContainerSkeleton} />;
  }

  return (
    <main css={mainContainer}>
      <PageRecruitHead
        option={{
          companyName: companyDetailData.name,
          id: companyDetailData.id,
        }}
      />

      <Layout>
        <HeaderPart />
        <InvisibleH1 title={`${companyDetailData.name} > 생산직 채용공고 - 고초대졸닷컴`} />
        <TopButton id={companyDetailData.id} />

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
      companyDetailKeyObj.detail({ companyId: Number(params.companyId) }),
      getCompanyDetail
    );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
