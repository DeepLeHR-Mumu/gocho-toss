import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  alarmIcon: css`
    position: relative;

    > span {
      position: absolute;
      top: 0;
      left: 0;
      color: ${COLOR.RED300};
    }
  `,

  redDot: css`
    position: absolute;
    top: 1rem;
    left: 0;
    width: 0.25rem;
    height: 0.25rem;
    background-color: ${COLOR.RED200};
    border-radius: 50%;
  `,

  menuHeader: css`
    margin-left: auto;
    color: ${COLOR.GRAY600};

    > span {
      margin-left: 0.5rem;
      ${TEXT.TITLE6_M1418}
    }

    :hover {
      color: ${COLOR.BLUE300};
    }
  `,

  menuContent: (isRead: boolean) => css`
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-start;
    gap: 1rem;
    ${!isRead && `background-color: ${COLOR.BLUE50};`}

    > p {
      word-break: break-all;
      text-align: left;
      ${TEXT.BODY2_R1624}
    }

    > span {
      color: ${COLOR.GRAY600};
      ${TEXT.TITLE5_M1620}
    }

    > strong {
      display: inline-flex;
      align-items: center;
      text-align: left;
      gap: 0.5rem;
      color: ${isRead ? COLOR.BLACK : COLOR.BLUE300};
      ${TEXT.TITLE5_B1620}

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
    color: ${COLOR.GRAY600};
    ${TEXT.TITLE5_M1620};
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
