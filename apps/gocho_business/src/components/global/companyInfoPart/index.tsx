import { FiEye } from "react-icons/fi";
import Image from "next/image";
import { MdBookmarkBorder } from "react-icons/md";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useCountInfo, useManagerProfile } from "@/apis";

import { cssObj } from "./style";

export const CompanyInfoPart = () => {
  const { data: userInfoData } = useManagerProfile();
  const { data: countInfoData } = useCountInfo({ companyId: userInfoData?.company.id });

  if (!userInfoData || !countInfoData) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  const countFormat = new Intl.NumberFormat("ko", { notation: "compact", compactDisplay: "long" });

  return (
    <section css={cssObj.wrapper}>
      <div css={cssObj.logo}>
        <Image src={userInfoData.company.logoUrl} alt={userInfoData.company.name} fill sizes="1" />
      </div>
      <div css={cssObj.companyInfoBox}>
        <strong css={cssObj.companyNameCSS}>{userInfoData.company.name}</strong>
        <p css={cssObj.companyGenreCSS}>{userInfoData.company.industry}</p>
      </div>
      <div css={cssObj.countingInfoBox}>
        <div css={cssObj.countBox}>
          <strong css={cssObj.countTitle}>기업 조회수</strong>
          <p css={cssObj.countDesc}>
            <FiEye /> <span css={cssObj.colorPoint}>{countFormat.format(countInfoData.view)}</span>
          </p>
        </div>
        <div css={cssObj.countBox}>
          <strong css={cssObj.countTitle}>기업 북마크수</strong>
          <p css={cssObj.countDesc}>
            <MdBookmarkBorder /> <span css={cssObj.colorPoint}>{countFormat.format(countInfoData.bookmark)}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
