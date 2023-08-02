import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";
import { shorten } from "shared-style/common";

export const cssObj = {
  contentWrapper: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  partContainer: css`
    flex-grow: 1;
    min-height: 50rem;
    background-color: ${NEWCOLORS.WHITE};
    padding: 2rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
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
    border-bottom: 1px solid ${NEWCOLORS.GRAY300};
  `,

  infoList: css`
    margin-bottom: 2rem;
  `,

  infoContainer: css`
    display: flex;
    align-items: center;
    text-align: left;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  infoType: css`
    ${TEXTS.TITLE7};
    width: 5.25rem;
  `,

  infoTitle: css`
    flex-grow: 1;
    ${TEXTS.TITLE6};
    ${shorten()};
  `,

  infoDate: css`
    ${TEXTS.TITLE3};
    color: ${NEWCOLORS.BLUEGRAY300};
  `,
};
