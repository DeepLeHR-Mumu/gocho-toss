import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

import GDtitleSrc from "shared-image/global/deepLeLogo/smallMono.svg";
import { MAIN_URL, PRIVACY_URL, TOS_URL } from "shared-constant/internalURL";
import { Layout } from "@component/layout";

import { companyInfoObj } from "./constant";
import {
  footerWrapper,
  footerContainer,
  companyInfoWrapper,
  GDtitle,
  companyInfoListCSS,
  inquiryContainer,
  inquiryTitle,
  copyrightTextCSS,
  inquiryText,
  notReadyText,
} from "./style";

export const Footer: FunctionComponent = () => {
  const {
    CSEmail,
    CEOName,
    address,
    email,
    marketingEmail,
    phoneNumber,
    phoneVisualNumber,
    corporationNumber,
    copyrightText,
  } = companyInfoObj;

  return (
    <footer css={footerWrapper}>
      <Layout>
        <div css={footerContainer}>
          <div css={companyInfoWrapper}>
            <p css={GDtitle}>
              <Image layout="fill" objectFit="contain" src={GDtitleSrc} alt="고초대졸닷컴" />
            </p>
            <ul css={companyInfoListCSS}>
              <li>
                <Link href={MAIN_URL}>홈</Link>
              </li>
              <li>
                채용문의
                <Link href={`mailto:${CSEmail}`}>
                  <a>({CSEmail})</a>
                </Link>
              </li>
            </ul>
            <ul css={companyInfoListCSS}>
              <li>대표 : {CEOName}</li>
              <li>{address}</li>
              <li>
                <Link href={`mailto:${email}`}>
                  <a>EMAIL : {email}</a>
                </Link>
              </li>
            </ul>
            <ul css={companyInfoListCSS}>
              <li>
                <Link href={`tel:${phoneNumber}`}>
                  <a>연락처 : {phoneVisualNumber}</a>
                </Link>
              </li>
              <li>법인 사업자 등록번호 : {corporationNumber}</li>
              <li>
                <Link href={TOS_URL}>이용약관</Link>
              </li>
              <li>
                <Link href={PRIVACY_URL}>개인정보 처리방침</Link>
              </li>
            </ul>
            <p css={copyrightTextCSS}>{copyrightText}</p>
          </div>
          <div css={inquiryContainer}>
            <p css={inquiryTitle}>광고 문의</p>
            <p css={inquiryText}>
              <Link href={`mailto:${marketingEmail}`}>
                <a>기업공고 / 광고 등록 문의 ({marketingEmail})</a>
              </Link>
            </p>
            <p css={inquiryTitle}>고객센터</p>
            <p css={notReadyText}>게시 준비중 입니다.</p>
          </div>
        </div>
      </Layout>
    </footer>
  );
};
