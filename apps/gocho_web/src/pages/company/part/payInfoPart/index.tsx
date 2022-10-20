import { FunctionComponent } from "react";
import Image from "next/image";

import payAvg from "shared-image/page/companyDetail/payAvg.svg";
import payStart from "shared-image/page/companyDetail/payStart.svg";

import { InvisibleH3 } from "shared-ui/common/atom/invisibleH3";

import { PayInfoPartProps } from "./type";
import {
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

export const PayInfoPart: FunctionComponent<PayInfoPartProps> = ({ companyData }) => {
  return (
    <div css={infoContainer}>
      <InvisibleH3 title="연봉 정보" />
      <div css={flexBox}>
        <div css={infoBox}>
          <div>
            <div css={infoPicture}>
              <Image layout="fill" objectFit="contain" src={payStart} alt="급여 복지 관련 로고" />
            </div>
            <p css={infoTitle}>평균 초봉</p>
          </div>
          {companyData.payStart ? (
            <p css={infoText}>
              <span css={colorPoint}>{companyData.payStart.toLocaleString("ko-KR")}</span>
              만원
            </p>
          ) : (
            <p css={noData}>정보가 없습니다</p>
          )}
        </div>
        <div css={infoBox}>
          <div>
            <div css={infoPicture}>
              <Image layout="fill" objectFit="contain" src={payAvg} alt="급여 복지 관련 로고" />
            </div>
            <p css={infoTitle}>평균 연봉</p>
          </div>
          {companyData.payAvg ? (
            <p css={infoText}>
              <span css={colorPoint}>{companyData.payAvg.toLocaleString("ko-KR")}</span>
              만원
            </p>
          ) : (
            <p css={noData}>정보가 없습니다</p>
          )}
        </div>
      </div>

      <div css={flexBox}>
        <p css={etcTitle}>기타 연봉 정보</p>
        {companyData.payDesc ? <p css={infoText}>{companyData.payDesc}</p> : <p css={noData}>정보가 없습니다</p>}
      </div>
    </div>
  );
};
