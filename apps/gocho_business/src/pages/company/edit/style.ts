import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

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
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY700};
    margin-bottom: 0.5rem;
  `,
};
