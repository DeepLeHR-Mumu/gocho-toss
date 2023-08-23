import { css } from "@emotion/react";
import { FiSearch } from "react-icons/fi";

import { SearchBarProps } from "./type";
import { cssObj } from "./style";

export const SearchBar = ({ border, prefix, suffix, ...props }: SearchBarProps) => (
  <div
    css={css`
      ${cssObj.wrapper}${border ? cssObj[border] : ""}
    `}
  >
    {prefix || <FiSearch css={cssObj.searchIcon} />}
    <input type="search" css={cssObj.input} {...props} />
    {suffix}
  </div>
);
