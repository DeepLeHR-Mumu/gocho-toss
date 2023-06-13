import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  contentWrapper: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  partContainer: css`
    flex-grow: 1;
    height: 45rem;
    background-color: ${NEWCOLORS.WHITE};
    padding: 2rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
    text-align: center;
  `,

  pageTitle: css`
    width: fit-content;
    margin-bottom: 2rem;
    ${TEXTS.TITLE11};
  `,

  pageDesc: css`
    text-align: left;
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY400};
    padding-bottom: 2rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  noticeCount: css`
    margin: 0 0.25rem;
    color: ${NEWCOLORS.RED200};
  `,
};
