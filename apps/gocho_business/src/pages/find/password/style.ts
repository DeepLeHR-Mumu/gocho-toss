import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  sectionContainer: css`
    width: fit-content;
    height: 41rem;
    background-color: ${COLOR.WHITE};
    margin: 6rem auto;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  titleContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.75rem;
  `,

  backIcon: css`
    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `,

  closeIcon: css`
    > svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${COLOR.GRAY450};
    }
  `,

  title: css`
    ${TEXTS.TITLE9};
  `,

  resultContainer: css`
    ${TEXTS.TITLE7};
    color: ${COLOR.GRAY600};
    height: 30.75rem;
  `,

  result: css`
    ${TEXTS.TITLE9};
    margin-top: 0.75rem;
  `,

  formWrapper: css`
    height: 30.5rem;
  `,

  inputWrapper: css`
    position: relative;
    margin-bottom: 2rem;
  `,

  inputTitle: css`
    ${TEXTS.TITLE7};
    color: ${COLOR.GRAY600};
    margin-bottom: 0.75rem;
  `,

  errorMsg: css`
    font-size: 1rem;
    height: 1rem;
    margin: 2rem 0;
    text-align: center;
    line-height: 1;
    display: block;
    color: ${COLOR.RED300};
    font-weight: 400;
  `,
};
