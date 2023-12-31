import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css``,

  titleWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  name: css`
    color: ${COLOR.GRAY600};
    ${TEXT.TITLE6_M1418}
  `,

  time: css`
    margin-left: 0.5rem;
    margin-right: auto;
    color: ${COLOR.GRAY500};
    ${TEXT.TITLE7_M1218}
  `,

  submenuIcon: css`
    color: ${COLOR.GRAY450};
  `,

  textBox: css`
    border-radius: 0 1rem 1rem;
    background-color: ${COLOR.WHITE};
    padding: 0.75rem;
    margin-top: 0.75rem;
  `,

  comment: css`
    margin-bottom: 0.75rem;
    word-break: break-all;
    ${TEXT.BODY3_R1422}
  `,

  reactionWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
  `,

  thumbsUpWrapper: (isClicked: boolean) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    color: ${isClicked ? COLOR.BLUE300 : COLOR.GRAY600};

    svg {
      color: ${isClicked ? COLOR.BLUE300 : COLOR.GRAY600};
    }

    span {
      ${TEXT.TITLE7_M1218}
    }
  `,

  thumbsDownWrapper: (isClicked: boolean) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    color: ${isClicked ? COLOR.RED200 : COLOR.GRAY600};

    svg {
      color: ${isClicked ? COLOR.RED200 : COLOR.GRAY600};
    }

    span {
      ${TEXT.TITLE7_M1218}
    }
  `,
};
