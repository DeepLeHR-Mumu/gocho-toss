import { FiEye } from "react-icons/fi";
import Image from "next/image";
import { MdBookmarkBorder } from "react-icons/md";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useCompanyDetail } from "@/apis/company/useCompanyDetail";
import { useUserState } from "@/globalStates/useUserState";

import { cssObj } from "./style";

export const CompanyInfoPart = () => {
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

  return (
    <section css={cssObj.wrapper}>
      <div css={cssObj.basicInfoBox}>
        <div css={cssObj.logo}>
          <Image src={companyData.logo} alt={companyData.name} layout="fill" objectFit="contain" />
        </div>
        <div css={cssObj.companyInfoBox}>
          <p css={cssObj.companyNameCSS}>{companyData.name}</p>
          <p css={cssObj.companyGenreCSS}>{companyData.industry}</p>
        </div>
      </div>
      <div css={cssObj.countingInfoBox}>
        <div css={cssObj.countBox}>
          <strong css={cssObj.countTitle}>기업 조회수</strong>
          <p css={cssObj.countDesc}>
            <FiEye /> <span css={cssObj.colorPoint}>{countFormat.format(companyData.view)}</span>
          </p>
        </div>
        <div css={cssObj.countBox}>
          <strong css={cssObj.countTitle}>기업 북마크수</strong>
          <p css={cssObj.countDesc}>
            <MdBookmarkBorder /> <span css={cssObj.colorPoint}>{countFormat.format(companyData.bookmark)}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
