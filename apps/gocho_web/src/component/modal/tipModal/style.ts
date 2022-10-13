import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const modalWrapper = css`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60rem;
  height: 70vh;
  background-color: ${COLORS.GRAY100};
  border-radius: 2rem;
`;

export const contentContainer = css`
  overflow: hidden;
  overflow-y: scroll;
  height: 70vh;
  padding: 2.5rem 7rem;

  ::-webkit-scrollbar {
    width: 5px;
    max-height: 70vh;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.BLUE_NEON40};
    border-radius: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${COLORS.GRAY100};
    margin: 1rem 0;
  }
`;

export const logoBox = css`
  width: 11.5rem;
  height: 1.5rem;
  position: relative;
  margin: 0 0 3rem auto;
`;

export const closeButtonWrapper = css`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  z-index: 60;
`;

export const tagListCSS = css`
  display: flex;
  align-items: center;
  color: ${COLORS.BLUE_FIRST40};
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid ${COLORS.GRAY70};
  padding-bottom: 1rem;

  > li {
    margin-right: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;

    :before {
      content: "#";
    }

    :last-of-type {
      margin-right: 0;
    }
  }
`;

export const likeButtonCSS = (isBookmark: boolean) => {
  return css`
    width: 2rem;
    font-size: 0.875rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 1rem;
    color: ${isBookmark ? COLORS.BLUE_FIRST40 : COLORS.GRAY20};
  `;
};

export const titleCSS = css`
  font-size: 1.5rem;
  font-weight: 700;
  display: block;
  text-align: left;
  margin-bottom: 1rem;
`;

export const sliderContainer = css`
  position: relative;
`;

export const tipImageBox = css`
  overflow: hidden;
  width: 100%;
  height: 25rem;
  position: relative;
`;

export const controlWrapper = css`
  position: absolute;
  bottom: 0rem;
  right: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(43, 43, 43, 0.4);
  border-radius: 1.5rem;
  padding: 0.75rem 1rem;
  color: ${COLORS.GRAY100};
`;

export const controlButton = css`
  font-size: 1rem;
  color: ${COLORS.GRAY100};
`;

export const page = css`
  margin: 0 0.75rem;
  font-size: 0.75rem;
`;

export const bodyCSS = css`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  color: ${COLORS.GRAY10};
  padding: 1.5rem 0 5.5rem;
  border-bottom: 1px solid ${COLORS.GRAY90};
  margin-bottom: 1rem;
  line-height: 1.8;
  word-break: break-all;
`;

export const infoContainer = css`
  align-items: center;
  display: flex;
`;

export const info = css`
  margin-right: 1rem;
  font-size: 0.875rem;
  color: ${COLORS.GRAY20};
`;

export const numInfo = css`
  width: 2rem;
  font-size: 0.875rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${COLORS.GRAY20};
`;
