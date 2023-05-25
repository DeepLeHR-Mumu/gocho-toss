import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { CommonInfoBoxProps } from "./type";

export const CommonInfoBox: FunctionComponent<CommonInfoBoxProps> = ({ infoName, infoData }) => (
  <div css={cssObj.viewInfoBox}>
    <p css={cssObj.countName}>{infoName}</p>
    <p css={cssObj.count}>{infoData}</p>
  </div>
);
