import { forwardRef, ForwardRefRenderFunction } from "react";
import { css } from "@emotion/react";
import { FiSearch } from "react-icons/fi";

import { SearchBarProps } from "./type";
import { cssObj } from "./style";

const SearchBar: ForwardRefRenderFunction<HTMLInputElement, SearchBarProps> = (
  { border, prefix, suffix, color, ...props },
  ref
) => (
  <div
    css={css`
      ${cssObj.wrapper}${border ? cssObj[border] : ""}${color ? cssObj[color] : ""}
    `}
  >
    {prefix || <FiSearch css={cssObj.searchIcon} />}
    <input type="search" css={cssObj.input} {...props} ref={ref} />
    {suffix}
  </div>
);

export default forwardRef(SearchBar);
