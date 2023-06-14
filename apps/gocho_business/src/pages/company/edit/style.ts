import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  contentWrapper: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  formContainer: css`
    width: 59.5rem;
  `,

  spinner: css`
    position: relative;
    width: 100%;
    height: 100vh;
  `,

  infoBox: css`
    margin: 1.5rem 0 2rem;
  `,

  info: css`
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY500};
    margin-bottom: 0.5rem;
  `,

  buttonBox: css`
    margin: auto;
    width: 11.25rem;
  `,
};
