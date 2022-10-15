import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const carouselContainer = css`
  .slick-dots {
    display: inline-block;
    vertical-align: middle;
    margin: auto 0 3rem;
    padding: 0;
  }

  .slick-dots li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 6px;
    padding: 0;
  }

  .slick-dots li button {
    border: none;
    background-color: ${COLORS.GRAY70};
    color: transparent;
    cursor: pointer;
    display: block;
    height: 0.25rem;
    width: 2.5rem;
    padding: 0;

    ::before {
      display: none;
    }
  }

  .slick-slide button {
    width: 100%;
    margin: 0;
  }

  .slick-dots li.slick-active button {
    background-color: ${COLORS.GRAY100};
  }
`;
