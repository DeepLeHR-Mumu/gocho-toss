import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { filterQueryDef } from "./type";

export const filterContainer = css`
  width: 100%;
  z-index: 30;
`;

export const closeButton = css`
  font-size: 0.875rem;
  margin: 0 0 0 auto;
  padding: 1rem 2rem 0 0;
  color: ${COLORS.BLUE_FIRST40};
`;

export const flexBox = css`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  margin: 1rem 0;
`;

export const filterText = css`
  flex-grow: 1;
`;

export const filterSelect = css`
  display: flex;
  width: 100%;
  height: 21rem;
`;

export const menuButton = (active = false) => {
  return css`
    display: flex;
    height: 3rem;
    justify-content: space-between;
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    background-color: ${active ? COLORS.GRAY100 : COLORS.GRAY90};
    width: 10rem;
    padding: 0.75rem 1.5rem;
    border-top: 1px solid ${COLORS.GRAY70};
    border-bottom: ${active ? "2px solid #387AFC" : "none"};
  `;
};

export const menuArrow = css`
  margin-top: 0.125rem;
`;

export const filterCategoryContainer = css`
  flex-grow: 1;
  background-color: ${COLORS.GRAY100};
  overflow-y: scroll;
  border-left: 1px solid ${COLORS.GRAY70};
`;

export const menuCategoryInput = css`
  margin: 0;
`;

export const menuCategory = (active = false) => {
  return css`
    display: flex;
    align-items: center;
    height: 3rem;
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    background-color: ${active ? COLORS.GRAY100 : COLORS.GRAY95};
    padding: 0.75rem 1.5rem;
    //border: 1px solid ${COLORS.GRAY70};
  `;
};

export const userFilterButton = css`
  font-size: 0.875rem;
  color: ${COLORS.BLUE_FIRST40};
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.BLUE_FIRST40};
  border-radius: 1.5rem;
  padding: 0.5rem 0.75rem;
  margin-left: 0.5rem;
`;

export const activeCategoryContainer = css`
  display: flex;
  overflow-x: scroll;
  align-items: flex-start;
  padding: 1rem;
`;

export const categoryBox = (menu: filterQueryDef | null) => {
  return css`
    display: flex;
    word-break: keep-all;
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY90};
    ${menu === "possibleEdu" && "background-color: #FFE3FC;"}
    ${menu === "place" && "background-color: #FFF4DC;"}
    ${menu === "requiredExp" && `background-color: ${COLORS.PURPLE70};`}
    ${menu === "contractType" && "background-color: #FFE3CF;"}
    ${menu === "rotation" && "background-color: #DFFFCF;"}
    ${menu === "industry" && "background-color: #D6E4FF;"}
    ${menu === "task" && "background-color: #E9EFFA;"}
    padding: 0.75rem 1.5rem;
    margin-right: 0.5rem;
    border-radius: 1.5rem;
  `;
};

export const deleteCategory = css`
  margin-left: 0.25rem;
`;

export const title = css`
  width: 7rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
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
