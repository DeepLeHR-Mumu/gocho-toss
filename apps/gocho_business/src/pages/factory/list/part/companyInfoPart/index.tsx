import { FiEye } from "react-icons/fi";

import { MdBookmarkBorder } from "react-icons/md";

import {
  companyInfoBox,
  companyNameCSS,
  wrapper,
  countName,
  countingInfoBox,
  flexContainer,
  logo,
  countCSS,
  viewInfoBox,
  infoBoxContainer,
  iconBox,
} from "./style";

export const CompanyInfoPart = () => (
  <section css={wrapper}>
    <div css={flexContainer}>
      <div css={logo} />
      <div css={companyInfoBox}>
        <p css={companyNameCSS}>companyName</p>
        <p>genre</p>
      </div>
    </div>
    <div css={countingInfoBox}>
      <div css={viewInfoBox}>
        <p css={countName}>기업 조회수</p>
        <div css={infoBoxContainer}>
          <div css={iconBox}>
            <FiEye />
          </div>
          <p css={countCSS}>1221412489124</p>
        </div>
      </div>
      <div>
        <p css={countName}>기업 북마크수</p>
        <div css={infoBoxContainer}>
          <div css={iconBox}>
            <MdBookmarkBorder />
          </div>
          <p css={countCSS}>323</p>
        </div>
      </div>
    </div>
  </section>
);
