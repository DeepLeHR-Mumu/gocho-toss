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
              <Image src={GDtitleSrc} alt="고초대졸닷컴" fill sizes="1" />
            </div>
            <ul css={companyInfoListCSS}>
              <li>
                <Link href={MAIN_URL}>홈</Link>
              </li>
              <li>대표 : {companyInfoObj.CEOName}</li>
              <li>{companyInfoObj.address}</li>
              <li>
                <a href={`mailto:${companyInfoObj.email}`}>EMAIL : {companyInfoObj.email}</a>
              </li>
            </ul>
            <ul css={companyInfoListCSS}>
              <li>
                <a href={`tel:${companyInfoObj.phoneNumber}`}>연락처 : {companyInfoObj.phoneVisualNumber}</a>
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
                <a href={`mailto:${companyInfoObj.marketingEmail}`}>
                  채용공고 / 광고 등록 문의 {companyInfoObj.marketingEmail}
                </a>
              </p>
            </div>
            <div css={inquiryBox}>
              <strong css={inquiryTitle}>고객센터</strong>
              <p css={notReadyText}>
                <a href={`mailto:${companyInfoObj.helpEmail}`}>help@deeplehr.com</a>
                <a href={companyInfoObj.kakaoPlus} target="_blank" rel="noreferrer">
                  카카오톡 플러스친구
                </a>

                <span css={kakaoBox}>
                  <Image src={kakaoMonoSrc} alt="카카오톡 플러스친구" fill />
                </span>
              </p>
            </div>
            <div css={inquiryBox}>
              <strong css={inquiryTitle}>인재 채용</strong>
              <p css={inquiryText}>
                <a href={`mailto:${companyInfoObj.CSEmail}`}>{companyInfoObj.CSEmail}</a>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};
