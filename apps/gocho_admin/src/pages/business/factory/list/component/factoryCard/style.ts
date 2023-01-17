import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cssObj = {
  factoryContainer: css`
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > th {
      font-size: 1.25rem;
    }
  `,

  factoryIdBox: css`
    width: 20%;
    text-align: center;
  `,

  factoryNameBox: css`
    width: 40%;
    text-align: center;
    ${shorten()};
  `,

  activeButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    width: 20%;
    height: 2rem;
    border: 2px solid ${COLORS.GRAY10};
    padding: 0.125rem 0.25rem;
    background-color: ${COLORS.BLUE_NEON40};
    color: ${COLORS.GRAY100};
  `,
};
