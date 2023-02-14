import { FiEye } from "react-icons/fi";
import Image from "next/image";
import { MdBookmarkBorder } from "react-icons/md";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useCountInfo } from "@/apis/company/useCountInfo";
import { useUserState } from "@/globalStates/useUserState";

import { cssObj } from "./style";

export const CompanyInfoPart = () => {
  const { userInfoData } = useUserState();
  const { data: countInfoData } = useCountInfo({ companyId: userInfoData?.companyId });

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
        <Image src={userInfoData.companyLogo} alt={userInfoData.companyName} layout="fill" objectFit="contain" />
      </div>
      <div css={cssObj.companyInfoBox}>
        <strong css={cssObj.companyNameCSS}>{userInfoData.companyName}</strong>
        <p css={cssObj.companyGenreCSS}>{userInfoData.companyIndustry}</p>
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
