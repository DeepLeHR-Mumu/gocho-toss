import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: sticky;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  height: 5rem;
  display: flex;
  align-items: stretch;
  padding: 1rem 1.5rem;
  z-index: 20;
`;

export const bookmarkButton = (isBookmarked: boolean) => {
  return css`
    background-color: ${isBookmarked ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
    color: ${isBookmarked ? COLORS.BLUE_FIRST40 : COLORS.GRAY60};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
    margin-right: 0.5rem;
  `;
};

export const buttonBox = css`
  display: flex;
  flex-grow: 1;
  gap: 0 0.5rem;
`;
