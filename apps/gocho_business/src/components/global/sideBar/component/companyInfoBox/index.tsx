import { FunctionComponent } from "react";

import { imageBox, nameCSS, wrapper } from "./style";
import { CompanyInfoBoxProps } from "./type";

export const CompanyInfoBox: FunctionComponent<CompanyInfoBoxProps> = ({ name }) => (
  <div css={wrapper}>
    <div css={imageBox} />
    <p css={nameCSS}>{name}</p>
  </div>
);
