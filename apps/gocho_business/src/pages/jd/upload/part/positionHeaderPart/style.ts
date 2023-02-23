import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  partContainer: css`
    margin-top: 2.5rem;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e9f6ff;
    border-radius: 1.5rem;
    margin-bottom: 1rem;
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
