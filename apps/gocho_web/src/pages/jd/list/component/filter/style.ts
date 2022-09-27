import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "shared-style/color";
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
  align-items: center;
  position: relative;
  margin-bottom: 0.5rem;
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
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.BLUE_FIRST40};
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.BLUE_FIRST40};
  border-radius: 1.5rem;
  margin-right: 0.5rem;

  > svg {
    margin-left: 0.2rem;
  }
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
  z-index: 10;
`;

export const menuButton = (active = false) => {
  return css`
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY100};
    margin-right: 0.5rem;
    border: 1px solid ${COLORS.GRAY70};
    box-shadow: ${active ? "0 14px 24px 0 #00000040" : "none"};
    border-radius: ${active ? "1.5rem 1.5rem 0 0" : "1.5rem"};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    white-space: nowrap;
    height: 2.5rem;
  `;
};

export const menuArrow = css`
  line-height: 0;
  margin-left: 0.25rem;
  color: ${COLORS.GRAY70};
`;

interface SetFilterMenuDef {
  (isCategoryLengthThen11: boolean): SerializedStyles;
}

export const setFilterMenu: SetFilterMenuDef = (isCategoryLengthThen11) => {
  return css`
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(11, auto);
    grid-column-gap: 1rem;
    justify-items: start;
    min-width: 6rem;
    top: 2.4375rem;
    position: absolute;
    z-index: 30;
    background-color: white;
    padding: 1rem 0.75rem;
    border-radius: ${isCategoryLengthThen11 ? "0 1.5rem 1.5rem 1.5rem" : "0 0 1.5rem 1.5rem"};
    border: 1px solid ${COLORS.GRAY70};
    box-shadow: 0 14px 24px 0 #00000040;
  `;
};

export const menuCategory = (active = false) => {
  return css`
    cursor: pointer;
    display: flex;
    font-size: 0.875rem;
    color: ${active ? COLORS.GRAY10 : `${COLORS.GRAY60}`};
    margin-bottom: 0.25rem;
  `;
};

export const userFilterButton = css`
  font-size: 0.875rem;
  color: ${COLORS.BLUE_NEON40};
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.BLUE_NEON40};
  border-radius: 1.5rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  font-weight: 400;
  white-space: nowrap;
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
    align-items: center;
    justify-content: space-around;
    font-size: 0.875rem;
    font-weight: 400;
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
    padding: 0 1.5rem;
    border-radius: 1.5rem;
    height: 2.5rem;

    > span {
      margin-right: 0.25rem;
    }
  `;
};

export const submitButton = css`
  font-size: 0.875rem;
  height: 2.5rem;
  color: ${COLORS.BLUE_NEON40};
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  border: 1px solid ${COLORS.BLUE_NEON40};
  width: fit-content;
  word-break: keep-all;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0 1rem;
`;
