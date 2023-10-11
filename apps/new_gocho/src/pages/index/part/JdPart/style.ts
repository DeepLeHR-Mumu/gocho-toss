import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { COLOR } from "shared-style/color";
import { TEMP } from "shared-style/mediaQuery";

export const cssObj = {
  sectionContainer: css`
    margin: 4.5rem 0;

    ${TEMP} {
      margin: 1.5rem 0;
    }
  `,

  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,

  title: css`
    ${NEWTEXTS.DISPLAY2_B3236};

    ${TEMP} {
      ${NEWTEXTS.TITLE5_B1620};
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
    background-color: ${isDisabled ? COLOR.GRAY50 : COLOR.WHITE};
    border: 1px solid ${COLOR.GRAY200};

    ${TEMP} {
      display: none;
    }

    > svg {
      color: ${isDisabled ? COLOR.GRAY100 : COLOR.GRAY450};
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

  colorPoint: css`
    color: ${COLOR.BLUE250};
  `,
};
