import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  addFieldButton: (state: boolean) => css`
    display: flex;
    gap: 0 0.5rem;
    border: 1px solid ${state ? COLOR.BLUE250 : COLOR.GRAY200};
    border-radius: 0.75rem;
    height: 3.25rem;
    padding: 1rem;
    background-color: ${state ? COLOR.BLUE100 : COLOR.GRAY50};
    ${TEXT.TITLE5_M1620};

    > svg {
      color: ${COLOR.GRAY450};
    }
  `,
};
