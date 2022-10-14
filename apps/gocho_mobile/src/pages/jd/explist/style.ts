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

export const title = css`
  display: block;
  font-size: 1rem;
  color: ${COLORS.GRAY10};
  font-weight: 700;
`;

export const searchBox = css`
  width: 100%;
  height: 2.5rem;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 3rem 0.5rem 1.5rem;
  border-radius: 2rem;
  border: 1px solid ${COLORS.GRAY80};

  ::placeholder {
    color: #b2b2b2;
  }
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
    width: fit-content;
    height: 2.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    border: 1px solid ${active ? COLORS.GRAY10 : COLORS.GRAY80};
    color: ${COLORS.GRAY10};
    background-color: ${active ? COLORS.STATE_SUCCESS : COLORS.GRAY100};
    margin-right: 0.5rem;
    font-size: 0.75rem;
    font-weight: 400;
    white-space: nowrap;
    padding: 0 0.75rem;
    transition: all 0.2s ease;

    :last-of-type {
      margin-right: 0;
    }
  `;
};

export const noDataBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
`;

export const noDataDesc = css`
  color: ${COLORS.GRAY30};
  font-size: 1rem;
  font-weight: 500;
`;
