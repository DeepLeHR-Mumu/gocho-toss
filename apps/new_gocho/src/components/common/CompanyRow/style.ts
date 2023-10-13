import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: (border: boolean) => css`
    display: flex;
    flex-direction: row;
    padding: 1.25rem 1.5rem;
    align-items: center;
    border-radius: 1rem;
    border: ${border ? `1px solid ${COLOR.GRAY200}` : "none"};
  `,

  skeletonWrapper: css`
    width: 100%;
    height: 5.75rem;
    border-radius: 1rem;
    overflow: hidden;
  `,

  infoWrapper: css`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: 1rem;
    gap: 0.5rem;
  `,

  companyName: css`
    color: ${COLOR.BLACK};
    ${TEXT.TITLE4_B1822}
  `,

  companyCategory: css`
    color: ${COLOR.GRAY600};
    ${TEXT.TITLE6_M1418}
  `,

  cursorPointer: css`
    cursor: pointer;
  `,
};
