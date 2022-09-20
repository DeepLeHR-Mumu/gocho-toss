import { FunctionComponent } from "react";

import { InvisibleH1Props } from "./type";
import { titleCSS } from "./style";

export const InvisibleH1: FunctionComponent<InvisibleH1Props> = ({ title }) => {
  return <h1 css={titleCSS}>{title}</h1>;
};
