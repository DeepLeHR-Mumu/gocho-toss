import { FiEye } from "react-icons/fi";
import Image from "next/image";
import { MdBookmarkBorder } from "react-icons/md";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useCompanyDetail } from "@/apis/company/useCompanyDetail";
import { CommonInfoBox } from "@/components/common";
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
        <CommonInfoBox infoName="기업 조회수" Icon={FiEye} infoData={countFormat.format(companyData.view)} />
        <CommonInfoBox
          infoName="기업 북마크"
          Icon={MdBookmarkBorder}
          infoData={countFormat.format(companyData.bookmark)}
        />
      </div>
    </section>
  );
};
