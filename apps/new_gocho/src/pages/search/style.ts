import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";
import { TEMP } from "shared-style/mediaQuery";

export const cssObj = {
  wrapper: css`
    padding-top: 2.4375rem;
    width: 100%;

    ${TEMP} {
      padding-top: 0.375rem;
    }
  `,

  searchWrapper: css`
    max-width: 46.5rem;
    margin: 0 auto 3rem auto;

    ${TEMP} {
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

    ${TEMP} {
      margin-bottom: 1.125rem;
    }
  `,

  tabButton: (isSelected: boolean) => css`
    width: 8.75rem;
    padding-bottom: 1.5rem;
    color: ${isSelected ? NEWCOLORS.BLACK : NEWCOLORS.BLUEGRAY200};
    border-bottom: ${isSelected ? `2px solid ${NEWCOLORS.BLACK}` : `none`};
    ${NEWTEXTS.TITLE4_B1822}
  }
  `,

  total: css`
    ${NEWTEXTS.TITLE4_M1822}
  `,

  resultWrapper: css`
    padding-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 20rem;

    ${TEMP} {
      padding-top: 1.125rem;
    }
  `,

  noDataWrapper: css`
    margin: auto;

    > strong {
      color: ${NEWCOLORS.BLACK};
      ${NEWTEXTS.TITLE5_M1620}

      ${TEMP} {
        color: ${NEWCOLORS.BLUE300};
        ${NEWTEXTS.TITLE6_M1418}
      }
    }

    > span {
      color: ${NEWCOLORS.BLUEGRAY400};
      ${NEWTEXTS.TITLE5_M1620}

      ${TEMP} {
        color: ${NEWCOLORS.BLACK};
        ${NEWTEXTS.TITLE6_M1418}
      }
    }
  `,

  paginationWrapper: css`
    margin: 5rem 0 9.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
