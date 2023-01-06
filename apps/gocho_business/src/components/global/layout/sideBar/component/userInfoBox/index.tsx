import { FunctionComponent } from "react";

import { UserInfoBoxProps } from "./type";
import { cssObj } from "./style";

export const UserInfoBox: FunctionComponent<UserInfoBoxProps> = ({ name }) => (
  <div css={cssObj.wrapper}>
    <p css={cssObj.name}>
      <span css={cssObj.profile}>{name[0]}</span>
      {name}
    </p>
  </div>
);
