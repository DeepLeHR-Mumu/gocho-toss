import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { useCompanyDetail, getCompanyDetail } from "shared-api/company";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { companyInfoFunnelEvent } from "shared-ga/company";
import { useCompanyViewCount } from "shared-user";

import { PageHead } from "./pageHead";
import { TopButton } from "../component/topButton";
import { HeaderPart } from "../part/headerPart";
import { BasicInfoPart } from "../part/basicInfoPart";
import { WelfarePart } from "../part/welfarePart";
import { WarningDescPart } from "../part/warningDescPart";
import { PayInfoPart } from "../part/payInfoPart";
import { FactoryInfoPart } from "../part/factoryInfoPart";
import { CatchLinkPart } from "../part/catchLinkPart";
import { container, loadingBox } from "./style";

const DetailPage: NextPage = () => {
  const [isStatic, setIsStatic] = useState<boolean>(true);
  const router = useRouter();

  const { data: companyDetailData } = useCompanyDetail({ companyId: Number(router.query.companyId), isStatic });

  useEffect(() => {
    setIsStatic(false);
  }, []);

  useEffect(() => {
    if (companyDetailData) {
      companyInfoFunnelEvent(companyDetailData.id);
    }
  }, [companyDetailData]);

  useCompanyViewCount(Number(router.query.companyId));

  if (!companyDetailData || router.isFallback) {
    return <main css={loadingBox} />;
  }

  return (
    <main>
      <PageHead />
      <InvisibleH1 title={`${companyDetailData.name} > 기업/공장 정보 - 고초대졸닷컴`} />
      <InvisibleH2 title={`${companyDetailData.name} 기업정보`} />

      <HeaderPart />
      <TopButton pathName="detail" />
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
