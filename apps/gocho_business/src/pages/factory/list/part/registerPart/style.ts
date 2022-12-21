import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  container: css`
    display: flex;
    justify-content: center;
  `,
  wrapper: css`
    width: 57.5rem;
    padding: 1.5rem;
    border: 1px solid ${COLORS.GRAY80};
    border-radius: 1.5rem;
  `,
  nameContainer: css`
    display: flex;
  `,
  nameInput: css`
    border: 1px solid #000000;
    padding: 0.5rem 1rem;

    width: 50.875rem;
  `,
};
