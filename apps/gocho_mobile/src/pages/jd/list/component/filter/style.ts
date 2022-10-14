import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { filterQueryDef } from "./type";

export const filterContainer = css`
  width: 100%;
  height: 70vh;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 30;
  position: relative;
  padding-top: 3rem;
`;

export const closeButton = css`
  position: absolute;
  font-size: 1rem;
  right: 1rem;
  top: 0.875rem;
  font-weight: 500;
  color: ${COLORS.BLUE_FIRST40};
`;

export const flexBox = css`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
`;

export const filterText = css`
  flex-grow: 1;
  font-size: 1rem;
  color: ${COLORS.GRAY10};
  font-weight: 700;
`;

export const filterSelect = css`
  display: flex;
  width: 100%;
  height: 21rem;
  border-top: 1px solid ${COLORS.GRAY80};
`;

export const menuButton = (active = false) => {
  return css`
    display: flex;
    height: 3rem;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    background-color: ${active ? COLORS.GRAY100 : COLORS.GRAY90};
    width: 10rem;
    padding: 0 1.5rem;
    transition: all 0.2s ease;
    border-bottom: ${active ? `2px solid ${COLORS.BLUE_NEON40}` : `1px solid ${COLORS.GRAY70}`};
  `;
};

export const menuArrow = css`
  margin-top: 0.125rem;
  color: ${COLORS.GRAY30};
`;

export const filterCategoryContainer = css`
  flex-grow: 1;
  background-color: ${COLORS.GRAY100};
  overflow-y: scroll;
  border-left: 1px solid ${COLORS.GRAY70};
`;

export const categoryArr = css`
  > li {
    line-height: 0;
    width: 100%;
  }
`;

export const categoryActiveCSS = (isActive: boolean) => {
  return css`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${isActive ? COLORS.GRAY100 : COLORS.GRAY95};
  `;
};

export const menuCategoryInput = css`
  margin: 0;
`;

export const menuCategory = css`
  display: flex;
  width: 100%;
  align-items: center;
  white-space: nowrap;
  height: 2.5rem;
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  padding-left: 1.5rem;
`;

export const userFilterButton = css`
  width: fit-content;
  height: 2.5rem;
  font-size: 0.875rem;
  color: ${COLORS.BLUE_FIRST40};
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.BLUE_FIRST40};
  border-radius: 2rem;
  padding: 0 0.75rem;
  margin-left: 0.5rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.75rem;
`;

export const activeCategoryContainer = css`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.BLUE_NEON40};
  }

  ::-webkit-scrollbar-track {
    background-color: ${COLORS.GRAY90};
  }
`;

export const categoryBox = (menu: filterQueryDef | null) => {
  return css`
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY90};
    width: fit-content;
    height: 2.5rem;
    ${menu === "possibleEdu" && "background-color: #FFE3FC;"}
    ${menu === "place" && "background-color: #FFF4DC;"}
    ${menu === "requiredExp" && `background-color: ${COLORS.PURPLE70};`}
    ${menu === "contractType" && "background-color: #FFE3CF;"}
    ${menu === "rotation" && "background-color: #DFFFCF;"}
    ${menu === "industry" && "background-color: #D6E4FF;"}
    ${menu === "task" && "background-color: #E9EFFA;"}
    padding: 0 1.5rem;
    margin-right: 0.5rem;
    border-radius: 2rem;
  `;
};

export const title = css`
  width: 7rem;
  font-size: 0.875rem;
  font-weight: 400;
  white-space: nowrap;
  color: ${COLORS.GRAY40};
  margin-right: 0.5rem;
`;

export const resetButton = css`
  font-size: 0.875rem;
  width: 7rem;
  word-break: keep-all;
  color: ${COLORS.BLUE_FIRST40};
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.BLUE_FIRST40};
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
`;

export const colorPoint = css`
  color: ${COLORS.GRAY40};
  margin-right: 0.25rem;
`;

export const submitButton = css`
  flex-grow: 1;
  font-size: 0.875rem;
  color: ${COLORS.BLUE_FIRST40};
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  border: 1px solid ${COLORS.BLUE_FIRST40};
  word-break: keep-all;
  white-space: nowrap;
  padding: 0.5rem 1rem;
`;
