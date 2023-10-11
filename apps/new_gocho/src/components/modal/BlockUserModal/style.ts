import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    margin-bottom: 1.25rem;
  `,

  rowWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    color: ${COLOR.BLACK};
    ${NEWTEXTS.TITLE5_M1620};
  `,
};
