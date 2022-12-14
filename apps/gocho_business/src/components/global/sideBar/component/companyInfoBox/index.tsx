import { FunctionComponent } from "react";

import { imageBox, nameCSS, wrapper } from "./style";

export const CompanyInfoBox: FunctionComponent = () => (
  <div css={wrapper}>
    <div css={imageBox} />
    <p css={nameCSS}>회사명</p>
  </div>
);
