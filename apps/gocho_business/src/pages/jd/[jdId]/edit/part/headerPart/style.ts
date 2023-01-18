import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  partContainer: css`
    margin-top: 2rem;
  `,

  jdTitle: css`
    display: flex;
    font-size: 1.25rem;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid ${COLORS.GRAY40};
  `,

  jdInfoContainer: css`
    display: flex;
    gap: 0 1rem;
    width: 100%;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid ${COLORS.GRAY40};
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

  headerContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
  `,

  title: css`
    font-size: 1.25rem;
  `,

  buttonContainer: css`
    display: flex;
    gap: 0 0.5rem;
  `,
};
