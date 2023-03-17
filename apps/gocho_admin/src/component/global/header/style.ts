import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  header: css`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    border-bottom: 1px solid ${COLORS.GRAY80};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    padding: 0.5rem 2rem;
    background-color: ${COLORS.GRAY100};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  logo: css`
    position: relative;
    width: 7.5rem;
    height: 2.5rem;

    > img {
      object-fit: contain;
    }
  `,
  title: css`
    display: block;
    position: absolute;
    right: -7.5rem;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 1.125rem;
    font-weight: 600;
    color: ${COLORS.GRAY10};
  `,
};
