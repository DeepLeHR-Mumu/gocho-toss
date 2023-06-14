import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  spinner: css`
    position: relative;
    width: 100%;
    height: 30rem;
  `,

  contentWrapper: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  partContainer: css`
    flex-grow: 1;
    width: 59.5rem;
    position: relative;
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

  companyInfoContainer: css`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  `,

  companyName: css`
    ${TEXTS.TITLE10};
    color: ${NEWCOLORS.BLUEGRAY400};
  `,

  businessNumber: css`
    margin-left: 1rem;
    ${TEXTS.TITLE3};
    color: ${NEWCOLORS.BLUEGRAY300};

    > span {
      margin-left: 0.5rem;
      color: ${NEWCOLORS.BLUEGRAY500};
    }
  `,

  pageDesc: css`
    text-align: left;
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY400};
    padding-bottom: 2rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  tableWrapper: css`
    background-color: ${NEWCOLORS.WHITE};
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
  `,

  tableHeader: css`
    display: grid;
    grid-template-columns: 122px 144px 1fr 134px;
    justify-content: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  header: (isCenter: boolean) => css`
    ${TEXTS.TITLE7};
    text-align: ${isCenter ? "center" : "left"};
  `,

  rowContainer: css`
    display: grid;
    grid-template-columns: 122px 144px 1fr 134px;
    justify-content: center;
    border-bottom: 0.5px solid ${NEWCOLORS.GRAY200};

    :last-of-type {
      border-bottom: 0;
    }
  `,

  data: (isCenter: boolean) => css`
    ${TEXTS.TITLE5};
    padding: 1rem 0;
    text-align: ${isCenter ? "center" : "left"};
  `,
};
