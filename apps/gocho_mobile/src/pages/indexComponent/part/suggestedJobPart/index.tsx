import { H2Heading } from "@component/common/atom/h2Heading";
import { Layout } from "@component/layout";
import { FunctionComponent } from "react";

import { SuggestedJobCardList } from "./component/suggestedJobCardList";
import { sectionContainer } from "./style";

export const SuggestedJobPart: FunctionComponent = () => {
  return (
    <section css={sectionContainer}>
      <Layout>
        <H2Heading title="오늘의 추천공고" />
        <SuggestedJobCardList />
      </Layout>
    </section>
  );
};
