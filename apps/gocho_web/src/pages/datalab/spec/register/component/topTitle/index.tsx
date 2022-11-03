import { FunctionComponent } from "react";

import { TopTitleProps } from "./type";
import { wrapper, titleCSS, descCSS } from "./style";

export const TopTitle: FunctionComponent<TopTitleProps> = ({ title, desc }) => {
  return (
    <div css={wrapper}>
      <strong css={titleCSS}>{title}</strong>
      <p css={descCSS}>{desc}</p>
    </div>
  );
};
