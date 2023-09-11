import { FunctionComponent } from "react";

import { HeaderTitleProps } from "./type";
import { cssObj } from "./style";

export const HeaderTitle: FunctionComponent<HeaderTitleProps> = ({ title }) => {
  return <h1 css={cssObj.headerTitle}>{title}</h1>;
};
