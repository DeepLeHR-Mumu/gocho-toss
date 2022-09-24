import { H2Heading } from "@component/common/atom/h2Heading";
import { Layout } from "@component/layout";
import { FunctionComponent } from "react";

export const SuggestedPart: FunctionComponent = () => {
  return (
    <section>
      <Layout>
        <H2Heading title="오늘의 추천공고" />
      </Layout>
    </section>
  );
};
