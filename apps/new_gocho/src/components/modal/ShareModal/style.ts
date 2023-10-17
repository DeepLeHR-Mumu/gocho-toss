import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  `,

  link: css`
    border-radius: 0.5rem;
    border: 1px solid ${COLOR.GRAY200};
    padding: 0.875rem 1.25rem 0.875rem 1.25rem;
    flex-grow: 1;
    ${TEXT.TITLE5_M1620}
  `,

  copyButton: css`
    color: ${COLOR.BLUE300};
  `,
};
