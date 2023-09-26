import { css } from "@emotion/react";
import { TEMP } from "shared-style/mediaQuery";

export const layout = css`
  width: 100%;
  max-width: 1144px;
  padding: 0 2rem;
  margin: auto auto 0 auto;
  transition: padding 0.2s ease;

  ${TEMP} {
    padding: 0 1rem;
  }
`;
