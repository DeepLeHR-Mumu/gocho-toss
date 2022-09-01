import { css } from "@emotion/react";
import { COLORS } from "@style/constant";
import { filterQueryDef } from "./type";

export const filterMenuClose = css`
  position: fixed;
  cursor: default;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const filterSelect = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 4rem 0 0.75rem;
  align-items: center;
  position: relative;
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
  color: ${COLORS.BLUE_FIRST40};
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.BLUE_FIRST40};
  border-radius: 1.5rem;
  padding: 0.75rem 0.75rem;
  margin-right: 0.5rem;
`;

export const colorPoint = css`
  color: ${COLORS.GRAY40};
  margin-right: 0.25rem;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
`;

export const menuBox = css`
  z-index: 30;
`;

export const menuButton = (active = false) => {
  return css`
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY100};
    min-width: 5.75rem;
    padding: 0.75rem;
    margin-right: 0.5rem;
    border: 1px solid ${COLORS.GRAY70};
    box-shadow: ${active ? "0 14px 24px 0 #00000040" : "none"};
    border-radius: ${active ? "1.5rem 1.5rem 0 0" : "1.5rem"};
  `;
};

export const menuArrow = css`
  margin-top: 0.125rem;
`;

export const setFilterMenu = css`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(11, auto);
  grid-row-gap: 0.25rem;
  grid-column-gap: 0.5rem;
  justify-items: start;
  min-width: 5.75rem;
  position: absolute;
  z-index: 30;
  background-color: white;
  padding: 1rem 0.75rem;
  border-radius: 0 0 1.5rem 1.5rem;
  border: 1px solid ${COLORS.GRAY80};
  box-shadow: 0 14px 24px 0 #00000040;
`;

export const menuCategory = (active = false) => {
  return css`
    display: flex;
    font-size: 0.875rem;
    color: ${active ? COLORS.GRAY10 : `${COLORS.GRAY60}`};
  `;
};

export const userFilterButton = css`
  font-size: 0.875rem;
  color: ${COLORS.BLUE_FIRST40};
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.BLUE_FIRST40};
  border-radius: 1.5rem;
  padding: 0.75rem;
  margin-left: 0.5rem;
`;

export const activeCategoryContainer = css`
  background-color: ${COLORS.GRAY80};
  border-top: solid 1px ${COLORS.GRAY70};
  border-bottom: solid 1px ${COLORS.GRAY70};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const activeCategory = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
`;

export const categoryBox = (menu: filterQueryDef | null) => {
  return css`
    display: flex;
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY100};
    ${menu === "possibleEdu" && "background-color: #FFE3FC;"}
    ${menu === "place" && "background-color: #FFF4DC;"}
    ${menu === "requiredExp" && `background-color: ${COLORS.PURPLE70};`}
    ${menu === "contractType" && "background-color: #FFE3CF;"}
    ${menu === "rotation" && "background-color: #DFFFCF;"}
    ${menu === "industry" && "background-color: #D6E4FF;"}
    ${menu === "task" && "background-color: #E9EFFA;"}
    width: fit-content;
    padding: 0.75rem 1.5rem;
    border-radius: 1.5rem;
  `;
};

export const deleteCategory = css`
  margin-left: 0.25rem;
`;

export const submitButton = css`
  font-size: 0.875rem;
  color: ${COLORS.BLUE_FIRST40};
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  border: 1px solid ${COLORS.BLUE_FIRST40};
  width: fit-content;
  padding: 0.5rem 1rem;
`;
