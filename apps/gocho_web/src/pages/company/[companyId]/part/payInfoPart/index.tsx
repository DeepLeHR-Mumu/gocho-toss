import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import payAvg from "shared-image/page/companyDetail/payAvg.svg";
import payStart from "shared-image/page/companyDetail/payStart.svg";

import { InvisibleH3 } from "shared-ui/common/atom/invisibleH3";
import { useCompanyDetail } from "shared-api/company";

import {
  wrapper,
  infoContainer,
  flexBox,
  infoBox,
  infoTitle,
  colorPoint,
  infoPicture,
  infoText,
  etcTitle,
  noData,
} from "./style";

export const PayInfoPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: companyDetailData, isLoading } = useCompanyDetail({
    companyId: Number(router.query.companyId),
    isStatic: false,
  });

  if (!companyDetailData || isLoading) {
    return <section css={wrapper} />;
  }

  return (
    <div css={infoContainer}>
      <InvisibleH3 title="연봉 정보" />
      <div css={flexBox}>
        <div css={infoBox}>
          <div>
            <div css={infoPicture}>
              <Image fill src={payStart} alt="" />
            </div>
            <p css={infoTitle}>평균 초봉</p>
          </div>
          {companyDetailData.payStart ? (
            <p css={infoText}>
              <span css={colorPoint}>{companyDetailData.payStart.toLocaleString("ko-KR")}</span>
              만원
            </p>
          ) : (
            <p css={noData}>정보가 없습니다</p>
          )}
        </div>
        <div css={infoBox}>
          <div>
            <div css={infoPicture}>
              <Image fill src={payAvg} alt="" />
            </div>
            <p css={infoTitle}>평균 연봉</p>
          </div>
          {companyDetailData.payAvg ? (
            <p css={infoText}>
              <span css={colorPoint}>{companyDetailData.payAvg.toLocaleString("ko-KR")}</span>
              만원
            </p>
          ) : (
            <p css={noData}>정보가 없습니다</p>
          )}
        </div>
      </div>

      <div css={flexBox}>
        <p css={etcTitle}>기타 연봉 정보</p>
        {companyDetailData.payDesc ? (
          <p css={infoText}>{companyDetailData.payDesc}</p>
        ) : (
          <p css={noData}>정보가 없습니다</p>
        )}
      </div>
    </div>
  );
};
