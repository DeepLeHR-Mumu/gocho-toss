import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const partCssObj = {
  partContainer: css`
    margin-bottom: 1.25rem;
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    background-color: ${COLOR.WHITE};

    :last-of-type {
      margin-bottom: 0;
    }
  `,
};
