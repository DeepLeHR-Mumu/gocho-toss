import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: sticky;
    top: 11.25rem;
  `,

  contentsIndexWrapper: css`
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.WHITE};
    padding: 2rem 1.25rem;
  `,

  contentsIndexList: css`
    > li {
      color: ${NEWCOLORS.BLUEGRAY400};
      margin-bottom: 1.25rem;
      ${NEWTEXTS.TITLE7}

      ::before {
        content: "";
        border-radius: 50%;
        background-color: ${NEWCOLORS.GRAY200};
        display: inline-block;
        width: 0.75rem;
        height: 0.75rem;
        margin-right: 0.5rem;
      }

      :last-child {
        margin-bottom: 0;
      }
    }
  `,
};
