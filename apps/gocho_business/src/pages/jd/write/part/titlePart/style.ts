import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  partContainer: css`
    background-color: ${COLOR.WHITE};
    padding: 2rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
    text-align: center;
  `,

  inputTitle: css`
    ${TEXTS.TITLE11};
    margin-bottom: 1.25rem;
  `,

  input: (isError: boolean) => css`
    width: 45.875rem;
    height: 3.25rem;
    margin: 0 auto;
    border: 1px solid ${isError ? `${COLOR.RED300}` : `${COLOR.GRAY200}`};
    border-radius: 0.5rem;
    text-align: center;
    ${TEXTS.TITLE9}

    ::placeholder {
      ${TEXTS.TITLE9}
      color: ${COLOR.GRAY450};
    }
  `,
};
