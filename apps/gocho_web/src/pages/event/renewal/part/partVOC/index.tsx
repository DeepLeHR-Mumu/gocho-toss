import { FunctionComponent } from "react";
import Image from "next/image";

import kakaoWeb from "shared-image/event/renewal/kakao_web.png";

import { Layout } from "@component/layout";

import { desc, imgBox, title, wrapper } from "./style";

export const PartVOC: FunctionComponent = () => {
  return (
    <section css={wrapper}>
      <Layout>
        <strong css={title}>고객 만족도를 더욱 높이다 🌱</strong>
        <p css={desc}>인사담당자들도 인정한 높은 퀄리티의 빠른 인재 매칭 시스템 그 초석을 다졌습니다 </p>
        <div css={imgBox}>
          <Image src={kakaoWeb} alt="" objectFit="contain" layout="fill" />
        </div>
      </Layout>
    </section>
  );
};
