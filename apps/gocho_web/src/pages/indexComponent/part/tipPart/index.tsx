import { FunctionComponent } from "react";

import { useTipArr } from "shared-api/tip/useTipArr";
import { Layout } from "@component/layout";

import { LatestCard } from "./component/latestCard";
import { TipDisplay } from "./component/tipDisplay";

import { tipPartWrapper, title, tipLatestArrWrapper } from "./style";

export const TipPart: FunctionComponent = () => {
  const { data: tipArr, isError, isLoading } = useTipArr({});

  // LATER - 에러 통일화 + 만들기
  if (!tipArr || isError) {
    return <div>todo</div>;
  }

  if (isLoading) {
    return <div>todo</div>;
  }

  return (
    <section css={tipPartWrapper}>
      <Layout>
        <h2 css={title}>인기 취업 꿀팁 게시글</h2>
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
