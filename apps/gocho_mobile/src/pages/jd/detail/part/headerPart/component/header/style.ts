import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const headerWrapper = css`
  background-color: ${COLORS.GRAY100};
  margin: 2rem 0;
  padding: 1.5rem;
  box-sizing: border-box;
  border-radius: 1rem;
  box-shadow: 0px 0px 0.5rem rgba(43, 43, 43, 0.1);
  position: relative;
`;

export const flexBox = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const logoContainer = css`
  width: 8.5rem;
  height: 8.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 2px 8px rgba(160, 160, 160, 0.25);
`;

export const logoBox = css`
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 1.5rem;
`;

interface BookmarkButtonDef {
  (isBookmarked: boolean): SerializedStyles;
}

export const bookmarkButton: BookmarkButtonDef = (isBookmarked) => {
  return css`
    color: ${isBookmarked ? COLORS.BLUE_FIRST40 : COLORS.GRAY60};
    font-size: 1rem;
    margin-left: 0.375rem;
  `;
};

export const applyButton = css`
  background-color: ${COLORS.BLUE_FIRST40};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.5rem;
  height: 2.5rem;
  border-radius: 2rem;
  color: ${COLORS.GRAY100};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const cutBox = css`
  font-size: 0.75rem;
  white-space: nowrap;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
  border-radius: 1rem;
  width: fit-content;
  height: 1.625rem;
  background-color: #f2f2f2;
  color: #1553cd;
`;

interface ButtonCSSDef {
  (isBookmarked: boolean): SerializedStyles;
}

export const buttonCSS: ButtonCSSDef = (isBookmarked) => {
  return css`
    background-color: ${isBookmarked ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
    color: ${isBookmarked ? COLORS.BLUE_FIRST40 : COLORS.GRAY60};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8.5rem;
    height: 2.5rem;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
  `;
};

export const youtubeButton = css`
  background-color: ${COLORS.GRAY90};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: ${COLORS.GRAY30};
  font-size: 1.125rem;
`;

export const dateBox = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  > li {
    margin-right: 0.5rem;
  }
`;

export const date = css`
  background-color: #f2f2f2;
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  color: ${COLORS.GRAY40};
  font-size: 0.875rem;
  height: 1.625rem;
  font-weight: 400;
  border-radius: 1rem;
`;

export const companyName = css`
  display: flex;
  align-items: center;
  color: ${COLORS.GRAY10};
  text-decoration: underline;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

export const title = css`
  color: ${COLORS.GRAY10};
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2rem;
  word-break: keep-all;
`;

export const linkContainer = css`
  > li {
    margin-bottom: 0.5rem;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;
