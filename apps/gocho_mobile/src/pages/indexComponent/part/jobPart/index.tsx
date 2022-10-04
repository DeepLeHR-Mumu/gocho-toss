import { FunctionComponent } from "react";

import { H2Heading } from "@component/common/atom/h2Heading";
import { Layout } from "@component/layout";

import { JobCardList } from "./component/jobCardList";

import { sectionContainer } from "./style";

export const JobPart: FunctionComponent = () => {
  return (
    <section css={sectionContainer}>
      <Layout>
        <H2Heading title="실시간 채용 공고" />
        <JobCardList />
      </Layout>
    </section>
  );
};
