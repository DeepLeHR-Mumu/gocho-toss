import { H2Heading } from "@component/common/atom/h2Heading";
import { Layout } from "@component/layout";
import { FunctionComponent } from "react";

import { sectionContainer } from "./style";

export const SuggestedJobPart: FunctionComponent = () => {
  return (
    <section css={sectionContainer}>
      <Layout>
        <H2Heading title="오늘의 추천공고" />
        <p>추천 공고 들어갈 곳 ^___^</p>
      </Layout>
    </section>
  );
};
