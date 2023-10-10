import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  imageWrapper: css`
    padding: 1rem 1.25rem 0.375rem;
    height: 7.5rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 1.25rem;
  `,

  contentTitle: css`
    color: ${NEWCOLORS.GRAY600};
    margin-bottom: 0.5rem;
    ${NEWTEXTS.TITLE4_M1822}
  `,

  content: css`
    ${NEWTEXTS.TITLE4_M1822}
  `,
};
