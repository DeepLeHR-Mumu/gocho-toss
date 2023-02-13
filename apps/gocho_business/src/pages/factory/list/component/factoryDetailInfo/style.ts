import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  gapContainer: css`
    display: flex;
    flex-direction: column;
    gap: 2rem 0;
  `,
  container: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  box: css`
    width: 47%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem 0;
  `,

  infoText: (isError?: boolean) => {
    const color = isError
      ? css`
          color: ${COLORS.ERROR_RED40};
        `
      : css`
          color: ${COLORS.GRAY10};
        `;
    return css`
      ${color}
      font-weight: 700;
    `;
  },

  infoContainer: css`
    display: flex;
    align-items: center;
  `,

  iconBox: css`
    font-size: 1.5rem;
    margin-right: 0.5rem;
  `,
  totalWorkerNumber: css`
    color: #cccccc;
  `,

  manWomanContainer: css`
    display: flex;
    align-items: center;
  `,

  manWomanInput: (isError?: boolean) => {
    const border = isError
      ? css`
          border: 1px solid ${COLORS.ERROR_RED40};
        `
      : css`
          border: 1px solid ${COLORS.GRAY35};
        `;

    return css`
      ${border}
      border-radius: 0.3125rem;
      width: 5rem;
      padding: 0.5rem 1rem;
      margin-right: 0.25rem;
      ::placeholder {
        color: ${COLORS.GRAY35};
      }
    `;
  },

  number: css`
    color: ${COLORS.GRAY10};
  `,

  womanIconBox: css`
    font-size: 1.5rem;
    margin-right: 0.5rem;
    margin-left: 1rem;
  `,
  trueFalseContainer: css`
    display: flex;
    gap: 0 1rem;
  `,

  radioText: css`
    margin-left: 0.5rem;
    color: ${COLORS.GRAY10};
  `,

  etcInfoBox: css`
    border-radius: 0.3125rem;
    border: 1px solid ${COLORS.GRAY35};
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    ::placeholder {
      color: ${COLORS.GRAY35};
    }
  `,
  trueFalseBox: css`
    margin-right: 0.5rem;
  `,
};
