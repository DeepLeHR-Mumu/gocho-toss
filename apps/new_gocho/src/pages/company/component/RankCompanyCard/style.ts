import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  rankContainer: css`
    margin-bottom: 0.5rem;
  `,

  rankItemBox: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  `,

  companyBox: css`
    display: flex;
    align-items: center;
  `,

  rankNumber: css`
    ${NEWTEXTS.TITLE13};
    color: ${NEWCOLORS.BLUE300};
    margin-right: 1.25rem;
  `,

  linkButton: css`
    width: 1.5rem;
    height: 1.5rem;
  `,
};
