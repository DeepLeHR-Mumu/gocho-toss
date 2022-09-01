import { FunctionComponent } from "react";
import Image from "next/image";

import payAvg from "@public/images/global/companyDetail/payAvg.svg";
import payStart from "@public/images/global/companyDetail/payStart.svg";

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

export const PayInfoPart: FunctionComponent<PayInfoPartProps> = ({
  companyData,
}) => {
  return (
    <div css={infoContainer}>
      <div css={flexBox}>
        <div css={infoBox}>
          <div>
            <div css={infoPicture}>
              <Image
                layout="fill"
                objectFit="contain"
                src={payAvg}
                alt="급여 복지 관련 로고"
              />
            </div>
            <h4 css={infoTitle}>평균 연봉</h4>
          </div>
          {companyData.payAvg ? (
            <div css={infoText}>
              <span css={colorPoint}>{companyData.payAvg}</span>
              만원
            </div>
          ) : (
            <div css={noData}>아직 정보가 없어요</div>
          )}
        </div>
        <div css={infoBox}>
          <div>
            <div css={infoPicture}>
              <Image
                layout="fill"
                objectFit="contain"
                src={payStart}
                alt="급여 복지 관련 로고"
              />
            </div>
            <h4 css={infoTitle}>평균 초봉</h4>
          </div>
          {companyData.payStart ? (
            <div css={infoText}>
              <span css={colorPoint}>{companyData.payStart}</span>
              만원
            </div>
          ) : (
            <div css={noData}>아직 정보가 없어요</div>
          )}
        </div>
      </div>

      <div css={flexBox}>
        <h4 css={etcTitle}>기타 연봉 정보</h4>
        <div>
          {companyData.payDesc ? (
            <div>{companyData.payDesc}</div>
          ) : (
            <div css={noData}>아직 모으고 있는 중이에요!</div>
          )}
        </div>
      </div>
    </div>
  );
};
