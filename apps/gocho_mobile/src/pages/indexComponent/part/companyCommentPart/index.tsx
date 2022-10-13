import { H2Heading } from "@component/common/atom/h2Heading";
import { Layout } from "@component/layout";
import { FunctionComponent } from "react";

import { CompanyCommentCardList } from "./component/companyCommentCardList";
import { sectionContainer } from "./style";

export const CompanyCommentPart: FunctionComponent = () => {
  return (
    <section css={sectionContainer}>
      <Layout>
        <H2Heading title="실시간 기업댓글" />
        <CompanyCommentCardList />
      </Layout>
    </section>
  );
};
