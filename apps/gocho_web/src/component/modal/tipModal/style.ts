import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const modalWrapper = css`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60rem;
  height: 85vh;
`;

export const contentContainer = css`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  width: 60rem;
  height: 85vh;
  padding: 2rem 7rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 1rem;
  text-align: left;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
    max-height: 80vh;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.BLUE_NEON40};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${COLORS.GRAY100};
    margin: 1rem 0;
  }
`;

export const closeButtonWrapper = css`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 60;
  transform: translate(35%, -35%);
`;

export const tagListCSS = css`
  display: flex;
  color: ${COLORS.BLUE_FIRST40};
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
`;

export const tagCSS = css`
  margin-right: 0.25rem;

  :before {
    content: "#";
  }
`;

export const likeButtonCSS = (isBookmark: boolean) => {
  return css`
    color: ${isBookmark ? COLORS.BLUE_FIRST40 : COLORS.GRAY40};
  `;
};

export const titleCSS = css`
  font-size: 1.5rem;
  font-weight: 700;
  padding-bottom: 0.75rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${COLORS.GRAY90};
`;

export const sliderContainer = css`
  position: relative;
`;

export const tipImageBox = css`
  overflow: hidden;
  margin: 2.5rem auto 0;
  max-width: 45rem;
  height: 45rem;
  position: relative;
`;

export const controlWrapper = css`
  position: absolute;
  bottom: 1rem;
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
  color: ${COLORS.GRAY30};
  padding: 2rem 0 5rem;
  border-bottom: 1px solid ${COLORS.GRAY90};
  margin-bottom: 1rem;
  line-height: 1.5;
  word-break: break-all;
`;

export const infoContainer = css`
  display: flex;
  font-size: 0.875rem;
`;

export const info = css`
  margin-right: 1rem;
  color: ${COLORS.GRAY40};

  :after {
    content: " · ";
    margin-left: 1rem;
  }
`;

export const numInfo = css`
  margin: 0 1rem 0 0.25rem;
  color: ${COLORS.GRAY10};

  :after {
    content: " · ";
    margin-left: 1rem;
  }

  :last-child:after {
    content: "";
  }
`;
