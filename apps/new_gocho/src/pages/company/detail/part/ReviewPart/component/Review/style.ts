import { css } from "@emotion/react";
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
  `,

  commentWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  `,

  thumbsWrapper: css`
    display: flex;
    flex-direction: row;
    align-item: center;
  `,

  thumbsUp: css`
    width: 1.5rem;
    height: 1.5rem;
  `,

  thumbsDown: css`
    width: 1.5rem;
    height: 1.5rem;
  `,
};
