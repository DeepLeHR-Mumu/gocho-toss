import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  contractTypeWrapper: css`
    display: flex;
    gap: 0 4rem;
  `,

  inputContainer: css`
    margin-top: 2rem;
  `,

  inputLine: css`
    border: 1px solid ${COLORS.GRAY10};
    height: 2.5rem;
    padding: 0 1rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    width: 100%;
    font-weight: 400;

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  labelContainer: css`
    display: flex;
    gap: 0 2rem;
  `,

  label: css`
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 2.5rem;
  `,
};
