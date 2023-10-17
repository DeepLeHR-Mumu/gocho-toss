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
    height: 50rem;
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
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY600};
    padding-bottom: 2rem;
    border-bottom: 1px solid ${COLOR.GRAY450};
  `,

  infoList: css`
    margin-bottom: 2rem;
  `,

  noticeCount: css`
    margin: 0 0.25rem;
    color: ${COLOR.RED200};
  `,

  infoContainer: css`
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,

  infoType: (isAnnounce: boolean) => css`
    ${isAnnounce ? TEXT.TITLE5_B1620 : TEXT.TITLE5_M1620};
    color: ${isAnnounce ? COLOR.BLUE250 : COLOR.BLACK};
    width: 5.25rem;
  `,

  infoTitle: (isAnnounce: boolean) => css`
    ${isAnnounce ? TEXT.TITLE5_B1620 : TEXT.TITLE5_M1620};
    flex-grow: 1;
    ${shorten()};
  `,

  infoDate: css`
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY500};
  `,
};
