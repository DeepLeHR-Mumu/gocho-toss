import { css } from "@emotion/react";

export const cssObj = {
  partContainer: css`
    margin-top: 2rem;
  `,

  headerContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
  `,

  title: css`
    font-size: 1.5rem;
  `,

  desc: css`
    font-size: 1.125rem;
  `,

  buttonContainer: css`
    display: flex;
    gap: 0 0.5rem;
  `,

  rejectWrapper: css`
    margin-top: 2rem;
    padding: 1rem 2rem;
    background-color: #ffefef;
    border-radius: 1.5rem;
  `,

  rejectTitle: css`
    color: #ff6b6c;
    font-size: 1.25rem;
  `,

  rejectReason: css`
    color: #ff6b6c;
    word-break: break-all;
  `,
};
