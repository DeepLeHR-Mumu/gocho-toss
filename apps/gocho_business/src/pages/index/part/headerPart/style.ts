import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";
import { shorten } from "shared-style/common";

export const cssObj = {
  headerContainer: css`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    background-color: ${NEWCOLORS.WHITE};
    height: 3.5rem;
    box-shadow: 0 2px 10px 0 #00000008;
  `,

  noticeContainer: css`
    width: 1152px !important;
    display: flex !important;
    justify-content: flex-start;
    margin: 0 auto;
  `,

  noticeType: css`
    ${TEXTS.TITLE7};
    width: 4rem;
  `,

  noticeTitle: css`
    flex-grow: 1;
    ${TEXTS.TITLE6};
    ${shorten()};
  `,
};
