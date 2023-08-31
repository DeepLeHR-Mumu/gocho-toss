import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  recommandWrap: css`
    width: 100%;
    padding: 4.5rem 0;
  `,

  headerWrap: css`
    padding-bottom: 3rem;
  `,

  description: css`
    width: 100%;
    font-size: 1rem;
    margin-top: 1rem;
    line-height: 1.25rem;
    word-wrap: break-word;
    word-break: break-all;
    color: ${NEWCOLORS.BLUEGRAY400};
    white-space: nowrap;
  `,

  contentBox: css`
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
  `,
};
