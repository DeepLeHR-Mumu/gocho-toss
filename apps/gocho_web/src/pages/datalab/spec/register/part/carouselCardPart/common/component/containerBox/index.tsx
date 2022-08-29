import { FunctionComponent } from "react";

import { ContainerBoxProps } from "./type";
import { containerBoxCSS } from "./style";

export const ContainerBox: FunctionComponent<ContainerBoxProps> = ({
  optionObj,
  children,
}) => {
  return <div css={containerBoxCSS(optionObj)}>{children}</div>;
};
