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
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.TITLE5}
  `,

  time: css`
    margin-left: 0.5rem;
    margin-right: auto;
    color: ${NEWCOLORS.BLUEGRAY300};
    ${NEWTEXTS.TITLE1}
  `,

  submenuIcon: css`
    color: ${NEWCOLORS.GRAY300};
  `,

  textBox: css`
    border-radius: 0 1rem 1rem;
    background-color: ${NEWCOLORS.WHITE};
    padding: 0.75rem;
    margin-top: 0.75rem;
  `,

  comment: css`
    margin-bottom: 0.75rem;
    ${NEWTEXTS.BODY2}
  `,

  reactionWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
  `,

  thumbsUpWrapper: (isClicked: boolean) => {
    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      color: ${isClicked ? NEWCOLORS.BLUE300 : NEWCOLORS.BLUEGRAY400};

      svg {
        color: ${isClicked ? NEWCOLORS.BLUE300 : NEWCOLORS.BLUEGRAY400};
      }

      span {
        ${NEWTEXTS.TITLE1}
      }
    `;
  },

  thumbsDownWrapper: (isClicked: boolean) => {
    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      color: ${isClicked ? NEWCOLORS.RED200 : NEWCOLORS.BLUEGRAY400};

      svg {
        color: ${isClicked ? NEWCOLORS.RED200 : NEWCOLORS.BLUEGRAY400};
      }

      span {
        ${NEWTEXTS.TITLE1}
      }
    `;
  },
};
