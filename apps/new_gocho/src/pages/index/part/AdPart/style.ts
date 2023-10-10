import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { TEMP } from "shared-style/mediaQuery";

export const cssObj = {
  sectionContainer: css`
    position: relative;
    background: linear-gradient(to bottom, ${NEWCOLORS.BLUE300} 320px, white 320px);

    ${TEMP} {
      background: linear-gradient(to bottom, ${NEWCOLORS.BLUE300} 120px, white 120px);
    }

    .slick-dots {
      display: inline-block;
      vertical-align: middle;
      margin: auto 0 1.5rem;
      padding: 0;
    }

    .slick-dots li {
      list-style: none;
      cursor: pointer;
      display: inline-block;
      margin: 0;
      padding: 0;
    }

    .slick-dots li button {
      border-radius: 50%;
      background-color: ${NEWCOLORS.GRAY450};
      color: transparent;
      cursor: pointer;
      display: block;
      margin: 0 4px;
      padding: 0;
      width: 4px;
      height: 4px;

      ::before {
        display: none;
      }
    }

    .slick-slide button {
      width: 100%;
      margin: 0;
    }

    .slick-dots li.slick-active button {
      background-color: ${NEWCOLORS.WHITE};
      width: 6px;
      height: 6px;
    }
  `,

  sliderContainer: css`
    padding-top: 2.5rem;

    ${TEMP} {
      padding-top: 1rem;
    }
  `,

  banner: css`
    margin: 0 1rem;

    ${TEMP} {
      margin: 0 0.5rem;
    }
  `,

  imageWrapper: css`
    width: 67.5rem;
    height: 27rem;
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    overflow: hidden;
    position: relative;

    > img {
      object-fit: cover;
    }
  `,

  sliderButton: (position: "left" | "right") => css`
    position: absolute;
    transform: translate(0, -50%);
    top: 50%;
    ${position === "left" ? "left: calc(50% - 520px);" : "right: calc(50% - 520px);"};
    width: 2.5rem;
    height: 2.5rem;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.WHITE};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

    > svg {
      color: ${NEWCOLORS.GRAY450};
      width: 2rem;
      height: 2rem;
    }
  `,
};
