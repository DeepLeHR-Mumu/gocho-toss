import { FunctionComponent } from "react";

import { useTipArr } from "shared-api/tip/useTipArr";
import { Layout } from "@component/layout";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { LatestCard } from "./component/latestCard";
import { TipDisplay } from "./component/tipDisplay";

import { tipPartWrapper, title, tipLatestArrWrapper, colorPoint, emptyBox } from "./style";

export const TipPart: FunctionComponent = () => {
  const { data: tipArr } = useTipArr({
    limit: 3,
  });

  if (!tipArr) {
    return (
      <section css={tipPartWrapper}>
        <Layout>
          <InvisibleH2 title="생산/기능직 취업 꿀팁" />
          <p css={title}>
            <span css={colorPoint}>인기</span> 취업 꿀팁 게시글 🍯
          </p>
          <div css={emptyBox} />
        </Layout>
      </section>
    );
  }

  return (
    <section css={tipPartWrapper}>
      <Layout>
        <InvisibleH2 title="생산/기능직 취업 꿀팁" />
        <p css={title}>
          <span css={colorPoint}>인기</span> 취업 꿀팁 게시글 🍯
        </p>

        <TipDisplay id={tipArr[0].id} />

        <div css={tipLatestArrWrapper}>
          {tipArr.map((tip) => {
            return <LatestCard key={tip.id} tipData={tip} />;
          })}
        </div>
      </Layout>
    </section>
  );
};
