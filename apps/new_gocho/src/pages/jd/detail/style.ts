import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  background: css`
    background-color: ${COLOR.GRAY100};
    padding: 1.75rem 0;
  `,

  wrapper: css`
    background-color: ${COLOR.WHITE};
    backdrop-filter: none;
    overflow: auto;

    * ::-webkit-scrollbar {
      display: none;
    }
  `,

  contentsWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  `,

  reviewWrapper: css`
    max-width: 17.5rem;
    flex-grow: 1;
  `,

  similarJdWrapper: css`
    padding: 5rem 0;
    display: block;
  `,

  similarJdTitle: css`
    margin-bottom: 2.5rem;
    ${TEXT.TITLE1_B2832}
  `,

  similarJdList: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
};
