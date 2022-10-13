import { css } from "@emotion/react";

export const listContainer = css`
  margin: 1.5rem 0;

  .slick-slider {
    width: 100%;
    overflow: hidden;
  }

  .slick-list {
    position: relative;
    display: block !important;
    width: 100%;
  }

  .slick-slide {
    padding: 0.25rem;
  }

  .slick-slide > div {
    width: auto;
    margin: 0 0.25rem;
  }
`;
