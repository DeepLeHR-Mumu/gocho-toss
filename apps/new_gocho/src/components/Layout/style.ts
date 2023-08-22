import { css } from "@emotion/react";
import { MOBILE } from "shared-style/mediaQuery";

export const layout = css`
  width: 100%;
  max-width: 1112px;
  padding: 0 2rem;
  margin: auto;
  transition: padding 0.2s ease;

  ${MOBILE} {
    padding: 0 1rem;
  }
`;
