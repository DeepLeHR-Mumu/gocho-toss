import { FunctionComponent } from "react";
import Image from "next/image";

import gochoLogoColor from "shared-image/global/deepLeLogo/smallColor.svg";
import mainBackground01 from "shared-image/event/renewal/main_background_01.png";

import { Layout } from "@component/layout";

import {
  backgroundBox,
  desc,
  infoBox,
  logoBox,
  subDesc,
  subInfoBox,
  subTitle,
  titleCSS,
  topLayoutCSS,
  topSectionCSS,
} from "./style";

export const PartIntro: FunctionComponent = () => {
  return (
    <section css={topSectionCSS}>
      <Layout>
        <div css={topLayoutCSS}>
          <div css={infoBox}>
            <div css={logoBox}>
              <Image src={gochoLogoColor} alt="고초대졸닷컴" layout="fixed" objectFit="contain" />
            </div>
            <h1 css={titleCSS}>더욱 편하게 돌아왔습니다.</h1>
            <p css={desc}>
              리뉴얼 서비스 <span>OPEN</span>
            </p>
          </div>
          <div css={subInfoBox}>
            <strong css={subTitle}>무엇이 달라졌을까요? 🤔</strong>
            <p css={subDesc}>
              소개하고 싶은건 진짜 많지만
              <br />
              지원자님의 시간은 소중하니까
              <br />
              간단히 준비해봤습니다!
            </p>
          </div>

          <div css={backgroundBox}>
            <Image src={mainBackground01} alt="" layout="fill" objectFit="cover" />
          </div>
        </div>
      </Layout>
    </section>
  );
};
