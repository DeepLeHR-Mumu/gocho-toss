import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

import GDtitleSrc from "shared-image/global/deepLeLogo/smallMono.svg";
import { MAIN_URL, PRIVACY_URL, TOS_URL } from "shared-constant/internalURL";

import { companyInfoObj } from "./constant";
import { footerWrapper, linkContainer, linkText, title, emailText, logo, infoContainer, text } from "./style";

export const Footer: FunctionComponent = () => {
  const {
    CEOName,
    address,
    marketingEmail,
    helpEmail,
    phoneNumber,
    phoneVisualNumber,
    corporationNumber,
    jobInfoNumber,
    copyrightText,
  } = companyInfoObj;

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
      <h3 css={title}>광고문의</h3>
      <p css={emailText}>
        <Link href={`mailto:${marketingEmail}`}>
          <a>채용공고 / 광고등록 문의 {marketingEmail}</a>
        </Link>
      </p>
      <h3 css={title}>고객센터</h3>
      <p css={emailText}>{helpEmail} | 카카오톡 플러스친구</p>
      <h2 css={logo}>
        <Link href={MAIN_URL} passHref>
          <Image layout="fill" objectFit="contain" src={GDtitleSrc} alt="고초대졸닷컴" />
        </Link>
      </h2>
      <ul css={infoContainer}>
        <li>{address}</li>
        <li>
          대표 {CEOName} |{" "}
          <Link href={`tel:${phoneNumber}`}>
            <a>{phoneVisualNumber}</a>
          </Link>
        </li>
        <li>사업자 등록번호 {corporationNumber}</li>
        <li>직업정보제공사업 신고번호 {jobInfoNumber}</li>
      </ul>
      <p css={text}>{copyrightText}</p>
    </footer>
  );
};
