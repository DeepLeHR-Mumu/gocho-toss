import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    margin: 4.5rem 0;
  `,

  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,

  title: css`
    ${NEWTEXTS.TITLE15};
  `,

  buttonContainer: css`
    display: flex;
    gap: 0 1.75rem;
  `,

  sliderButton: css`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid ${NEWCOLORS.GRAY200};

    > svg {
      color: ${NEWCOLORS.GRAY300};
      width: 2rem;
      height: 2rem;
    }
  `,

  sliderContainer: css`
    margin-top: 2.25rem;

    .slick-slide {
    }
  `,

  colorPoint: css`
    color: ${NEWCOLORS.BLUE250};
  `,

  cardContainer: css``,
};
