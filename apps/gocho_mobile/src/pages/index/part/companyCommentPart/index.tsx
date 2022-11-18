import { FunctionComponent } from "react";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { Layout } from "@component/layout";

import { CompanyCommentCardList } from "./component/companyCommentCardList";
import { sectionContainer, title } from "./style";

export const CompanyCommentPart: FunctionComponent = () => {
  return (
    <section css={sectionContainer}>
      <Layout>
        <InvisibleH2 title="실시간 기업댓글" />
        <strong css={title}>실시간 기업댓글</strong>
      </Layout>
      <CompanyCommentCardList />
    </section>
  );
};
