import { NextPage, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { QueryClient, dehydrate } from "@tanstack/react-query";

import { useAddCompanyViewCount } from "shared-api/viewCount";
import { useCompanyDetail, getCompanyDetail, useCompanyCommentArr } from "shared-api/company";
import { useUserInfo } from "shared-api/auth/useUserInfo";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { companyInfoFunnelEvent } from "shared-ga/company";

import { DetailComment } from "@component/global/detailComment";
import { Layout } from "@component/layout";

import { MenuButtonList } from "../component/menuButtonList";
import { TopButton } from "../component/topButton";
import { WorkingNotice } from "../component/workingNotice";
import { HeaderPart } from "../part/headerPart";
import { BasicInfoPart } from "../part/basicInfoPart";
import { WelfareInfoPart } from "../part/welfareInfoPart";
import { FactoryInfoPart } from "../part/factoryInfoPart";
import { PayInfoPart } from "../part/payInfoPart";
import { PageHead } from "./pageHead";
import { mainContainer, mainContainerSkeleton, flexBox, partContainer, warningDesc, wrapper } from "./style";

const DetailPage: NextPage = () => {
  const basicInfoRef = useRef<null | HTMLDivElement>(null);
  const factoryInfoRef = useRef<null | HTMLDivElement>(null);
  const payInfoRef = useRef<null | HTMLDivElement>(null);
  const welfareInfoRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();

  const { data: userInfo } = useUserInfo();
  const { data: companyDetailData } = useCompanyDetail({
    companyId: Number(router.query.companyId),
  });
  const { data: companyCommentArrData } = useCompanyCommentArr({
    companyId: Number(router.query.companyId),
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
      companyInfoFunnelEvent(companyDetailData.id);
    }
  }, [companyDetailData]);

  if (!companyDetailData || router.isFallback) {
    return <main css={mainContainerSkeleton} />;
  }

  const refObj = { basicInfoRef, welfareInfoRef, payInfoRef, factoryInfoRef };

  return (
    <main css={mainContainer}>
      <PageHead />
      <Layout>
        <HeaderPart />
        <InvisibleH1 title={`${companyDetailData.name} > 기업/공장 정보 - 고초대졸닷컴`} />
        <TopButton id={companyDetailData.id} pathName="detail" />

        <section>
          <InvisibleH2 title={`${companyDetailData.name} 기업정보`} />
          <div css={flexBox}>
            <div css={partContainer}>
              <div css={wrapper} ref={basicInfoRef}>
                <MenuButtonList activeMenu="일반 정보" refObj={refObj} />
                <BasicInfoPart />
              </div>

              <WorkingNotice info="복지" />
              <div css={wrapper} ref={welfareInfoRef}>
                <MenuButtonList activeMenu="복지 정보" refObj={refObj} />
                <WelfareInfoPart />
              </div>

              <WorkingNotice info="연봉" />
              <div css={wrapper} ref={payInfoRef}>
                <MenuButtonList activeMenu="연봉 정보" refObj={refObj} />
                <PayInfoPart />
              </div>

              <div css={wrapper} ref={factoryInfoRef}>
                <MenuButtonList activeMenu="공장 정보" refObj={refObj} />
                <FactoryInfoPart />
              </div>
            </div>

            {companyCommentArrData && (
              <DetailComment jdId={null} userInfo={userInfo} commentDataArr={companyCommentArrData} />
            )}
          </div>
          <p css={warningDesc}>유의사항 : 실제 정보와 상이할 수도 있으니 참고해주세요.</p>
        </section>
      </Layout>
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
    revalidate: process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? 600 : 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
