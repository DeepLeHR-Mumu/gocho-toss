import { FunctionComponent } from "react";
import Image from "next/image";
import { MdBookmarkBorder } from "react-icons/md";
import { FiEye } from "react-icons/fi";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useCompanyDetail } from "@/apis/company/useCompanyDetail";
import { useUserState } from "@/globalStates/useUserState";

import { cssObj } from "./style";

export const CompanyInfoPart: FunctionComponent = () => {
  const { userInfoData } = useUserState();
  const { data: companyData } = useCompanyDetail({ companyId: userInfoData?.companyId });

  if (!userInfoData || !companyData) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  const countFormat = new Intl.NumberFormat("ko", { notation: "compact", compactDisplay: "long" });
  const foundDate = new Intl.DateTimeFormat("ko", { dateStyle: "long" });

  return (
    <section css={cssObj.wrapper} data-testid="company/edit/CompanyInfoPart">
      <div css={cssObj.topBox}>
        <div css={cssObj.logoBox}>
          <Image src={companyData.logo} alt={companyData.name} layout="fill" objectFit="contain" draggable={false} />
        </div>
        <div css={cssObj.titleBox}>
          <strong css={cssObj.companyTitle}>{companyData.name}</strong>
          <p css={cssObj.companyIndustry}>{companyData.industry}</p>
        </div>
        <div css={cssObj.countBox}>
          <div css={cssObj.countLine}>
            <strong css={cssObj.countTitle}>기업 조회수</strong>
            <p css={cssObj.countDesc}>
              <FiEye /> <span css={cssObj.colorPoint}>{countFormat.format(companyData.view)}</span>
            </p>
          </div>
          <div css={cssObj.countLine}>
            <strong css={cssObj.countTitle}>기업 북마크수</strong>
            <p css={cssObj.countDesc}>
              <MdBookmarkBorder /> <span css={cssObj.colorPoint}>{countFormat.format(companyData.bookmark)}</span>
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
          <p css={cssObj.subDesc}>{foundDate.format(companyData.foundNumber)}</p>
        </li>
        <li>
          <strong css={cssObj.subTitle}>사업자 번호</strong>
          <p css={cssObj.subDesc}>{companyData.businessNumber}</p>
        </li>
      </ul>
    </section>
  );
};
