import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  formWrapper: css`
    height: 30.5rem;
  `,

  inputWrapper: css`
    position: relative;
    margin-bottom: 2rem;
  `,

  inputTitle: css`
    ${TEXT.TITLE5_B1620};
    color: ${COLOR.GRAY600};
    margin-bottom: 0.75rem;
  `,

  errorMsg: css`
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.RED300};
    height: 1rem;
    margin: 3rem 0;
    text-align: center;
  `,
};
