import { FunctionComponent } from "react";

import { SpecCardTitleProps } from "./type";
import { wrapper, titleCSS, descCSS } from "./style";

export const SpecCardTitle: FunctionComponent<SpecCardTitleProps> = ({ title, desc }) => {
  return (
    <div css={wrapper}>
      <h3 css={titleCSS}>{title}</h3>
      <p css={descCSS}>{desc}</p>
    </div>
  );
};
