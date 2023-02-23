import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    width: 18rem;
    padding: 1.5rem 0 0 0;
    border-right: 1px solid ${COLORS.GRAY80};
    background-color: ${COLORS.GRAY100};
    position: fixed;
    z-index: 50;
    height: 100vh;
  `,

  marginContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `,

  container: css`
    margin: 0 1rem;
  `,
  linkCSS: (isCurrentRoute: boolean) => css`
    font-weight: ${isCurrentRoute ? 700 : 400};
    height: 2.5rem;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.375rem;
    background-color: ${isCurrentRoute && COLORS.BLUE_SECOND70};
    :hover {
      background-color: ${COLORS.GRAY80};
    }
    > svg {
      height: 1.25rem;
      width: auto;
      margin-right: 0.75rem;
    }
  `,
};
