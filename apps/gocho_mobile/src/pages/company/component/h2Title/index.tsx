import { Layout } from "@component/layout";
import { FunctionComponent } from "react";
import { h2Title } from "./style";

export interface H2TitleProps {
  titleStr: string;
}

export const H2Title: FunctionComponent<H2TitleProps> = ({ titleStr }) => {
  return (
    <Layout>
      <h2 css={h2Title}>{titleStr}</h2>
    </Layout>
  );
};
