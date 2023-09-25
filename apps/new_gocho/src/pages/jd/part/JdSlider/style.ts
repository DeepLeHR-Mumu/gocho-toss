import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  sectionContainer: css`
    margin: 3rem 0;

    ${MOBILE} {
      margin: 1.5rem 0;
    }
  `,

  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,

  title: css`
    ${NEWTEXTS.TITLE15};

    ${MOBILE} {
      ${NEWTEXTS.TITLE9};
    }
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

    ${MOBILE} {
      display: none;
    }

    > svg {
      color: ${isDisabled ? NEWCOLORS.GRAY100 : NEWCOLORS.GRAY300};
      width: 2rem;
      height: 2rem;
    }
  `,

  sliderContainer: css`
    margin-top: 2.25rem;

    ${MOBILE} {
      margin-top: 1.5rem;
    }
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