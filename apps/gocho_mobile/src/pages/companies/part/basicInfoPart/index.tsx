import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { FiInfo } from "react-icons/fi";

import { Layout } from "@component/layout";
import { useCompanyDetail } from "shared-api/company/useCompanyDetail";
import { dateConverter } from "shared-util/date/index";

import {
  companyListContainer,
  companyLogo,
  employeeNumberCSS,
  factoryBox,
  factoryText,
  h2Title,
  infoContainer,
  mapButton,
  nozoContainer,
  nozoExplainText,
  sectionContainer,
  sizeContainer,
  wrapper,
} from "./style";

export const BasicInfoPart: FunctionComponent = () => {
  const router = useRouter();
  const { companyId } = router.query;
  const {
    data: companyDetailData,
    isLoading,
    isSuccess,
  } = useCompanyDetail({ companyId: Number(companyId) as number });

  if (isLoading || !isSuccess) {
    // TODO 스켈레톤 넣자
    return <>Loading</>;
  }

  const { year: foundYear, month: foundMonth, date: foundDate } = dateConverter(companyDetailData.data.foundDate);
  return (
    <div css={wrapper}>
      <Layout>
        <h2 css={h2Title}>일반 정보</h2>
        <section css={sectionContainer}>
          <div css={sizeContainer}>
            <div css={infoContainer}>
              <p>업종</p>
              <p>{companyDetailData.data.industry}</p>
            </div>
            <div css={infoContainer}>
              <p>기업형태</p>
              <p>{companyDetailData.data.size}</p>
            </div>
            <div css={infoContainer}>
              <p>설립연도</p>
              <p>
                {foundYear}년 {foundMonth}월 {foundDate}일
              </p>
            </div>
            <div css={infoContainer}>
              <p>사원수</p>
              <p>
                <span css={employeeNumberCSS}>{companyDetailData.data.employeeNumber}</span>명
              </p>
            </div>
            <div css={infoContainer}>
              <p>기업한줄소개</p>
              <p>{companyDetailData.data.intro}</p>
            </div>
            <div css={infoContainer}>
              <p>기업 주소</p>
              <p>{companyDetailData.data.address}</p>
            </div>
            <a css={mapButton} href={`https://map.kakao.com/?q=${companyDetailData.data.address}`}>
              지도 보기
            </a>
            {companyDetailData.data.factoryArr && (
              <div css={companyListContainer}>
                <div css={companyLogo}>
                  <FiInfo />
                </div>
                {companyDetailData.data.factoryArr.map((factory) => {
                  return (
                    <div css={factoryBox}>
                      <p css={factoryText}>{factory.name}</p>
                    </div>
                  );
                })}
              </div>
            )}
            <div css={nozoContainer}>
              <p>노조 여부</p>
              <div>
                <p>{companyDetailData.data.nozo.exists ? "노조 있음" : "노조 없음"}</p>
                {companyDetailData.data.nozo.desc && <p css={nozoExplainText}>{companyDetailData.data.nozo.desc}</p>}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};
