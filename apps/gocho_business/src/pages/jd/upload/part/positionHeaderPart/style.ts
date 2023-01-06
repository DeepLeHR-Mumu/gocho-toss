import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  partContainer: css`
    margin: 5rem 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  title: css`
    font-size: 1.25rem;
  `,

  addPositionButton: css`
    height: 2.5rem;
    border: 1px solid ${COLORS.GRAY10};
    padding: 0 1rem;
  `,

  buttonWrapper: css`
    height: fit-content;
  `,
};
