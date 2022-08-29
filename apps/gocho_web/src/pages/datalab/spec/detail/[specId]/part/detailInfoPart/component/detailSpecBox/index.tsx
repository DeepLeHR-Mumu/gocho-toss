import { FunctionComponent } from "react";

import { specStrCSS, wrapper } from "./style";
import { DetailSpecBoxProps } from "./type";

export const DetailSpecBox: FunctionComponent<DetailSpecBoxProps> = ({
  specStr,
  wide = false,
}) => {
  if (wide === false) {
    return (
      <div css={wrapper(wide)}>
        <p css={specStrCSS}>{specStr}</p>
      </div>
    );
  }
  return (
    <div css={wrapper(wide)}>
      <p css={specStrCSS}>{specStr}</p>
    </div>
  );
};
