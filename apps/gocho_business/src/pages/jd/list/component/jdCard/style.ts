import { css } from "@emotion/react";

import { COLORS, NEWCOLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cssObj = {
  cardContainer: css`
    margin-top: 1.25rem;
    background-color: ${NEWCOLORS.WHITE};
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  topContainer: css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1.25rem 1.5rem 2.25rem;
  `,

  title: css`
    width: 15rem;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.15;
    margin-bottom: 1.5rem;
    word-break: break-all;
    ${shorten(3)};
  `,

  infoContainer: css`
    display: flex;
    align-items: flex-start;
    gap: 0 1.5rem;
  `,

  infoBox: css`
    display: flex;
    align-items: center;
    padding-right: 1rem;
    border-right: 1px solid ${NEWCOLORS.GRAY200};

    :last-of-type {
      border-right: none;
    }
  `,

  infoTitle: css`
    font-weight: 400;
    color: ${COLORS.GRAY60};
    margin-right: 0.5rem;
  `,

  commonInfoContainer: css`
    display: flex;
  `,

  viewInfoBox: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 9.25rem;
    height: 4rem;
    border-right: 1px solid ${NEWCOLORS.GRAY200};

    :last-of-type {
      border-right: none;
    }
  `,

  countName: css``,

  count: (isExpired: boolean) => css`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${isExpired ? `${NEWCOLORS.BLUEGRAY200}` : `${NEWCOLORS.BLACK}`};
  `,

  date: css`
    display: block;
    width: fit-content;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${COLORS.GRAY35};
  `,

  bottomContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1rem;
    background-color: ${NEWCOLORS.GRAY50};
  `,

  bottomInfoContainer: css`
    display: flex;
    align-items: center;
  `,

  info: css`
    color: ${COLORS.GRAY40};
  `,

  buttonContainer: css`
    display: flex;
    gap: 0 1rem;
  `,

  inactiveLabel: css`
    font-size: 0.875rem;
    height: 2.25rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.GRAY100};
    background-color: ${COLORS.GRAY65};
    border-radius: 50rem;
  `,
};
