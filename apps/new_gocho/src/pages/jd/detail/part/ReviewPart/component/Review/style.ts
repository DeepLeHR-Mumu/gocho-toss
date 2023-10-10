import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css``,

  titleWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  name: css`
    color: ${NEWCOLORS.GRAY600};
    ${NEWTEXTS.TITLE6_M1418}
  `,

  time: css`
    margin-left: 0.5rem;
    margin-right: auto;
    color: ${NEWCOLORS.GRAY500};
    ${NEWTEXTS.TITLE7_M1218}
  `,

  submenuIcon: css`
    color: ${NEWCOLORS.GRAY450};
  `,

  textBox: css`
    border-radius: 0 1rem 1rem;
    background-color: ${NEWCOLORS.WHITE};
    padding: 0.75rem;
    margin-top: 0.75rem;
  `,

  comment: css`
    margin-bottom: 0.75rem;
    word-break: break-all;
    ${NEWTEXTS.BODY3_R1422}
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
    color: ${isClicked ? NEWCOLORS.BLUE300 : NEWCOLORS.GRAY600};

    svg {
      color: ${isClicked ? NEWCOLORS.BLUE300 : NEWCOLORS.GRAY600};
    }

    span {
      ${NEWTEXTS.TITLE7_M1218}
    }
  `,

  thumbsDownWrapper: (isClicked: boolean) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    color: ${isClicked ? NEWCOLORS.RED200 : NEWCOLORS.GRAY600};

    svg {
      color: ${isClicked ? NEWCOLORS.RED200 : NEWCOLORS.GRAY600};
    }

    span {
      ${NEWTEXTS.TITLE7_M1218}
    }
  `,
};
