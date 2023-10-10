import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    gap: 4rem;
  `,

  link: css`
    border-radius: 0.5rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    padding: 0.875rem 1.25rem 0.875rem 1.25rem;
    flex-grow: 1;
    ${NEWTEXTS.TITLE5_M1620}
  `,

  button: (buttonType: string) => css`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin: 0 auto;
    background-color: ${buttonType === "copy" ? NEWCOLORS.BLUE200 : NEWCOLORS.BLACK};
    color: ${NEWCOLORS.BLUE300};

    > svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${NEWCOLORS.WHITE};
    }
  `,

  desc: css`
    ${NEWTEXTS.BODY3_R1422};
    color: ${NEWCOLORS.BLUEGRAY400};
    margin-top: 0.5rem;
  `,
};
