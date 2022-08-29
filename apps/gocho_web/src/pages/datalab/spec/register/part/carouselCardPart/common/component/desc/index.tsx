import { FunctionComponent } from "react";

import { DescProps } from "./type";
import { descCSS } from "./style";

export const Desc: FunctionComponent<DescProps> = ({ desc }) => {
  return <p css={descCSS}>{desc}</p>;
};
