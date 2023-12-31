import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  background: css`
    background-color: ${COLOR.BLUE300};
    height: 28.5rem;
  `,

  wrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
  `,

  sideTitleWrapper: css`
    color: ${COLOR.WHITE};

    > div {
      ${TEXT.TITLE4_M1822}
      display: flex;
      align-items: center;

      > svg {
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 0 0.25rem 0.5rem;
      }
    }

    > p {
      margin-top: 1rem;
      ${TEXT.DISPLAY2_B3236}
    }
  `,

  sliderWrapper: css`
    margin: 1.75rem 0;
    position: relative;
    width: 51rem;
    height: 25rem;
    border-radius: 1rem;
    overflow: hidden;

    .slick-track,
    .slick-list {
      -webkit-perspective: 2000px;
      perspective: 2000px;
    }

    .slick-dots {
      display: inline-block;
      right: 1.5rem;
      bottom: 1rem;
      width: auto;
    }

    .slick-dots li {
      list-style: none;
      display: inline-block;
      cursor: auto;
      margin: 0;
      padding: 0;
    }

    .slick-dots li button {
      border-radius: 50%;
      background-color: ${COLOR.GRAY450};
      color: transparent;
      cursor: pointer;
      display: block;
      width: 6px;
      height: 6px;
      padding: 0;

      ::before {
        display: none;
      }
    }

    .slick-dots li.slick-active button {
      background-color: ${COLOR.WHITE};
      width: 10px;
      height: 10px;
    }
  `,

  sliderButton: (position: "left" | "right") => css`
    position: absolute;
    transform: translate(0, -50%);
    top: 50%;
    ${position === "left" ? "left: 2.5rem;" : "right: 1.5rem;"};
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 1rem;
    border: 1px solid ${COLOR.WHITE};
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

    > svg {
      color: ${COLOR.GRAY450};
      width: 2rem;
      height: 2rem;
    }
  `,

  bannerWrapper: css`
    display: inline-block;
    width: 50rem;
    height: 25rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    margin-left: 1rem;

    > img {
      object-fit: cover;
    }
  `,

  dummyBanner: css`
    display: inline-block;
    width: 50rem;
    height: 25rem;
    overflow: hidden;
    border-radius: 1rem;
    position: relative;
    box-sizing: border-box;
    margin-left: 1rem;

    background-color: ${COLOR.GRAY100};
  `,
};
