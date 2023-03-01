import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

import GDtitleSrc from "shared-image/global/deepLeLogo/smallMono.svg";
import { MAIN_URL, PRIVACY_URL, TOS_URL } from "shared-constant/internalURL";

import { companyInfoObj } from "shared-constant/deepleInfo";
import { footerWrapper, linkContainer, linkText, title, emailText, logo, infoContainer, text } from "./style";

export const Footer: FunctionComponent = () => {
  return (
    <footer css={footerWrapper}>
      <ul css={linkContainer}>
        <li css={linkText}>
          <Link href={TOS_URL}>이용약관</Link>
        </li>
        <li css={text}>|</li>
        <li css={linkText}>
          <Link href={PRIVACY_URL}>개인정보처리방침</Link>
        </li>
      </ul>
      <strong css={title}>광고문의</strong>
      <div css={emailText}>
        <a href={`mailto:${companyInfoObj.marketingEmail}`}>채용공고 / 광고등록 문의 {companyInfoObj.marketingEmail}</a>
      </div>
      <strong css={title}>고객센터</strong>
      <div css={emailText}>
        <a href={`mailto:${companyInfoObj.helpEmail}`} target="_blank" rel="noreferrer">
          {companyInfoObj.helpEmail}
        </a>
        {" | "}
        <a href={companyInfoObj.kakaoPlus} target="_blank" rel="noreferrer">
          카카오톡 플러스친구
        </a>
      </div>
      <Link href={MAIN_URL} passHref css={logo}>
        <Image fill src={GDtitleSrc} alt="" />
      </Link>
      <ul css={infoContainer}>
        <li>{companyInfoObj.address}</li>
        <li>
          대표 {companyInfoObj.CEOName} |{" "}
          <a href={`tel:${companyInfoObj.phoneNumber}`}>{companyInfoObj.phoneVisualNumber}</a>
        </li>
        <li>사업자 등록번호 {companyInfoObj.corporationNumber}</li>
        <li>직업정보제공사업 신고번호 {companyInfoObj.jobInfoNumber}</li>
      </ul>
      <p css={text}>{companyInfoObj.copyrightText}</p>
    </footer>
  );
};
