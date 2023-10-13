import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    padding-top: 2.4375rem;
    width: 100%;
  `,

  searchWrapper: css`
    max-width: 46.5rem;
    margin: 0 auto 3rem auto;
  `,

  tabBar: css`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${COLOR.GRAY200};
    margin-bottom: 2.5rem;
  `,

  tabButton: (isSelected: boolean) => css`
    width: 8.75rem;
    padding-bottom: 1.5rem;
    color: ${isSelected ? COLOR.BLACK : COLOR.GRAY400};
    border-bottom: ${isSelected ? `2px solid ${COLOR.BLACK}` : `none`};
    ${TEXT.TITLE4_B1822}
  }
  `,

  total: css`
    ${TEXT.TITLE4_M1822}
  `,

  resultWrapper: css`
    padding-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 20rem;
  `,

  noDataWrapper: css`
    margin: auto;

    > strong {
      color: ${COLOR.BLACK};
      ${TEXT.TITLE5_M1620}
    }

    > span {
      color: ${COLOR.GRAY600};
      ${TEXT.TITLE5_M1620}
    }
  `,

  paginationWrapper: css`
    margin: 5rem 0 9.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
