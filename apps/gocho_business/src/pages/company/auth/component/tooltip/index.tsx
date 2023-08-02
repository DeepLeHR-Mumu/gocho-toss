import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { TooltipProps } from "./type";

export const Tooltip: FunctionComponent<TooltipProps> = ({ children }) => (
  <div css={cssObj.container}>
    <div css={cssObj.textArea}>{children}</div>
    <div css={cssObj.arrowTip} />
  </div>
);
