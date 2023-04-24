import { FunctionComponent, useEffect, useState } from "react";

import { useTipArr } from "shared-api/tip/useTipArr";
import { Layout } from "@component/layout";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { LatestCard } from "./component/latestCard";
import { TipDisplay } from "./component/tipDisplay";

import { TipDef } from "./type";
import { tipPartWrapper, title, tipLatestArrWrapper, colorPoint, emptyBox } from "./style";

export const TipPart: FunctionComponent = () => {
  const [currentTip, setCurrentTip] = useState<TipDef | null>(null);

  const { data: tipArr } = useTipArr({
    size: 3,
  });

  useEffect(() => {
    if (tipArr) {
      setCurrentTip(tipArr[0]);
    }
  }, [tipArr]);

  if (!tipArr || !currentTip) {
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

        <TipDisplay currentTip={currentTip} />

        <div css={tipLatestArrWrapper}>
          {tipArr.map((tip) => {
            return (
              <LatestCard
                key={tip.id}
                tipData={tip}
                currentTipObj={{
                  setCurrentTip,
                  currentTip,
                }}
              />
            );
          })}
        </div>
      </Layout>
    </section>
  );
};
