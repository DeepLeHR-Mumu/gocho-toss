import { css } from "@emotion/react";
import { TEMP } from "shared-style/mediaQuery";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    width: 100%;
    padding: 0 0.5rem 1.5rem 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${NEWTEXTS.TITLE4_B1822}

    ${TEMP} {
      padding: 1.25rem 1rem 1.25rem 1rem;
    }
  `,

  title: css`
    ${NEWTEXTS.TITLE4_B1822}
  `,

  icon: css`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  `,
};
