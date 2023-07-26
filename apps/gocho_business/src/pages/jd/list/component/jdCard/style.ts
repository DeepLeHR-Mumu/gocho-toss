import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { shorten } from "shared-style/common";
import { TEXTS } from "shared-style/text";

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
    gap: 0 1rem;
  `,

  infoBox: css`
    display: flex;
    align-items: center;
    padding-right: 1rem;
    border-right: 1px solid ${NEWCOLORS.GRAY200};
    gap: 0 0.5rem;

    :last-of-type {
      border-right: none;
    }
  `,

  info: css`
    color: ${NEWCOLORS.BLUEGRAY600};
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
    color: ${NEWCOLORS.BLUEGRAY400};
  `,

  bottomContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1.5rem;
    background-color: ${NEWCOLORS.GRAY50};
    height: 4.625rem;
  `,

  bottomInfoContainer: css`
    display: flex;
    align-items: center;
  `,

  buttonContainer: css`
    display: flex;
    align-items: center;
    gap: 0 1rem;
  `,

  linkButton: css`
    ${TEXTS.TITLE6}
    padding: 0.75rem 0;
    border-radius: 0.5rem;
    width: 5rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.WHITE};
    color: ${NEWCOLORS.BLUEGRAY300};
    text-align: center;
  `,

  inactiveLabel: css`
    font-size: 0.875rem;
    height: 2.25rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${NEWCOLORS.WHITE};
    background-color: ${NEWCOLORS.BLUEGRAY200};
    border-radius: 50rem;
  `,
};
