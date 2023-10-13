import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";
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
    ${TEXT.TITLE5_M1620}
  `,

  time: css`
    margin-right: auto;
    color: ${COLOR.GRAY500};
    ${TEXT.TITLE5_M1620}
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
    color: ${COLOR.BLUE300};
    ${TEXT.TITLE5_M1620}
  `,

  rightIcon: css`
    width: 1.25rem;
    height: 1.25rem;
  `,

  comment: css`
    color: ${COLOR.GRAY800};
    ${TEXT.BODY2_R1624}
  `,

  moreIcon: css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${COLOR.GRAY450};
  `,

  reactionWrapper: css`
    display: inline-flex;
    gap: 1.75rem;
  `,
};
