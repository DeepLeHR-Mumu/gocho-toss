import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  entrieCompanyContainer: css`
    margin-top: 4.5rem;
    margin-bottom: 9.18rem;
  `,

  headerBox: css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  `,

  etrieCompanyLinkText: css`
    font-size: 1rem;
    padding-top: 0.625%;
    color: ${NEWCOLORS.BLUEGRAY400};
  `,
};
