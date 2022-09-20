import { FunctionComponent } from "react";

import { InvisibleH2Props } from "./type";
import { titleCSS } from "./style";

export const InvisibleH2: FunctionComponent<InvisibleH2Props> = ({ title }) => {
  return <h2 css={titleCSS}>{title}</h2>;
};
