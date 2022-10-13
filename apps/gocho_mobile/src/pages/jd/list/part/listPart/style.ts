import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const partContainer = css`
  position: relative;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: ${COLORS.GRAY90};
  margin-top: -1rem;
  padding: 1.5rem 0 3rem;
  z-index: 10;
`;

export const titleContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const filterButton = css`
  font-size: 0.75rem;
  font-weight: 400;
  width: fit-content;
  border: 1px solid ${COLORS.GRAY70};
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: ${COLORS.GRAY100};
`;

export const searchWrapper = css`
  position: relative;
  margin-bottom: 1rem;
`;

export const searchBox = css`
  width: 100%;
  font-family: Noto Sans KR, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0.5rem 2rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.GRAY80};

  ::placeholder {
    color: #b2b2b2;
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
`;

export const setJobOrderButton = (active = false) => {
  return css`
    font-size: 0.75rem;
    width: fit-content;
    text-align: center;
    border-radius: 1.5rem;
    border: 1px solid ${active ? COLORS.GRAY10 : `${COLORS.GRAY80}`};
    color: ${COLORS.GRAY10};
    background-color: ${active ? COLORS.STATE_SUCCESS : `${COLORS.GRAY100}`};
    margin-right: 0.5rem;
    padding: 0.5rem 0.75rem;
    transition: all 0.2s ease;
  `;
};
