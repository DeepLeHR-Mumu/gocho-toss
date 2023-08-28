import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  sectionContainer: css`
    position: relative;
    background: linear-gradient(to bottom, ${NEWCOLORS.BLUE250} 320px, white 320px);
  `,

  sliderContainer: css`
    padding-top: 2.5rem;
  `,

  banner: css`
    margin: 0 1rem;
  `,

  imageWrapper: css`
    width: 67.5rem;
    height: 26.25rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;

    > img {
      object-fit: fill;
    }
  `,

  sliderButton: (position: "left" | "right") => {
    return css`
      position: absolute;
      top: 45%;
      ${position === "left" ? "left: 1rem" : "right: 1rem"};

      width: 2.5rem;
      height: 2.5rem;
      border-radius: 1rem;
      border: 1px solid ${NEWCOLORS.WHITE};
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

      ${MOBILE} {
        display: none;
      }

      > svg {
        color: ${NEWCOLORS.GRAY300};
        width: 2rem;
        height: 2rem;
      }
    `;
  },
};
