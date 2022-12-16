import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { CommonInfoBoxProps } from "./type";

export const CommonInfoBox: FunctionComponent<CommonInfoBoxProps> = ({ infoName, Icon, infoData }) => (
  <div css={cssObj.viewInfoBox}>
    <p css={cssObj.countName}>{infoName}</p>
    <div css={cssObj.infoBoxContainer}>
      <div css={cssObj.iconBox}>
        <Icon />
      </div>
      <p css={cssObj.countCSS}>{infoData}</p>
    </div>
  </div>
);
