import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { FiInfo } from "react-icons/fi";
import Image from "next/image";

import { Layout } from "@component/layout";
import { useCompanyDetail } from "shared-api/company/useCompanyDetail";
import { dateConverter } from "shared-util/date/index";
import nozo_false from "shared-image/page/companyDetail/nozo_false_icon.svg";
import nozo_true from "shared-image/page/companyDetail/nozo_true_icon.svg";
import { META_COMPANY_RECRUIT } from "shared-constant/meta";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import {
  companyListContainer,
  companyLogo,
  employeeNumberCSS,
  factoryBox,
  factoryText,
  iconText,
  infoContainer,
  mapButton,
  nozoExplainText,
  nozoIconBox,
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
      <MetaHead
        metaData={META_COMPANY_RECRUIT}
        companyDetail={{ companyName: companyDetailData.data.name, asPath: router.asPath }}
      />
      <InvisibleH2 title={`${companyDetailData.data.name} 기업정보`} />
      <Layout>
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
                <span css={employeeNumberCSS}>{companyDetailData.data.employeeNumber.toLocaleString("Ko-KR")}</span>명
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

            <a
              css={mapButton}
              href={`https://map.kakao.com/?q=${companyDetailData.data.address}`}
              target="_blank"
              rel="noreferrer"
            >
              지도 보기
            </a>

            {companyDetailData.data.factoryArr && (
              <div css={companyListContainer}>
                <div css={companyLogo}>
                  <FiInfo />
                </div>
                <ul css={factoryBox}>
                  {companyDetailData.data.factoryArr.map((factory) => {
                    return (
                      <li css={factoryText} key={factory.id}>
                        {factory.factoryName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div css={infoContainer}>
              <p>노조 여부</p>
              <p css={iconText}>
                {companyDetailData.data.nozo.exists ? "노조 있음" : "노조 없음"}

                <span css={nozoIconBox}>
                  <Image
                    src={companyDetailData.data.nozo.exists ? nozo_true : nozo_false}
                    layout="fixed"
                    objectFit="contain"
                  />
                </span>
              </p>
            </div>
            <div css={infoContainer}>
              <p />
              {companyDetailData.data.nozo.desc && <p css={nozoExplainText}>{companyDetailData.data.nozo.desc}</p>}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};
