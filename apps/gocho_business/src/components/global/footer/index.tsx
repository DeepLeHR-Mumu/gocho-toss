import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import gochoTextMono from "shared-image/global/deeple/textMono.svg";
import kakaoLogo from "shared-image/global/sns/kakaoLogo.svg";
import { KAKAO_CHANNEL_URL } from "shared-constant";

import { INTERNAL_URL } from "@/constants";
import { cssObj } from "./style";

export const Footer: FunctionComponent = () => (
  <footer css={cssObj.footer}>
    <div css={cssObj.container}>
      <div css={cssObj.infoContainer}>
        <strong css={cssObj.logoBox}>
          <Image src={gochoTextMono} alt="고초대졸닷컴" fill />
          {/* <GochoTextMono /> */}
        </strong>
        <div css={cssObj.infoBox}>
          <p css={cssObj.info}>(주)디플에이치알</p>
          <div css={cssObj.contour} />
          <p css={cssObj.info}>대표: 박중우</p>
        </div>
        <div css={cssObj.middleBox}>
          <div css={cssObj.infoBox}>
            <p css={cssObj.info}>사업자등록번호 : 331-86-02342</p>
            <div css={cssObj.contour} />
            <a css={cssObj.info} href="tel:01066808170">
              연락처 : 010-6680-8170
            </a>
          </div>
          <p css={cssObj.info}>서울특별시 서초구 강남대로 311, 드림플러스 1203호/ 1204호</p>
        </div>
        <p css={cssObj.info}>copyright by 주식회사 디플에이치알 All rights reserved.</p>
      </div>
      <div css={cssObj.contactContainer}>
        <div css={cssObj.contactBox}>
          <strong css={cssObj.contactTitle}>광고문의</strong>
          <a css={cssObj.link} href="mailto:register@deeplehr.com">
            채용공고 · 광고 등록 register@deeplehr.com
          </a>
        </div>
        <div css={cssObj.contactBox}>
          <strong css={cssObj.contactTitle}>고객센터</strong>
          <a css={cssObj.link} href="mailto:cs@deeplehr.com">
            cs@deeplehr.com
          </a>
          <a css={cssObj.link} href={KAKAO_CHANNEL_URL} target="_blank" rel="noreferrer">
            <span css={cssObj.kakaoLogo}>
              <Image src={kakaoLogo} alt="카카오톡 플러스친구" fill sizes="1" />
            </span>
            카카오톡 플러스친구
          </a>
        </div>
        <div css={cssObj.linkBox}>
          <Link href={INTERNAL_URL.HELP} passHref css={cssObj.underlineLink}>
            이용약관
          </Link>
          <div css={cssObj.contour} />
          <Link href={INTERNAL_URL.HELP} passHref css={cssObj.underlineLink}>
            개인정보처리방침
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
