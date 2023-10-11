import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    padding: 2rem;
    width 100%;
    background-color:${NEWCOLORS.WHITE};
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    `,

  headerWrapper: css`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY700};
  `,

  require: css`
    color: ${NEWCOLORS.RED200};
  `,

  icon: css`
    width: 1.25rem;
    height: 1.25rem;
  `,

  titleWrapper: css`
    display: flex;
    gap: 0.5rem;
    ${NEWTEXTS.TITLE2_B2428}
  `,
};
