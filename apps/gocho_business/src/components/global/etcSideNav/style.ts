import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  sideNavContainer: css`
    width: 11.25rem;
    height: fit-content;
    padding: 2rem 1.25rem;
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    background-color: ${COLOR.WHITE};
  `,

  link: (isActive: boolean) => css`
    ${isActive ? `${TEXT.TITLE5_B1620}` : `${TEXT.TITLE5_M1620}`};
    display: block;
    cursor: pointer;
    margin-bottom: 1.5rem;
    color: ${isActive ? `${COLOR.BLUE300}` : `${COLOR.BLACK}`};

    :last-of-type {
      margin-bottom: 0;
    }
  `,
};
