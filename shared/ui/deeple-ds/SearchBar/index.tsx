import { css } from "@emotion/react";
import { FiSearch } from "react-icons/fi";

import { SearchBarProps } from "./type";
import { cssObj } from "./style";

const SearchBar = ({ border, prefix, suffix }: SearchBarProps) => (
  <div
    css={css`
      ${cssObj.wrapper}${border ? cssObj[border] : ""}
    `}
  >
    {prefix || <FiSearch css={cssObj.searchIcon} />}
    <input type="search" css={cssObj.input} />
    {suffix}
  </div>
);

export default SearchBar;
