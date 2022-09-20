import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const sectionContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 3.5rem;
  padding: 1.5rem 3.5rem;
  border-radius: 0 0 1.5rem 1.5rem;
  background-color: ${COLORS.GRAY100};
`;

export const companyLogoBox = css`
  width: 7.5rem;
  height: 7.5rem;
  margin-right: 3rem;
  position: relative;
`;

export const infoContainer = css`
  flex-grow: 1;
`;

export const infoBox = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const bookmarkButton = (isBookmarked = false) => {
  return css`
    display: flex;
    align-items: center;
    padding: 0.25rem 1rem;
    border-radius: 1.5rem;
    background-color: ${isBookmarked ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
    color: ${isBookmarked ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY30}`};
    margin-right: 0.5rem;
    transition: all 0.2s ease;
  `;
};

export const icon = css`
  margin-top: 0.25rem;
  margin-right: 0.25rem;
`;

export const viewBox = css`
  color: ${COLORS.GRAY60};
`;

export const viewColor = css`
  color: ${COLORS.BLUE_FIRST30};
`;

export const companyName = css`
  font-size: 1.375rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const industry = css`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY40};
`;

export const catchLinkButton = css`
  font-size: 0.75rem;
  height: 2.5rem;
  padding: 0 1rem;
  margin-right: 0.5rem;
  color: ${COLORS.GRAY40};
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem;
`;

export const youtubeLinkButton = css`
  width: 2.5rem;
  height: 2.5rem;
  color: ${COLORS.GRAY30};
  background-color: ${COLORS.GRAY90};
  border-radius: 50%;
`;
