import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import gochoTextMono from "shared-image/global/deeple/textMono.svg";
import kakaoLogo from "shared-image/global/sns/kakaoLogo.svg";
import { KAKAO_CHANNEL_URL } from "shared-constant";

import { INTERNAL_URL } from "@/pages/constants";
import { useGetDeviceType } from "@/globalStates";

import { Layout } from "../../Layout";
import { cssObj } from "./style";

export const Footer: FunctionComponent = () => {
  const { isMobile } = useGetDeviceType();

  return (
    <footer css={cssObj.footer}>
      <Layout>
        <div css={cssObj.container}>
          <div css={cssObj.infoContainer}>
            <strong css={cssObj.logoBox}>
              <Image src={gochoTextMono} alt="고초대졸닷컴" fill />
            </strong>
            <div css={cssObj.infoBox}>
              <p css={cssObj.ceoInfo}>(주)디플에이치알</p>
              <div css={cssObj.contour} />
              <p css={cssObj.ceoInfo}>대표: 박중우</p>
            </div>
            <div css={cssObj.middleBox}>
              <div css={cssObj.infoBox}>
                <p css={cssObj.info}>사업자등록번호 : 331-86-02342</p>
                {!isMobile && <div css={cssObj.contour} />}
                <a css={cssObj.info} href="tel:01066808170">
                  연락처 : 010-6680-8170
                </a>
              </div>
              <p css={cssObj.info}>서울특별시 서초구 강남대로 311, 드림플러스 1714호</p>
            </div>
            {!isMobile && <p css={cssObj.info}>copyright by 주식회사 디플에이치알 All rights reserved.</p>}
          </div>
          <div>
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
              {/* TODO: 로그인이 필요한 화면인데 어떻게 처리해야 할지 논의하기 */}
              <Link
                href={{
                  pathname: INTERNAL_URL.MYPAGE,
                  query: {
                    type: "terms-of-service",
                  },
                }}
                passHref
                css={cssObj.underlineLink}
              >
                이용약관
              </Link>
              <div css={cssObj.contour} />
              <Link
                href={{
                  pathname: INTERNAL_URL.MYPAGE,
                  query: {
                    type: "privacy",
                  },
                }}
                passHref
                css={cssObj.underlineLink}
              >
                개인정보처리방침
              </Link>
            </div>
          </div>
          {isMobile && <p css={cssObj.info}>copyright by 주식회사 디플에이치알 All rights reserved.</p>}
        </div>
      </Layout>
    </footer>
  );
};
