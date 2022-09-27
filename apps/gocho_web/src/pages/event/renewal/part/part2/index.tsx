import { FunctionComponent } from "react";

import { Layout } from "@component/layout";

import { wrapper, title, desc, listDesc, circleCSS } from "./style";

export const Part2: FunctionComponent = () => {
  return (
    <section css={wrapper}>
      <Layout>
        <strong css={title}>생산/기능직 전문 취업 플랫폼으로 자리잡다 📝</strong>
        <p css={desc}>고초대졸닷컴은 생산/기능직에 특화된 사용성을 위해 매일 고민합니다 🤔</p>
        <p css={listDesc}>
          120만개의 채용공고📑
          <br />
          40만개의 공장정보🏭
          <br />
          20만개의 기업정보🏢
          <br />
          <span css={circleCSS} />
          <span css={circleCSS} />
          <span css={circleCSS} />
          엄선한 알짜 채용공고 소식까지🔖
        </p>
      </Layout>
    </section>
  );
};
