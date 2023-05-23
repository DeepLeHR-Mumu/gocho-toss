import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const headerCSS = css`
  background-color: ${COLORS.GRAY100};
  margin-bottom: 1rem;
  padding: 1.5rem;
  box-sizing: border-box;
  border-radius: 1rem;
  box-shadow: 0px 0px 0.5rem rgba(43, 43, 43, 0.1);
  display: flex;
  position: relative;
  align-items: flex-start;
`;

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

export const applyEndButton = css`
  background-color: ${COLORS.GRAY90};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.5rem;
  height: 2.5rem;
  border-radius: 2rem;
  color: ${COLORS.GRAY70};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const viewCSS = css`
  position: absolute;
  right: 1rem;
  top: 1.6rem;
  color: ${COLORS.GRAY60};
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  > svg {
    margin-right: 0.4rem;
  }
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

    > svg {
      margin-right: 0.2rem;
    }
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

export const dateCSS = css`
  background-color: #f2f2f2;
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  color: ${COLORS.GRAY40};
  font-size: 0.875rem;
  height: 1.5rem;
  font-weight: 400;
  border-radius: 1rem;
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

export const companyNameCSS = css`
  display: flex;
  align-items: center;
  color: ${COLORS.GRAY10};
  text-decoration: underline;
  margin-bottom: 0.375rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
`;

export const imageBox = css`
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
  margin-right: 1.5rem;
  > img {
    object-fit: contain;
  }
`;

export const dateBox = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.375rem;

  > li {
    margin-right: 0.5rem;
  }
`;

export const titleCSS = css`
  color: ${COLORS.GRAY10};
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 2rem;
  margin-bottom: 2rem;
  word-break: keep-all;
`;

export const linksCSS = css`
  display: flex;
  align-items: center;

  > li {
    margin-right: 0.5rem;

    :last-of-type {
      margin-right: 0;
    }
  }
`;
