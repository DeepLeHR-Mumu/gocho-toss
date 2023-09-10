import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";
// import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
  `,

  profileWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
  `,

  nickname: css`
    ${NEWTEXTS.TITLE8}
  `,

  time: css`
    margin-right: auto;
    color: ${NEWCOLORS.BLUEGRAY300};
    ${NEWTEXTS.TITLE7}
  `,

  commentWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  `,

  jdLink: css`
    display: flex;
    width: fit-content;
    gap: 0.5rem;
    color: ${NEWCOLORS.BLUE300};
    ${NEWTEXTS.TITLE8}
  `,

  rightIcon: css`
    width: 1.25rem;
    height: 1.25rem;
  `,

  comment: css`
    color: ${NEWCOLORS.BLUEGRAY600};
    ${NEWTEXTS.BODY4}
  `,

  moreIcon: css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${NEWCOLORS.GRAY300};
  `,

  reactionWrapper: css`
    display: inline-flex;
    gap: 1.75rem;
  `,
};
