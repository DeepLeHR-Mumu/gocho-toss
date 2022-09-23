import { FunctionComponent } from "react";

import { Layout } from "@component/layout";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { JobAdCardList } from "../../component/jobAdCardList";
import { partContainer, title, colorPoint } from "./style";

export const AdPart: FunctionComponent = () => {
  return (
    <section css={partContainer}>
      <Layout>
        <InvisibleH2 title="오늘의 추천 공고" />
        <p css={title}>
          <span css={colorPoint}>Today</span> 오늘의 추천 공고 🙌🏻
        </p>
        {/* LATER: ~List 없애고 map으로 처리 */}
        <JobAdCardList />
      </Layout>
    </section>
  );
};
