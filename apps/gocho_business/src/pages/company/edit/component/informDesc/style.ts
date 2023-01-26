import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

import { shorten } from "shared-style/common";

export const cssObj = {
  wrapper: css`
    background-color: #f3f9fd;
    padding: 1rem;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    > svg {
      font-size: 1rem;
      color: #4ba0d8;
      margin-right: 0.5rem;
    }
  `,
  desc: css`
    font-size: 0.875rem;
    color: #4ba0d8;
    font-weight: 400;
    display: flex;
    align-items: center;
    ${shorten()};

    > svg {
      color: ${COLORS.GRAY10};
      margin: 0 0.2rem;
    }
  `,
};
