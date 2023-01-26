import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  container: css`
    border-bottom: 1px solid #cccccc;
  `,
  wrapper: css`
    width: 57.5rem;
    padding: 1.5rem;
    border: 1px solid ${COLORS.GRAY80};
    border-radius: 1.5rem;
  `,
  inputContainer: css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  `,

  addrOpener: css`
    width: 100%;
  `,
  statusChip: css`
    flex-shrink: 0;
  `,
  addressContainer: css`
    width: 100%;
    position: relative;
  `,
  addressIcon: css`
    position: absolute;
    color: #777777;
    font-size: 1.5rem;

    top: 50%;
    left: 2.4%;
    transform: translate(0, -42%);
  `,
  addressTextInput: (isError?: boolean) => {
    const border = isError
      ? css`
          border: 1px solid ${COLORS.ERROR_RED40};
        `
      : css`
          border: 1px solid ${COLORS.GRAY65};
        `;

    return css`
      ${border}
      border-radius: 0.3125rem;
      padding: 0.5rem 0;
      padding-left: 3rem;
      width: 100%;
      ::placeholder {
        color: ${COLORS.GRAY65};
        font-weight: lighter;
      }
    `;
  },

  textInput: (isError?: boolean) => {
    const border = isError
      ? css`
          border: 1px solid ${COLORS.ERROR_RED40};
        `
      : css`
          border: 1px solid ${COLORS.GRAY35};
        `;

    return css`
      border-radius: 0.3125rem;
      ${border}
      padding: 0.5rem 1rem;
      width: 100%;
      ::placeholder {
        color: ${COLORS.GRAY35};
      }
    `;
  },
  alignContainer: css`
    display: flex;
    justify-content: center;
    :first-of-type {
      margin-top: 3rem;
      margin-bottom: 2.625rem;
    }
  `,
  infoText: css`
    color: ${COLORS.GRAY10};
    font-weight: 700;
  `,
  infoContainer: css`
    display: flex;
    align-items: center;
  `,
  infoBox: css`
    width: 47%;
  `,
  iconBox: css`
    font-size: 1.5rem;
    margin-right: 1rem;
  `,
  manWomanContainer: css`
    display: flex;
    align-items: center;
  `,
  manWomanInput: css`
    width: 5rem;
    border: 1px solid #000000;
    padding: 0.5rem 1rem;
  `,
  womanIconBox: css`
    font-size: 1.5rem;
    margin-right: 0.5rem;
    margin-left: 1rem;
  `,
};
