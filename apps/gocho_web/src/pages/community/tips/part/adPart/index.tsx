import { Layout } from "@component/layout";
import { FunctionComponent } from "react";
import { partContainer } from "./style";

export const AdPart: FunctionComponent = () => {
  return (
    <section css={partContainer}>
      <Layout>
        <h2>광고 문의: 010-8545-7161</h2>
      </Layout>
    </section>
  );
};
