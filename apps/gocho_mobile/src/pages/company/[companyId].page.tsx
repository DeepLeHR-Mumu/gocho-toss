import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { useAddCompanyViewCount } from "shared-api/viewCount";
import { useCompanyDetail, getCompanyDetail } from "shared-api/company";
import { COMPANY_DETAIL_URL } from "shared-constant/internalURL";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { companyInfoFunnelEvent, companyJdFunnelEvent } from "shared-ga/company";

import { PageHead } from "./pageHead";
import { PageRecruitHead } from "./component/pageRecruitHead";
import { H2Title } from "./component/h2Title";
import { HeaderPart } from "./part/headerPart";
import { BasicInfoPart } from "./part/basicInfoPart";
import { JobsPart } from "./part/jobsPart";
import { WelfarePart } from "./part/welfarePart";
import { CheckMorePart } from "./part/checkMorePart";
import { MoneyPart } from "./part/moneyPart";
import { FactoryPart } from "./part/factoryInfoPart";
import { LinkPart } from "./part/linkPart";
import { container } from "./style";

const CompanyDetail: NextPage = () => {
  const router = useRouter();
  const { companyId, info } = router.query;
  const { mutate: addViewCount } = useAddCompanyViewCount();
  const { data: companyDetailData } = useCompanyDetail({ companyId: Number(companyId) });

  useEffect(() => {
    if (info) {
      return;
    }
    if (!info && companyId)
      router.replace({
        pathname: `${COMPANY_DETAIL_URL}/${companyId}`,
        query: { info: "detail" },
      });
  }, [companyId, info, router]);

  useEffect(() => {
    const companyViewStr = sessionStorage.getItem("jobViewArr");
    if (!companyId) return;

    const isViewed = companyViewStr?.includes(String(companyId));
    if (isViewed) return;

    if (companyViewStr) {
      const jobViewArr: number[] = JSON.parse(companyViewStr);
      jobViewArr.push(Number(companyId));
      sessionStorage.setItem("jobViewArr", JSON.stringify(jobViewArr));
      addViewCount({ elemId: Number(companyId) });
      return;
    }
    if (!isViewed) {
      sessionStorage.setItem("jobViewArr", JSON.stringify([companyId]));
      addViewCount({ elemId: Number(companyId) });
    }
  }, [addViewCount, companyId]);

  useEffect(() => {
    if (companyDetailData && info === "detail") companyInfoFunnelEvent(companyDetailData.data.id);
    if (companyDetailData && info === "jd") companyJdFunnelEvent(companyDetailData.data.id);
  }, [companyDetailData, info]);

  return (
    <>
      <HeaderPart />
      <div css={container}>
        {info === "detail" && (
          <>
            {companyDetailData && (
              <>
                <PageHead
                  option={{
                    companyName: companyDetailData.data.name,
                    id: companyDetailData.data.id,
                  }}
                />
                <InvisibleH1 title={`${companyDetailData.data.name} > 기업/공장 정보 - 고초대졸닷컴`} />
              </>
            )}

            <H2Title titleStr="일반 정보" />
            <BasicInfoPart />
            <H2Title titleStr="복지 정보" />
            <WelfarePart />
            <H2Title titleStr="연봉 정보" />
            <MoneyPart />
            <H2Title titleStr="공장 정보" />
            <FactoryPart />
            <LinkPart />
          </>
        )}
        {info === "jd" && (
          <>
            {companyDetailData && (
              <>
                <PageRecruitHead
                  option={{
                    id: companyDetailData.data.id,
                    companyName: companyDetailData.data.name,
                  }}
                />
                <InvisibleH1 title={`${companyDetailData.data.name} > 생산직 채용공고 - 고초대졸닷컴`} />
              </>
            )}

            <JobsPart />
          </>
        )}
      </div>

      <CheckMorePart />
    </>
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