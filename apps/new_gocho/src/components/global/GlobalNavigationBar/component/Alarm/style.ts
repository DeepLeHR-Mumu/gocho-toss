import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  alarmIcon: (themeWhite: boolean) => css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${themeWhite ? NEWCOLORS.BLACK : NEWCOLORS.WHITE};
  `,

  menuHeader: css`
    margin-left: auto;
    color: ${NEWCOLORS.BLUEGRAY400};

    > span {
      margin-left: 0.5rem;
      ${NEWTEXTS.TITLE4}
    }

    :hover {
      color: ${NEWCOLORS.BLUE300};
    }
  `,

  menuContent: (isRead: boolean) => css`
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-start;
    gap: 1rem;
    ${!isRead && `background-color: ${NEWCOLORS.BLUE50};`}

    > p {
      word-break: break-all;
      text-align: left;
      ${NEWTEXTS.BODY4}
    }

    > span {
      color: ${NEWCOLORS.BLUEGRAY400};
      ${NEWTEXTS.TITLE7}
    }

    > strong {
      display: inline-flex;
      align-items: center;
      text-align: left;
      gap: 0.5rem;
      color: ${isRead ? NEWCOLORS.BLACK : NEWCOLORS.BLUE300};
      ${NEWTEXTS.TITLE9}

      > svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  `,
  menuNoContent: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22.5rem;
    height: 7.875rem;
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.TITLE7};
    padding-bottom: 2rem;
  `,

  alarmContainer: css`
    max-height: 29.25rem;
    overflow: auto;
  `,

  dropDownMenuWrapper: css`
    padding: 0;
    width: 100%;
  `,
};
