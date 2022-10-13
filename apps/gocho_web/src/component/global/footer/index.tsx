import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

import GDtitleSrc from "shared-image/global/deepLeLogo/textMono.png";
import kakaoMonoSrc from "shared-image/global/sns/kakaoMono.svg";
import { MAIN_URL, PRIVACY_URL, TOS_URL } from "shared-constant/internalURL";
import { Layout } from "@component/layout";

import { companyInfoObj } from "shared-constant/deepleInfo";
import {
  footerWrapper,
  footerContainer,
  companyInfoWrapper,
  GDtitleBox,
  companyInfoListCSS,
  inquiryContainer,
  inquiryTitle,
  copyrightTextCSS,
  inquiryText,
  notReadyText,
  kakaoBox,
  inquiryBox,
} from "./style";

export const Footer: FunctionComponent = () => {
  return (
    <footer css={footerWrapper}>
      <Layout>
        <div css={footerContainer}>
          <div css={companyInfoWrapper}>
            <div css={GDtitleBox}>
              <Image layout="fill" objectFit="cover" src={GDtitleSrc} alt="고초대졸닷컴" />
            </div>
            <ul css={companyInfoListCSS}>
              <li>
                <Link href={MAIN_URL}>홈</Link>
              </li>
              <li>
                채용문의
                <Link href={`mailto:${companyInfoObj.CSEmail}`}>
                  <a>{companyInfoObj.CSEmail}</a>
                </Link>
              </li>
            </ul>
            <ul css={companyInfoListCSS}>
              <li>대표 : {companyInfoObj.CEOName}</li>
              <li>{companyInfoObj.address}</li>
              <li>
                <Link href={`mailto:${companyInfoObj.email}`}>
                  <a>EMAIL : {companyInfoObj.email}</a>
                </Link>
              </li>
            </ul>
            <ul css={companyInfoListCSS}>
              <li>
                <Link href={`tel:${companyInfoObj.phoneNumber}`}>
                  <a>연락처 : {companyInfoObj.phoneVisualNumber}</a>
                </Link>
              </li>
              <li>법인 사업자 등록번호 : {companyInfoObj.corporationNumber}</li>
              <li>
                <Link href={TOS_URL}>이용약관</Link>
              </li>
              <li>
                <Link href={PRIVACY_URL}>개인정보 처리방침</Link>
              </li>
            </ul>
            <p css={copyrightTextCSS}>{companyInfoObj.copyrightText}</p>
          </div>
          <div css={inquiryContainer}>
            <div css={inquiryBox}>
              <strong css={inquiryTitle}>광고 문의</strong>
              <p css={inquiryText}>
                <Link href={`mailto:${companyInfoObj.marketingEmail}`}>
                  <a>채용공고 / 광고 등록 문의 {companyInfoObj.marketingEmail}</a>
                </Link>
              </p>
            </div>
            <div css={inquiryBox}>
              <strong css={inquiryTitle}>고객센터</strong>
              <p css={notReadyText}>
                <Link href={`mailto:${companyInfoObj.helpEmail}`}>help@deeplehr.com</Link>
                <Link href={companyInfoObj.kakaoPlus} passHref>
                  <a target="_blank">카카오톡 플러스친구</a>
                </Link>

                <span css={kakaoBox}>
                  <Image src={kakaoMonoSrc} alt="카카오톡 플러스친구" layout="fill" objectFit="contain" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};
