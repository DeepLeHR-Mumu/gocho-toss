import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  cardContainer: css`
    margin-top: 2rem;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    border: 1px solid ${COLORS.GRAY80};
  `,

  topContainer: css`
    height: 6rem;
    display: flex;
    align-items: center;
    gap: 0 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${COLORS.GRAY80};
  `,

  titleBox: css`
    display: flex;
    align-items: flex-start;
    gap: 0 1.5rem;
  `,

  bottomContainer: css`
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    margin-top: 0.5rem;
  `,

  bottomInfoContainer: css`
    display: flex;
    gap: 0 1rem;
  `,

  infoBox: css`
    display: flex;
    align-items: center;
    gap: 0 0.375rem;
  `,

  infoTitle: css`
    font-weight: 400;
    color: ${COLORS.GRAY60};
  `,

  buttonContainer: css`
    display: flex;
    gap: 0 1rem;
  `,
};
