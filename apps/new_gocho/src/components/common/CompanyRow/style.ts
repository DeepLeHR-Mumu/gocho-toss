import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { TEMP } from "shared-style/mediaQuery";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: (border: boolean) => css`
    display: flex;
    flex-direction: row;
    padding: 1.25rem 1.5rem;
    align-items: center;
    border-radius: 1rem;
    border: ${border ? `1px solid ${NEWCOLORS.GRAY200}` : "none"};

    ${TEMP} {
      padding: 0.75rem 0;
    }
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
    color: ${NEWCOLORS.BLACK};
    ${NEWTEXTS.TITLE4_B1822}

    ${TEMP} {
      ${NEWTEXTS.TITLE5_B1620}
    }
  `,

  companyCategory: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.TITLE6_M1418}

    ${TEMP} {
      ${NEWTEXTS.TITLE7_M1218}
    }
  `,

  cursorPointer: css`
    cursor: pointer;
  `,
};
