import { FunctionComponent } from "react";

import { ContainerBoxProps } from "./type";
import { marginBoxCSS } from "./style";

export const MarginBox: FunctionComponent<ContainerBoxProps> = ({ optionObj, children }) => {
  return <div css={marginBoxCSS(optionObj)}>{children}</div>;
};
