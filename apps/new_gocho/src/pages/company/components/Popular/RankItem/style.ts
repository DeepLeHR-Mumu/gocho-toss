import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  rankContainer: css`
    margin-bottom: 1.75rem;
  `,

  rankItemBox: css`
    display: flex;
    align-items: center;
    line-height: 1.75rem;
    margin-bottom: 1.75rem;
    justify-content: space-between;
  `,

  rankProfileBox: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    > a {
      padding: 0;
      padding-right: 1rem;
    }
  `,

  rankNumberText: css`
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 1.25rem;
    color: ${NEWCOLORS.BLUE300};
  `,

  companyDetailButtn: css`
    width: 1.5rem;
    height: 1.5rem;
  `,
};
