import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const mainContainer = css`
  padding: 2rem 0;
`;

export const headerContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const title = css`
  font-size: 1.375rem;
  font-weight: 500;
  margin-right: 1.5rem;
`;

export const buttonArrContainer = css`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const setBookmarkViewButton = (active = false) => {
  return css`
    font-weight: 400;
    font-size: 0.875rem;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid ${active ? COLORS.GRAY10 : `${COLORS.GRAY70}`};
    color: ${active ? COLORS.GRAY100 : `${COLORS.GRAY30}`};
    background-color: ${active ? COLORS.GRAY10 : "transparent"};
    margin-right: 0.5rem;
    padding: 0.25rem 1rem;
    transition: all 0.2s ease;

    :last-of-type {
      margin-right: 0;
    }
  `;
};
