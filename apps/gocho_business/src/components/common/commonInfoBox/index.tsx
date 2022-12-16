import { FunctionComponent } from "react";

import { countCSS, countName, iconBox, infoBoxContainer, viewInfoBox } from "./style";
import { CommonInfoBoxProps } from "./type";

export const CommonInfoBox: FunctionComponent<CommonInfoBoxProps> = ({ infoName, Icon, infoData }) => (
  <div css={viewInfoBox}>
    <p css={countName}>{infoName}</p>
    <div css={infoBoxContainer}>
      <div css={iconBox}>
        <Icon />
      </div>
      <p css={countCSS}>{infoData}</p>
    </div>
  </div>
);
