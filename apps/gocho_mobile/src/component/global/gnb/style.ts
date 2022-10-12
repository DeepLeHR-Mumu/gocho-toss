import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { openedElementDef } from "@component/global/gnb/type";

export const headerWrapper = css`
  display: flex;
  align-items: center;
  background-color: ${COLORS.GRAY95};
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
    justify-content: space-between;
  `;
};

export const MainLogoBox = css`
  height: 1.125rem;
  width: 7.5rem;
  position: relative;
`;

export const iconBox = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const icon = css`
  font-size: 1.75rem;
  margin-right: 1.25rem;
  color: ${COLORS.BLUE_FIRST40};

  :last-of-type {
    margin-right: 0;
  }
`;

export const unifiedSearchWrapper = (openedElement: openedElementDef) => {
  return css`
    display: ${openedElement === "통합검색" ? "flex" : "none"};
    width: 100%;
    align-items: center;
  `;
};

export const backIcon = css`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  color: ${COLORS.GRAY10};
`;

export const unifiedSearch = css`
  height: 2.25rem;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  background-color: ${COLORS.GRAY100};
  margin-left: 8px;
  padding: 0.25rem 1rem;
  border-radius: 2rem;
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
  width: 2rem;
  font-size: 1.5rem;
`;

export const navContainer = (isOn = false) => {
  return css`
    display: ${isOn ? "block" : "none"};
    position: absolute;
    top: 3.25rem;
    width: 100%;
    background-color: ${COLORS.GRAY100};
    border-radius: 0 0 2rem 2rem;
    padding-bottom: 1rem;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  `;
};

export const menuContainer = css`
  padding-bottom: 1rem;
  border-bottom: 1px solid ${COLORS.GRAY80};
`;

export const menuCategory = css`
  font-weight: 500;
  color: ${COLORS.GRAY30};
  font-size: 1rem;
  line-height: 3;
`;

export const subMenuArr = css`
  background-color: ${COLORS.GRAY90};
`;
