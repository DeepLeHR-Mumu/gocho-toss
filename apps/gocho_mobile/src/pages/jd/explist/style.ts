import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const mainContainer = css`
  padding: 2rem 0;
`;

export const sectionContainer = css`
  padding: 2rem 0;
`;

export const searchContainer = css`
  position: relative;
  margin-bottom: 1rem;
`;

export const searchBox = css`
  width: 100%;
  height: 2.5rem;
  font-family: Noto Sans KR, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0.5rem 2rem;
  border-radius: 1.5rem;
  border: 1px solid ${COLORS.GRAY80};
`;

export const searchButton = css`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translate(0, -50%);
  color: ${COLORS.GRAY40};
  width: 1.25rem;
`;

export const buttonArrContainer = css`
  display: flex;
  align-items: center;
`;

export const setJobOrderButton = (active = false) => {
  return css`
    font-size: 0.875rem;
    width: fit-content;
    text-align: center;
    border-radius: 1.5rem;
    border: 1px solid ${active ? COLORS.GRAY10 : `${COLORS.GRAY80}`};
    color: ${COLORS.GRAY10};
    background-color: ${active ? COLORS.STATE_SUCCESS : `${COLORS.GRAY100}`};
    margin-right: 0.25rem;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease;
  `;
};
