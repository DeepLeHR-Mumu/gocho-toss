import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
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
    ${NEWTEXTS.TITLE2_B2428};
    color: ${COLOR.BLUE300};
    margin-right: 1.25rem;
  `,

  linkButton: css`
    width: 1.5rem;
    height: 1.5rem;
  `,
};
