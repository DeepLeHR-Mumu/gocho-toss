import { FunctionComponent } from "react";

import { HeadingH2Props } from "./type";
import { titleCSS } from "./style";

export const HeadingH1: FunctionComponent<HeadingH2Props> = ({ title }) => {
  return <h2 css={titleCSS}>{title}</h2>;
};
