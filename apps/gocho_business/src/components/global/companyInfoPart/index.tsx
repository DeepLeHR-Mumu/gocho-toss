import { FiEye } from "react-icons/fi";
import { MdBookmarkBorder } from "react-icons/md";

import { CommonInfoBox } from "@/components/common";

import { cssObj } from "./style";

export const CompanyInfoPart = () => (
  <section css={cssObj.wrapper}>
    <div css={cssObj.flexContainer}>
      <div css={cssObj.logo} />
      <div css={cssObj.companyInfoBox}>
        <p css={cssObj.companyNameCSS}>companyName</p>
        <p css={cssObj.companyGenreCSS}>genre</p>
      </div>
    </div>
    <div css={cssObj.countingInfoBox}>
      <CommonInfoBox infoName="기업 조회수" Icon={FiEye} infoData="23980823097495812735" />
      <CommonInfoBox infoName="기업 북마크" Icon={MdBookmarkBorder} infoData="1000010000" />
    </div>
  </section>
);
