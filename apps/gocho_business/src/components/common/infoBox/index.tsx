import { FunctionComponent } from "react";
import { IconType } from "react-icons";

import { countCSS, countName, iconBox, infoBoxContainer, viewInfoBox } from "./style";

interface CommonInfoBoxProps {
  infoName: string;
  infoData: string;
  Icon: IconType;
}

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
