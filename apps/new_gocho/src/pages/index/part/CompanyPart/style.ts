import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    margin: 4.5rem 0 7.5rem;
  `,

  title: css`
    ${TEXT.DISPLAY2_B3236};
  `,

  controlContainer: css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 2.25rem;
  `,

  keywordContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.25rem;
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
    > svg {
      color: ${isDisabled ? COLOR.GRAY100 : COLOR.GRAY450};
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
