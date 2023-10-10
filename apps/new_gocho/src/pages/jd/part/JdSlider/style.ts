import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    margin: 3rem 0;
  `,

  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,

  title: css`
    ${NEWTEXTS.DISPLAY2_B3236};
  `,

  buttonContainer: css`
    display: flex;
    gap: 0 1.75rem;
  `,

  sliderButton: (isDisabled: boolean) => css`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${isDisabled ? NEWCOLORS.GRAY50 : NEWCOLORS.WHITE};
    border: 1px solid ${NEWCOLORS.GRAY200};
    cursor: ${isDisabled ? "default" : "pointer"};

    > svg {
      color: ${isDisabled ? NEWCOLORS.GRAY100 : NEWCOLORS.GRAY300};
      width: 2rem;
      height: 2rem;
    }
  `,

  sliderContainer: css`
    margin-top: 2.25rem;
  `,

  cardContainer: css`
    display: flex;
    gap: 0 1rem;
    overflow-x: scroll;

    * ::-webkit-scrollbar {
      display: none;
    }
  `,
};
