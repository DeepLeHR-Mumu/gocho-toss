import { NextPage, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QueryClient, dehydrate } from "@tanstack/react-query";

import { useUserInfo } from "shared-api/auth";
import { useUserCompanyBookmarkArr } from "shared-api/bookmark";
import { useAddCompanyViewCount } from "shared-api/viewCount";
import { useCompanyDetail, getCompanyDetail } from "shared-api/company";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { DetailComment } from "@component/global/detailComment";
import useMoveScroll from "@pages/company/util";
import { COMPANY_DETAIL_URL } from "shared-constant/internalURL";
import { companyInfoFunnelEvent, companyJdFunnelEvent } from "shared-ga/company";

import { Layout } from "@component/layout";

import { WorkingNotice } from "./component/workingNotice";
import { MenuButtonList } from "./component/menuButtonList";
import { HeaderPart } from "./part/headerPart";
import { BasicInfoPart } from "./part/basicInfoPart";
import { WelfareInfoPart } from "./part/welfareInfoPart";
import { FactoryInfoPart } from "./part/factoryInfoPart";
import { PayInfoPart } from "./part/payInfoPart";
import { CompanyJobPart } from "./part/companyJobPart";
import { PageInfoHead } from "./component/pageInfoHead";
import { PageRecruitHead } from "./component/pageRecruitHead";

import {
  mainContainer,
  mainContainerSkeleton,
  buttonContainer,
  changeDataButton,
  flexBox,
  partContainer,
  sectionContainer,
  warningDesc,
} from "./style";

const CompanyDetailPage: NextPage = () => {
  const router = useRouter();
  const { companyId, info } = router.query;

  const tabs = [useMoveScroll(), useMoveScroll(), useMoveScroll(), useMoveScroll()];

  const { data: userData } = useUserInfo();
  const { data: userCompanyBookmarkArr } = useUserCompanyBookmarkArr({ userId: userData?.id });
  const { data: companyDetailData, isError, isLoading } = useCompanyDetail({ companyId: Number(companyId) });
  const { mutate: addViewCount } = useAddCompanyViewCount();

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
    if (!router.isReady && !router.query.companyId) return;
    if (Number(router.query.companyId)) return;
    router.push("/404");
  }, [router]);

  useEffect(() => {
    const companyViewStr = sessionStorage.getItem("companyViewArr");

    if (!companyDetailData) return;

    const isViewed = companyViewStr?.includes(String(companyDetailData?.data.id));
    if (isViewed) return;

    if (companyViewStr) {
      const companyViewArr: number[] = JSON.parse(companyViewStr);
      companyViewArr.push(companyDetailData.data.id);
      sessionStorage.setItem("companyViewArr", JSON.stringify(companyViewArr));
      addViewCount({ elemId: companyDetailData.data.id });
      return;
    }

    if (!isViewed) {
      sessionStorage.setItem("companyViewArr", JSON.stringify([companyDetailData.data.id]));
      addViewCount({ elemId: companyDetailData.data.id });
    }
  }, [companyDetailData, addViewCount]);

  useEffect(() => {
    if (companyDetailData && info === "detail") companyInfoFunnelEvent(companyDetailData.data.id);
    if (companyDetailData && info === "jd") companyJdFunnelEvent(companyDetailData.data.id);
  }, [companyDetailData, info]);

  if (!companyDetailData || isError || isLoading) {
    return <main css={mainContainerSkeleton} />;
  }

  const { data } = companyDetailData;

  const companyData = {
    headerData: {
      id: data.id,
      logoUrl: data.logoUrl,
      bookmark: data.bookmark,
      view: data.view,
      name: data.name,
      industry: data.industry,
      catchUrl: data.catchUrl,
      youtubeUrl: data.youtubeUrl,
    },
    basicData: {
      industry: data.industry,
      size: data.size,
      foundDate: data.foundDate,
      employeeNumber: data.employeeNumber,
      intro: data.intro,
      address: data.address,
      factoryAddress: data.factoryArr.map((factory) => {
        return factory.address;
      }),
      nozo: data.nozo,
    },
    welfareData: { welfare: data.welfare },
    payData: {
      payStart: data.payStart,
      payAvg: data.payAvg,
      payDesc: data.payDesc,
    },
    factoryData: { factoryArr: data.factoryArr },
    commentData: {
      companyId: data.id,
      name: data.name,
      title: null,
      logoUrl: data.logoUrl,
    },
  };

  const isBookmarked = Boolean(
    userCompanyBookmarkArr?.some((company) => {
      return company.id === companyData.headerData.id;
    })
  );

  // TODO PART와 컴포넌트와 div, button들의 향연 -> 추상화 레벨을 최대한 하나로 유지하자
  return (
    // TODO :
    <main css={mainContainer}>
      {info === "detail" && (
        <PageInfoHead
          option={{
            companyName: companyDetailData.data.name,
            id: companyDetailData.data.id,
          }}
        />
      )}
      {info === "jd" && (
        <PageRecruitHead
          option={{
            companyName: companyDetailData.data.name,
            id: companyDetailData.data.id,
          }}
        />
      )}

      <Layout>
        <HeaderPart companyData={companyData.headerData} isBookmarked={isBookmarked} userId={userData?.id} />
        <div css={buttonContainer}>
          <button
            type="button"
            onClick={() => {
              router.push({
                pathname: `${COMPANY_DETAIL_URL}/${companyData.headerData.id}`,
                query: { info: "detail" },
              });
            }}
            css={changeDataButton(info === "detail")}
          >
            기업 정보
          </button>
          <button
            type="button"
            onClick={() => {
              router.push({
                pathname: `${COMPANY_DETAIL_URL}/${companyData.headerData.id}`,
                query: { info: "jd" },
              });
            }}
            css={changeDataButton(info === "jd")}
          >
            채용공고 모음
          </button>
        </div>

        {info === "detail" && (
          <section>
            <InvisibleH1 title={`${companyData.headerData.name} > 기업/공장 정보 - 고초대졸닷컴`} />
            <InvisibleH2 title={`${companyData.headerData.name} 기업정보`} />
            <div css={flexBox}>
              <div css={partContainer}>
                <section css={sectionContainer}>
                  <MenuButtonList
                    activeMenu="일반 정보"
                    tab={tabs.map((tab) => {
                      return tab.onMoveToElement;
                    })}
                    tabClick={tabs[0].element}
                  />
                  <BasicInfoPart companyData={companyData.basicData} />
                </section>

                <WorkingNotice info="복지" />
                <section css={sectionContainer}>
                  <MenuButtonList
                    activeMenu="복지 정보"
                    tab={tabs.map((tab) => {
                      return tab.onMoveToElement;
                    })}
                    tabClick={tabs[1].element}
                  />
                  <WelfareInfoPart companyData={companyData.welfareData} />
                </section>

                <WorkingNotice info="연봉" />
                <section css={sectionContainer}>
                  <MenuButtonList
                    activeMenu="연봉 정보"
                    tab={tabs.map((tab) => {
                      return tab.onMoveToElement;
                    })}
                    tabClick={tabs[2].element}
                  />
                  <PayInfoPart companyData={companyData.payData} />
                </section>

                <WorkingNotice info="공장" />
                <section css={sectionContainer}>
                  <MenuButtonList
                    activeMenu="공장 정보"
                    tab={tabs.map((tab) => {
                      return tab.onMoveToElement;
                    })}
                    tabClick={tabs[3].element}
                  />
                  <FactoryInfoPart companyData={companyData.factoryData} />
                </section>
              </div>

              <DetailComment jdId={null} detailData={companyData.commentData} />
            </div>
            <p css={warningDesc}>유의사항 : 실제 정보와 상이할 수도 있으니 참고해주세요.</p>
          </section>
        )}

        {info === "jd" && (
          <section>
            <InvisibleH1 title={`${companyData.headerData.name} > 생산직 채용공고 - 고초대졸닷컴`} />
            <InvisibleH2 title={`${companyData.headerData.name} 채용공고 모음`} />
            <CompanyJobPart companyId={Number(companyId)} />
          </section>
        )}
      </Layout>
    </main>
  );
};

export default CompanyDetailPage;

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
