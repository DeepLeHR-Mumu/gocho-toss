import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  wrapper: css`
    padding-top: 2.4375rem;
    width: 100%;

    ${MOBILE} {
      padding-top: 0.375rem;
    }
  `,

  searchWrapper: css`
    max-width: 46.5rem;
    margin: 0 auto 3rem auto;

    ${MOBILE} {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.125rem;
    }
  `,

  tabBar: css`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
    margin-bottom: 2.5rem;

    ${MOBILE} {
      margin-bottom: 1.125rem;
    }
  `,

  tabButton: (isSelected: boolean) => css`
    width: 8.75rem;
    padding-bottom: 1.5rem;
    color: ${isSelected ? NEWCOLORS.BLACK : NEWCOLORS.BLUEGRAY200};
    border-bottom: ${isSelected ? `2px solid ${NEWCOLORS.BLACK}` : `none`};
    ${NEWTEXTS.TITLE12}
  }
  `,

  total: css`
    ${NEWTEXTS.TITLE10}
  `,

  resultWrapper: css`
    padding-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 20rem;

    ${MOBILE} {
      padding-top: 1.125rem;
    }
  `,

  noDataWrapper: css`
    margin: auto;

    > strong {
      color: ${NEWCOLORS.BLACK};
      ${NEWTEXTS.TITLE7}

      ${MOBILE} {
        color: ${NEWCOLORS.BLUE300};
        ${NEWTEXTS.TITLE4}
      }
    }

    > span {
      color: ${NEWCOLORS.BLUEGRAY400};
      ${NEWTEXTS.TITLE7}

      ${MOBILE} {
        color: ${NEWCOLORS.BLACK};
        ${NEWTEXTS.TITLE4}
      }
    }
  `,

  paginationWrapper: css`
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
