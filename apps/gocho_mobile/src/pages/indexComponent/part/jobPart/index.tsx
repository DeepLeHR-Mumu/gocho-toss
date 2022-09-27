import { FunctionComponent } from "react";

import { H2Heading } from "@component/common/atom/h2Heading";
import { Layout } from "@component/layout";

import { sectionContainer } from "./style";

export const JobPart: FunctionComponent = () => {
  return (
    <section css={sectionContainer}>
      <Layout>
        <H2Heading title="실시간 채용 공고" />
        <p>공고 카드 들어갈 곳 ^___^</p>
      </Layout>
    </section>
  );
};
