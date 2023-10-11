import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  headerContainer: css`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    background-color: ${COLOR.WHITE};
    height: 5rem;
    z-index: 30;
    box-shadow: 0 2px 10px 0 #00000008;
  `,

  buttonContainer: css`
    width: 1152px;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
  `,

  saveButton: css`
    width: 8.75rem;
    height: 3rem;
    padding: 0.75rem 1rem;
    border: 1px solid ${COLOR.BLUE300};
    border-radius: 0.5rem;
    ${TEXTS.TITLE6};
    color: ${COLOR.BLUE300};
    margin-right: 1.25rem;
  `,

  submitButton: css`
    width: 8.75rem;
    height: 3rem;
    padding: 0.75rem 1rem;
    background-color: ${COLOR.BLUE300};
    border-radius: 0.5rem;
    ${TEXTS.TITLE6};
    color: ${COLOR.WHITE};
  `,
};
