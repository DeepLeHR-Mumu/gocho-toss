import { NextPage, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
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

import { PageInfoHead } from "../component/pageInfoHead";
import { TopButton } from "../component/topButton";
import { HeaderPart } from "../part/headerPart";
import { BasicInfoPart } from "./part/basicInfoPart";
import { WelfareInfoPart } from "./part/welfareInfoPart";
import { FactoryInfoPart } from "./part/factoryInfoPart";
import { PayInfoPart } from "./part/payInfoPart";
import { mainContainer, mainContainerSkeleton, flexBox, partContainer, warningDesc } from "./style";

const DetailPage: NextPage = () => {
  const router = useRouter();
  const { companyId } = router.query;

  const { data: userInfo } = useUserInfo();
  const { data: companyDetailData } = useCompanyDetail({
    companyId: Number(companyId),
  });
  const { data: companyCommentArrData } = useCompanyCommentArr({
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
      companyInfoFunnelEvent(companyDetailData.id);
    }
  }, [companyDetailData]);

  if (!companyDetailData || router.isFallback) {
    return <main css={mainContainerSkeleton} />;
  }

  return (
    <main css={mainContainer}>
      <PageInfoHead
        option={{
          companyName: companyDetailData.name,
          id: companyDetailData.id,
        }}
      />

      <Layout>
        <HeaderPart />
        <InvisibleH1 title={`${companyDetailData.name} > 기업/공장 정보 - 고초대졸닷컴`} />
        <TopButton id={companyDetailData.id} />

        <section>
          <InvisibleH2 title={`${companyDetailData.name} 기업정보`} />
          <div css={flexBox}>
            <div css={partContainer}>
              <BasicInfoPart />
              <WelfareInfoPart />
              <PayInfoPart />
              <FactoryInfoPart />
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
