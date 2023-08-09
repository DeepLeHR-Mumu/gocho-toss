import { css } from "@emotion/react";

import { SearchBarProps } from "./type";
import { cssObj } from "./style";

const SearchBar = ({ border, prefix, suffix }: SearchBarProps) => (
  <div
    css={css`
      ${cssObj.wrapper}${border ? cssObj[border] : ""}
    `}
  >
    {prefix}
    <input type="search" css={cssObj.input} />
    {suffix}
  </div>
);

export default SearchBar;
