import { FunctionComponent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import nozoTrue from "shared-image/page/companyDetail/nozo_true_icon.svg";
import nozoFalse from "shared-image/page/companyDetail/nozo_false_icon.svg";
import { InvisibleH3 } from "shared-ui/common/atom/invisibleH3";
import { dateConverter } from "shared-util/date";
import { useCompanyDetail } from "shared-api/company";

import { KakaoMap } from "../../component/kakaoMap";
import { infoContainer, flexBox, infoTitle, info, nozoImage, infoBox, pointInfo, wrapper } from "./style";

export const BasicInfoPart: FunctionComponent = () => {
  const router = useRouter();
  const { data: companyDetailData } = useCompanyDetail({ companyId: Number(router.query.companyId) });

  if (!companyDetailData) {
    return <section css={wrapper} />;
  }

  const { year, month, date } = dateConverter(companyDetailData.foundDate);
  return (
    <section css={infoContainer}>
      <InvisibleH3 title="일반 정보" />
      <div css={infoBox}>
        <div css={flexBox}>
          <strong css={infoTitle}>업종</strong>
          <p css={info}>{companyDetailData.industry}</p>
        </div>
        <div css={flexBox}>
          <strong css={infoTitle}>기업형태</strong>
          <p css={info}>{companyDetailData.size}</p>
        </div>
        <div css={flexBox}>
          <strong css={infoTitle}>설립연도</strong>
          <p css={info}>{`${year}년 ${month}월 ${date}일`}</p>
        </div>
        <div css={flexBox}>
          <strong css={infoTitle}>사원수</strong>
          <p css={info}>
            <span css={pointInfo}>{companyDetailData.employeeNumber.toLocaleString("ko-KR")}</span>명
          </p>
        </div>
        <div css={flexBox}>
          <strong css={infoTitle}>기업 한줄소개</strong>
          <p css={info}>{companyDetailData.intro}</p>
        </div>
        <div css={flexBox}>
          <strong css={infoTitle}>기업 주소</strong>
          <p css={info}>{companyDetailData.address}</p>
        </div>
        <div css={flexBox}>
          <strong css={infoTitle}>노조여부</strong>
          <p css={info}>
            {companyDetailData.nozo.exists ? "노조 있음" : "노조 없음"}
            <span css={nozoImage}>
              <Image
                src={companyDetailData.nozo.exists ? nozoTrue : nozoFalse}
                alt={companyDetailData.nozo.exists ? "노조 있음" : "노조 없음"}
                fill
              />
            </span>
          </p>
        </div>
      </div>
      <KakaoMap address={companyDetailData.address} />
    </section>
  );
};
