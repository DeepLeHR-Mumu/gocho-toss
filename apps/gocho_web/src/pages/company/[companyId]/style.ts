import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const mainContainer = css`
  background-color: #f2f2f6;
  padding-top: 1rem;
  padding-bottom: 5.5rem;
`;

export const mainContainerSkeleton = css`
  background-color: #f2f2f6;
  padding-top: 1rem;
  height: 1080px;
`;

export const buttonContainer = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const changeDataButton = (active = false) => {
  return css`
    width: calc(50% - 5px);
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    border-style: solid;
    border-color: ${active ? COLORS.BLUE_FIRST40 : COLORS.GRAY60};
    border-width: ${active ? "2px" : "1px"};
    color: ${active ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY40}`};
    background-color: ${active ? COLORS.GRAY100 : COLORS.STATE_SUCCESS};
    font-size: 1.125rem;
    font-weight: 500;
    transition: all 0.2s ease;
  `;
};

export const flexBox = css`
  display: flex;
  align-items: flex-start;
`;

export const partContainer = css`
  margin-right: 1rem;
  flex-grow: 1;
`;

export const sectionContainer = css`
  background-color: ${COLORS.GRAY100};
  border-radius: 2rem;
  margin-bottom: 6rem;

  :last-of-type {
    margin-bottom: 2.25rem;
  }
`;

export const warningDesc = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY30};
  font-weight: 400;
`;
