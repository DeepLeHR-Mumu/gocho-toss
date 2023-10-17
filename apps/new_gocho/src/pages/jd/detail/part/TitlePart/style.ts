import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  skeletonWrapper: css`
    height: 4.875rem;
  `,

  background: css`
    position: sticky;
    top: 8.75rem;
    padding: 1rem 0;
    background: ${COLOR.WHITE};
    z-index: 20;
  `,

  wrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  companyName: css`
    margin-right: 1.5rem;
    ${TEXT.TITLE4_M1822}
  `,

  jdTitle: css`
    margin-right: auto;
    ${TEXT.TITLE4_B1822}
  `,

  bookmarkWrapper: (isBookmarked: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    min-width: 5rem;
    padding: 0.625rem;
    margin-right: 1.25rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.5rem;

    > span {
      color: ${isBookmarked ? COLOR.BLACK : COLOR.GRAY200};
    }
  `,
};
