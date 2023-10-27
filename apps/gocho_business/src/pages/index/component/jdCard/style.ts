import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { shorten } from "shared-style/common";
import { TEXT } from "shared-style/text";

export const cssObj = {
  cardContainer: css`
    margin-top: 1rem;
    padding: 1.25rem 0 2.25rem;
    background-color: ${COLOR.WHITE};
    border-bottom: 1px solid ${COLOR.GRAY200};

    :last-of-type {
      border-bottom: none;
    }
  `,

  title: css`
    width: 25rem;
    ${TEXT.TITLE4_B1822};
    margin-bottom: 1.5rem;
    word-break: break-all;
    ${shorten(3)};
  `,

  infoContainer: css`
    display: flex;
    align-items: flex-start;
    gap: 0 1rem;
  `,

  infoBox: css`
    display: flex;
    align-items: center;
    padding-right: 1rem;
    border-right: 1px solid ${COLOR.GRAY200};
    gap: 0 0.5rem;

    :last-of-type {
      border-right: none;
    }
  `,

  info: css`
    color: ${COLOR.GRAY800};
  `,

  date: css`
    display: block;
    width: fit-content;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${COLOR.GRAY500};
  `,
};
