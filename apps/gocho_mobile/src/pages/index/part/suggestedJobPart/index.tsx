import { FunctionComponent } from "react";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { Layout } from "@component/layout";

import { SuggestedJobCardList } from "./component/suggestedJobCardList";
import { sectionContainer, title } from "./style";

export const SuggestedJobPart: FunctionComponent = () => {
  return (
    <section css={sectionContainer}>
      <Layout>
        <InvisibleH2 title="오늘의 추천공고" />
        <strong css={title}>오늘의 추천공고</strong>
        <SuggestedJobCardList />
      </Layout>
    </section>
  );
};
