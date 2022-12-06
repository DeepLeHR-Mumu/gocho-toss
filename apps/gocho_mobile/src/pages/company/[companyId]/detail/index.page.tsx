import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { useAddCompanyViewCount } from "shared-api/viewCount";
import { useCompanyDetail, getCompanyDetail } from "shared-api/company";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { companyInfoFunnelEvent } from "shared-ga/company";

import { PageHead } from "./pageHead";
import { Header } from "../component/header";
import { BasicInfoPart } from "../part/basicInfoPart";
import { WelfarePart } from "../part/welfarePart";
import { WarningDescPart } from "../part/warningDescPart";
import { PayInfoPart } from "../part/payInfoPart";
import { FactoryInfoPart } from "../part/factoryInfoPart";
import { CatchLinkPart } from "../part/catchLinkPart";
import { container, loadingBox } from "./style";

const DetailPage: NextPage = () => {
  const router = useRouter();

  const { mutate: addViewCount } = useAddCompanyViewCount();
  const { data: companyDetailData } = useCompanyDetail({ companyId: Number(router.query.companyId) });

  useEffect(() => {
    const companyViewStr = sessionStorage.getItem("jobViewArr");
    if (!router.query.companyId) return;

    const isViewed = companyViewStr?.includes(String(router.query.companyId));
    if (isViewed) return;

    if (companyViewStr) {
      const jobViewArr: number[] = JSON.parse(companyViewStr);
      jobViewArr.push(Number(router.query.companyId));
      sessionStorage.setItem("jobViewArr", JSON.stringify(jobViewArr));
      addViewCount({ elemId: Number(router.query.companyId) });
      return;
    }
    if (!isViewed) {
      sessionStorage.setItem("jobViewArr", JSON.stringify([router.query.companyId]));
      addViewCount({ elemId: Number(router.query.companyId) });
    }
  }, [addViewCount, router.query.companyId]);

  useEffect(() => {
    if (companyDetailData) {
      companyInfoFunnelEvent(companyDetailData.id);
    }
  }, [companyDetailData]);

  if (!companyDetailData || router.isFallback) {
    return <main css={loadingBox} />;
  }

  return (
    <main>
      <PageHead />
      <InvisibleH1 title={`${companyDetailData.name} > 기업/공장 정보 - 고초대졸닷컴`} />
      <InvisibleH2 title={`${companyDetailData.name} 기업정보`} />

      <Header pathName="detail" />
      <div css={container}>
        <BasicInfoPart />
        <WelfarePart />
        <PayInfoPart />
        <FactoryInfoPart />
        <CatchLinkPart />
      </div>
      <WarningDescPart />
    </main>
  );
};

export default DetailPage;

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
