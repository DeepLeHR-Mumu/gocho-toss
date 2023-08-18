import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const dimmed = css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 80;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const sectionWrapper = css`
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  width: 90vw;
  height: 70vh;
  border-radius: 2rem;
  overflow: hidden;
  background-color: ${COLORS.GRAY100};
  box-sizing: border-box;
  z-index: 100;
`;

export const wrapperSkeleton = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.GRAY100};
  box-sizing: border-box;
  z-index: 100;
`;

export const headerWrapper = css`
  padding: 0.75rem 1.5rem;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
`;

export const closeCommentButton = css`
  margin-right: 1rem;
  font-size: 1.25rem;
`;

export const imageBox = css`
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: relative;
  > img {
    object-fit: contain;
  }
`;

export const companyName = css`
  color: ${COLORS.GRAY10};
  font-weight: 700;
  padding-left: 0.5rem;
  line-height: 1.4;
  ${shorten()};
`;
