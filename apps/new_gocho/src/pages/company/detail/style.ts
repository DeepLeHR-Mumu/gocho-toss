import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  background: css`
    background-color: ${NEWCOLORS.GRAY100};
  `,

  wrapper: css`
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  `,
};

export const commonCssObj = {
  box: css`
    border-radius: 1rem;
    padding: 2rem 1.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    background-color: ${NEWCOLORS.WHITE};
    position: relative;
  `,

  title: css`
    margin-bottom: 1.75rem;
    ${NEWTEXTS.TITLE14}
  `,
};
