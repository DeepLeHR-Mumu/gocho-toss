import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  buttonWrapper: (size: string, fill?: boolean) => css`
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    ${NEWTEXTS.TITLE6_B1418};

    ${size === "small" &&
    css`
      width: 8.75rem;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      height: 2.75rem;
      ${NEWTEXTS.TITLE5_M1620}

      ${MOBILE} {
        ${NEWTEXTS.TITLE6_B1418}
      }
    `}

    ${size === "large" &&
    css`
      width: 24.5rem;
      border-radius: 0.75rem;
      padding: 0.75rem 1rem;
      height: 3.25rem;
      ${NEWTEXTS.TITLE5_B1620}

      ${MOBILE} {
        width: 20.5rem;
        height: 2.75rem;
        ${NEWTEXTS.TITLE6_B1418}
      }
    `}
    
    ${fill &&
    css`
      width: 100%;

      ${MOBILE} {
        width: 100%;
      }
    `}
  `,
};
