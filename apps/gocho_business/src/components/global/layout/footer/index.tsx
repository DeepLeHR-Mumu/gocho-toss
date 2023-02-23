import { FunctionComponent } from "react";
import Image from "next/image";

import gochoTextMono from "shared-image/global/deepLeLogo/textMono.svg";

import { FOOTER_INFO } from "./constants";
import { cssObj } from "./style";

export const Footer: FunctionComponent = () => (
  <footer css={cssObj.wrapper}>
    <div css={cssObj.container}>
      <div css={cssObj.infoBox}>
        <strong css={cssObj.titleBox}>
          <Image src={gochoTextMono} alt="고초대졸닷컴" layout="fill" objectFit="contain" />
        </strong>
        <p css={cssObj.desc}>{FOOTER_INFO.address}</p>
        <p css={cssObj.desc}>
          <span>{`대표 ${FOOTER_INFO.ceo}`}</span>
          <a href={`tel:${FOOTER_INFO.telNumber}`}>{FOOTER_INFO.telView}</a>
        </p>
        <p css={cssObj.desc}>
          <span>{`사업자 등록번호 ${FOOTER_INFO.businessNumber}`}</span>
          <span>{`직업정보제공사업 신고번호 ${FOOTER_INFO.reportNumber}`}</span>
        </p>
        <p css={cssObj.copyRight}>{FOOTER_INFO.copyRight}</p>
      </div>
      <div css={cssObj.customBox}>
        <strong css={cssObj.title}>고객센터</strong>
        <div css={cssObj.helpBox}>
          <a css={cssObj.linkCSS} href={`mailto:${FOOTER_INFO.helpEmail}`}>
            {FOOTER_INFO.helpEmail}
          </a>
        </div>
      </div>
    </div>
  </footer>
);
