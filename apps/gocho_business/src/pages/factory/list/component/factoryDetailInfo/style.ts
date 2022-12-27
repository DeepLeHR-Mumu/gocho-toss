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
          border: 1px solid #777777;
        `;

    return css`
      ${border}
      width: 5rem;
      padding: 0.5rem 1rem;
      margin-right: 0.25rem;
      ::placeholder {
        color: #777777;
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
  `,
  labelContainer: css`
    display: flex;
    gap: 0 0.5rem;
    margin-right: 1rem;
  `,

  radioText: css`
    color: ${COLORS.GRAY10};
  `,

  etcInfoBox: css`
    border: 1px solid #777777;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    ::placeholder {
      color: #777777;
    }
  `,
  trueFalseBox: css`
    margin-right: 0.5rem;
  `,
};
