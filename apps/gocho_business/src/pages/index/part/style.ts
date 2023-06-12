import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const partCssObj = {
  partContainer: css`
    margin-bottom: 1.25rem;
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.WHITE};

    :last-of-type {
      margin-bottom: 0;
    }
  `,
};
