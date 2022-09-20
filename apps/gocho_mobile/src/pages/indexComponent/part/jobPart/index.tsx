import { FunctionComponent } from "react";

import { H2Heading } from "@component/atom/h2Heading";
import { Layout } from "@component/layout";

export const JobPart: FunctionComponent = () => {
  return (
    <Layout>
      <section>
        <H2Heading title="실시간 채용 공고" />
        <div>카드</div>
      </section>
    </Layout>
  );
};
