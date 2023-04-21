import { FunctionComponent } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { MdBookmarkBorder } from "react-icons/md";
import { FiEye } from "react-icons/fi";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useCompanyDetail, useCountInfo, useManagerProfile } from "@/apis";

import { cssObj } from "./style";

export const CompanyInfoPart: FunctionComponent = () => {
  const { data: userInfoData } = useManagerProfile();
  const { data: companyData } = useCompanyDetail({ companyId: userInfoData?.company.id });
  const { data: countInfoData } = useCountInfo({ companyId: userInfoData?.company.id });

  if (!userInfoData || !companyData || !countInfoData) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  const countFormat = new Intl.NumberFormat("ko", { notation: "compact", compactDisplay: "long" });

  return (
    <section css={cssObj.wrapper} data-testid="company/edit/CompanyInfoPart">
      <div css={cssObj.topBox}>
        <div css={cssObj.logoBox}>
          <Image src={companyData.logo} alt={companyData.name} fill sizes="1" />
        </div>
        <div css={cssObj.titleBox}>
          <strong css={cssObj.companyTitle}>{companyData.name}</strong>
          <p css={cssObj.companyIndustry}>{companyData.industry}</p>
        </div>
        <div css={cssObj.countBox}>
          <div css={cssObj.countLine}>
            <strong css={cssObj.countTitle}>기업 조회수</strong>
            <p css={cssObj.countDesc}>
              <FiEye /> <span css={cssObj.colorPoint}>{countFormat.format(countInfoData.view)}</span>
            </p>
          </div>
          <div css={cssObj.countLine}>
            <strong css={cssObj.countTitle}>기업 북마크수</strong>
            <p css={cssObj.countDesc}>
              <MdBookmarkBorder /> <span css={cssObj.colorPoint}>{countFormat.format(countInfoData.bookmark)}</span>
            </p>
          </div>
        </div>
      </div>
      <ul css={cssObj.bottomBox}>
        <li>
          <strong css={cssObj.subTitle}>기업 형태</strong>
          <p css={cssObj.subDesc}>{companyData.size}</p>
        </li>
        <li>
          <strong css={cssObj.subTitle}>설립일</strong>
          <p css={cssObj.subDesc}>{dayjs(companyData.foundNumber).format("YYYYMMSS")}</p>
        </li>
        <li>
          <strong css={cssObj.subTitle}>사업자 번호</strong>
          <p css={cssObj.subDesc}>{companyData.businessNumber}</p>
        </li>
      </ul>
    </section>
  );
};
