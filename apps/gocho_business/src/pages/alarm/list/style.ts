import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";
import { shorten } from "shared-style/common";

export const cssObj = {
  contentWrapper: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  partContainer: css`
    flex-grow: 1;
    min-height: 50rem;
    background-color: ${COLOR.WHITE};
    padding: 2rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  pageTitle: css`
    width: fit-content;
    margin-bottom: 2rem;
    ${TEXT.TITLE1_B2832};
  `,

  pageDesc: css`
    text-align: left;
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY600};
    padding-bottom: 2rem;
    border-bottom: 1px solid ${COLOR.GRAY450};
  `,

  infoList: css`
    margin-bottom: 2rem;
  `,

  infoContainer: css`
    display: flex;
    align-items: center;
    text-align: left;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,

  infoType: css`
    ${TEXT.TITLE5_B1620};
    width: 5.25rem;
  `,

  infoTitle: css`
    flex-grow: 1;
    ${TEXT.TITLE5_M1620};
    ${shorten()};
  `,

  infoDate: css`
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY500};
  `,
};
