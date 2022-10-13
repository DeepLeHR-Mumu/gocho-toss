import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { openedElementDef } from "@component/global/gnb/type";

export const headerWrapper = css`
  display: flex;
  align-items: center;
  background-color: ${COLORS.GRAY100};
  width: 100%;
  position: sticky;
  top: 0;
  height: 3.25rem;
  z-index: 70;
`;

export const headerContainer = (openedElement: openedElementDef) => {
  return css`
    display: ${openedElement === "통합검색" ? "none" : "flex"};
    align-items: center;
  `;
};

export const logo = css`
  margin: 0 auto 0 0;
  height: 1.125rem;
  position: relative;
  cursor: pointer;
`;

export const icon = css`
  font-size: 1.25rem;
  margin-right: 0.5rem;
  color: ${COLORS.BLUE_FIRST40};

  :last-of-type {
    margin-right: 0;
  }
`;

export const unifiedSearchWrapper = (openedElement: openedElementDef) => {
  return css`
    display: ${openedElement === "통합검색" ? "flex" : "none"};
    width: 100%;
  `;
};

export const backIcon = css`
  font-size: 1.25rem;
`;

export const unifiedSearch = css`
  flex-grow: 1;
  height: 2.25rem;
  font-weight: 400;
  font-size: 0.875rem;
  background-color: ${COLORS.GRAY100};
  margin-left: 1.5rem;
  padding: 0.5rem 2rem;
  border-radius: 1.5rem;
  border: 1px solid ${COLORS.GRAY70};
  box-shadow: 0 2px 8px 0 #b4b4b440;

  :focus {
    border: 1px solid ${COLORS.BLUE_SECOND40};
  }
`;

export const searchButton = css`
  position: absolute;
  top: 50%;
  right: 2.25rem;
  transform: translate(0, -50%);
  color: ${COLORS.GRAY40};
  width: 1.25rem;
`;

export const navContainer = (isOn = false) => {
  return css`
    display: ${isOn ? "block" : "none"};
    position: absolute;
    top: 3.25rem;
    width: 100%;
    background-color: ${COLORS.GRAY100};
    border-radius: 0 0 1.5rem 1.5rem;
    padding-bottom: 1rem;
  `;
};

export const menuContainer = css`
  padding-bottom: 1rem;
  border-bottom: 1px solid ${COLORS.GRAY80};
`;

export const menuCategory = css`
  font-weight: 500;
  color: ${COLORS.GRAY30};
  line-height: 2.5;
`;
