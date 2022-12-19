import { FunctionComponent } from "react";
import { nameCSS, userImg, wrapper } from "./style";
import { UserInfoBoxProps } from "./type";

export const UserInfoBox: FunctionComponent<UserInfoBoxProps> = ({ name }) => (
  <div css={wrapper}>
    <div css={userImg} />
    <p css={nameCSS}>{name}</p>
  </div>
);
