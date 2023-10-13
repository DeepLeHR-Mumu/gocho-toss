import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

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
    ${TEXT.TITLE1_B2832};
    margin-bottom: 1.25rem;
  `,

  input: (isError: boolean) => css`
    width: 45.875rem;
    height: 3.25rem;
    margin: 0 auto;
    border: 1px solid ${isError ? `${COLOR.RED300}` : `${COLOR.GRAY200}`};
    border-radius: 0.5rem;
    text-align: center;
    ${TEXT.TITLE4_B1822}

    ::placeholder {
      ${TEXT.TITLE4_B1822}
      color: ${COLOR.GRAY450};
    }
  `,
};
