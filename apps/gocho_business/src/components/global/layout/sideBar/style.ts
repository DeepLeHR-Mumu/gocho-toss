import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    display: flex;
    width: 18rem;
    padding: 1.5rem 0 0 0;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid #cccccc;
    position: relative;
  `,
  container: css`
    margin: 0 1rem;
  `,
  linkCSS: css`
    display: block;
    font-weight: 400;
    height: 2.5rem;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    :hover {
      background-color: ${COLORS.BLUE_SECOND70};
      font-weight: 700;
    }
  `,
  iconCSS: css`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
  `,
};
