import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";
import { TEMP } from "shared-style/mediaQuery";

export const cssObj = {
  sectionContainer: css`
    margin: 4.5rem 0 7.5rem;

    ${TEMP} {
      margin: 1.5rem 0;
    }
  `,

  title: css`
    ${NEWTEXTS.DISPLAY2_B3236};

    ${TEMP} {
      ${NEWTEXTS.TITLE5_B1620};
    }
  `,

  controlContainer: css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 2.25rem;

    ${TEMP} {
      margin-top: 1rem;
    }
  `,

  keywordContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.25rem;

    ${TEMP} {
      gap: 0.5rem 0.75rem;
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

    ${TEMP} {
      display: none;
    }

    > svg {
      color: ${isDisabled ? NEWCOLORS.GRAY100 : NEWCOLORS.GRAY450};
      width: 2rem;
      height: 2rem;
    }
  `,

  sliderContainer: css`
    margin-top: 2.25rem;

    ${TEMP} {
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
