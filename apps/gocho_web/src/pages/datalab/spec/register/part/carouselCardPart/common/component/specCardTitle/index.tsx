import { FunctionComponent } from "react";

import { SpecCardTitleProps } from "./type";
import { wrapper, titleCSS, descCSS } from "./style";

export const SpecCardTitle: FunctionComponent<SpecCardTitleProps> = ({ title, desc }) => {
  return (
    <div css={wrapper}>
      <strong css={titleCSS}>{title}</strong>
      <p css={descCSS}>{desc}</p>
    </div>
  );
};
