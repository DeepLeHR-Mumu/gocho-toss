import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useUserInfo } from "shared-api/auth";
import { useUserCompanyBookmarkArr } from "shared-api/bookmark";
import { useAddCompanyViewCount } from "shared-api/viewCount";
import { useCompanyDetail } from "shared-api/company";

import { Layout } from "@component/layout";
import useMoveScroll from "@pages/companies/[companyId]/util";

import { WorkingNotice } from "../component/workingNotice";
import { MenuButtonList } from "../component/menuButtonList";
import { HeaderPart } from "../part/headerPart";
import { BasicInfoPart } from "../part/basicInfoPart";
import { WelfareInfoPart } from "../part/welfareInfoPart";
import { FactoryInfoPart } from "../part/factoryInfoPart";
import { PayInfoPart } from "../part/payInfoPart";
import { CompanyJobPart } from "../part/companyJobPart";
import { shownDataDef } from "./type";
import {
  mainContainer,
  buttonContainer,
  changeDataButton,
  flexBox,
  partContainer,
  sectionContainer,
  tempChatBox,
} from "./style";

const CompaniesDetail: NextPage = () => {
  const router = useRouter();
  const { companyId } = router.query;
  const [shownData, setShownData] = useState<shownDataDef>("info");

  const tabs = [useMoveScroll(), useMoveScroll(), useMoveScroll(), useMoveScroll()];

  const changeShownData = (newData: shownDataDef) => {
    setShownData(newData);
  };

  const { data: userData } = useUserInfo();
  const { data: userCompanyBookmarkArr } = useUserCompanyBookmarkArr({ userId: userData?.id });
  const { data: response, isError, isLoading } = useCompanyDetail({ companyId: Number(companyId) });
  const { mutate: addViewCount } = useAddCompanyViewCount();

  useEffect(() => {
    const companyViewStr = sessionStorage.getItem("companyView");
    // response가 없으면 useEffect 탈출
    if (!response) return;

    // 이미 조회한 게시글일 경우 useEffect 탈출
    const isViewed = companyViewStr?.includes(String(response?.data.id));
    if (isViewed) return;

    // 해당 세션에서 이미 첫 조회가 이루어진 경우 - 조회한 기록이 없는 게시글 일 경우
    if (companyViewStr) {
      const companyViewArr: number[] = JSON.parse(companyViewStr);
      companyViewArr.push(response.data.id);
      sessionStorage.setItem("companyView", JSON.stringify(companyViewArr));
      addViewCount({ elemId: response.data.id });
      return;
    }
    // 해당 세션에서 첫 조회
    sessionStorage.setItem("companyView", JSON.stringify([response.data.id]));
    addViewCount({ elemId: response.data.id });
  }, [response, addViewCount]);
  
  if (!response || isError || isLoading) {
    return <main>Loading...</main>;
  }

  const { data } = response;

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
  };

  const isBookmarked = Boolean(
    userCompanyBookmarkArr?.some((company) => {
      return company.id === companyData.headerData.id;
    })
  );

  return (
    <main css={mainContainer}>
      <Layout>
        <HeaderPart companyData={companyData.headerData} isBookmarked={isBookmarked} userId={userData?.id} />
        <div css={buttonContainer}>
          <button
            type="button"
            onClick={() => {
              changeShownData("info");
            }}
            css={changeDataButton(shownData === "info")}
          >
            기업 정보
          </button>
          <button
            type="button"
            onClick={() => {
              changeShownData("job");
            }}
            css={changeDataButton(shownData === "job")}
          >
            채용공고 모음
          </button>
        </div>
      </Layout>
      {shownData === "info" && (
        <Layout>
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
            <div css={tempChatBox}>This will be Chat</div>
          </div>
        </Layout>
      )}
      {shownData === "job" && <CompanyJobPart companyId={Number(companyId)} />}
    </main>
  );
};

export default CompaniesDetail;
