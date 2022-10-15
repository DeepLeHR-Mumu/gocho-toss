import { FunctionComponent } from "react";
import Image from "next/image";

import kakaoMobile01 from "shared-image/event/renewal/mobile_kakao_01.png";
import kakaoMobile02 from "shared-image/event/renewal/mobile_kakao_02.png";
import kakaoMobile03 from "shared-image/event/renewal/mobile_kakao_03.png";

import { Layout } from "@component/layout";

import { desc, iconCSS, imgBox, title, wrapper } from "./style";

export const PartVOC: FunctionComponent = () => {
  return (
    <section css={wrapper}>
      <Layout>
        <strong css={title}>
          <span css={iconCSS}>🌱</span>
          고객 만족도를 더욱 높이다
        </strong>
        <p css={desc}>인사담당자들도 인정한 높은 퀄리티의 빠른 인재 매칭 시스템 그 초석을 다졌습니다 </p>
        <div css={imgBox}>
          <Image src={kakaoMobile01} alt="" objectFit="contain" layout="responsive" />
        </div>
        <div css={imgBox}>
          <Image src={kakaoMobile02} alt="" objectFit="contain" layout="responsive" />
        </div>
        <div css={imgBox}>
          <Image src={kakaoMobile03} alt="" objectFit="contain" layout="responsive" />
        </div>
      </Layout>
    </section>
  );
};
