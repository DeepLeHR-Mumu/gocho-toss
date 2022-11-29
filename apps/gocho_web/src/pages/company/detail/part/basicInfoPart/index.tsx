import { FunctionComponent } from "react";
import Image from "next/image";

import nozoTrue from "shared-image/page/companyDetail/nozo_true_icon.svg";
import nozoFalse from "shared-image/page/companyDetail/nozo_false_icon.svg";
import { dateConverter } from "shared-util/date";

import { KakaoMap } from "@pages/company/component/kakaoMap";
import { InvisibleH3 } from "shared-ui/common/atom/invisibleH3";

import { BasicInfoPartProps } from "./type";
import { infoContainer, flexBox, infoTitle, info, nozoImage, infoBox, pointInfo } from "./style";

export const BasicInfoPart: FunctionComponent<BasicInfoPartProps> = ({ companyData }) => {
  const { year, month, date } = dateConverter(companyData.foundDate);

  return (
    <section css={infoContainer}>
      <InvisibleH3 title="일반 정보" />
      <div css={infoBox}>
        <div css={flexBox}>
          <strong css={infoTitle}>업종</strong>
          <p css={info}>{companyData.industry}</p>
        </div>
        <div css={flexBox}>
          <strong css={infoTitle}>기업형태</strong>
          <p css={info}>{companyData.size}</p>
        </div>
        <div css={flexBox}>
          <strong css={infoTitle}>설립연도</strong>
          <p css={info}>{`${year}년 ${month}월 ${date}일`}</p>
        </div>
        <div css={flexBox}>
          <strong css={infoTitle}>사원수</strong>
          <p css={info}>
            <span css={pointInfo}>{companyData.employeeNumber.toLocaleString("ko-KR")}</span>명
          </p>
        </div>
        <div css={flexBox}>
          <strong css={infoTitle}>기업 한줄소개</strong>
          <p css={info}>{companyData.intro}</p>
        </div>
        <div css={flexBox}>
          <strong css={infoTitle}>기업 주소</strong>
          <p css={info}>{companyData.address}</p>
        </div>
        <div css={flexBox}>
          <strong css={infoTitle}>노조여부</strong>
          <p css={info}>
            {companyData.nozo.exists ? "노조 있음" : "노조 없음"}
            <div css={nozoImage}>
              <Image
                src={companyData.nozo.exists ? nozoTrue : nozoFalse}
                alt={companyData.nozo.exists ? "노조 있음" : "노조 없음"}
                objectFit="contain"
                layout="fill"
              />
            </div>
          </p>
        </div>
      </div>
      <KakaoMap address={companyData.address} />
    </section>
  );
};
