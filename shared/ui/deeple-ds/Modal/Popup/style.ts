import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    width: 46rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: ${COLOR.WHITE};
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  header: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  title: css`
    color: ${COLOR.BLACK};
    ${TEXT.TITLE1_B2832}
  `,

  close: css`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  `,

  divider: css`
    margin: 1.25rem 0;
  `,

  description: css`
    width: 100%;
    color: ${COLOR.BLACK};
    word-wrap: break-word;
    ${TEXT.BODY2_R1624};
  `,

  buttonGroup: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 1.25rem;
    gap: 1rem;
  `,
};
