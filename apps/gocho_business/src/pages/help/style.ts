import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  contentWrapper: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  partContainer: css`
    flex-grow: 1;
    position: relative;
    height: 45rem;
    background-color: ${COLOR.WHITE};
    padding: 2rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  pageTitle: css`
    width: fit-content;
    margin-bottom: 1.5rem;
    ${TEXTS.TITLE11};
  `,

  descWrapper: css`
    background-color: ${COLOR.GRAY50};
    padding: 1.5rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
    margin-bottom: 1.75rem;
  `,

  descTitle: css`
    display: block;
    ${TEXTS.TITLE9};
    margin-bottom: 0.5rem;
  `,

  desc: css`
    ${TEXTS.TITLE3};
  `,

  email: css`
    ${TEXTS.TITLE5};
    color: ${COLOR.GRAY600};
    margin-bottom: 0.5rem;

    > a {
      margin-left: 0.5rem;
      color: ${COLOR.GRAY600};
    }
  `,
};
