import { FunctionComponent } from "react";

import { Layout } from "@component/layout";

import { StrongTitleProps } from "./type";
import { titleCSS } from "./style";

export const StrongTitle: FunctionComponent<StrongTitleProps> = ({ title }) => {
  return (
    <Layout>
      <strong css={titleCSS}>{title}</strong>
    </Layout>
  );
};
