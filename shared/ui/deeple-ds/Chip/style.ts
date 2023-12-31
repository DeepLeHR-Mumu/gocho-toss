import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";

export const cssObj = {
  chipWrapper: (size?: string) => css`
    white-space: nowrap;
    ${size === "small" &&
    css`
      height: 1.875rem;
      border-radius: 1.5rem;
      padding: 0.375rem 0.5rem;
      ${TEXT.TITLE6_M1418}
    `}

    ${size === "large" &&
    css`
      height: 2.875rem;
      border-radius: 1.5rem;
      padding: 0.75rem 1rem;
      ${TEXT.TITLE4_M1822}
    `}
  `,

  rect: css`
    border-radius: 0.25rem;
  `,
};
