import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const headerWrapper = css`
  border-bottom: 1px solid ${COLORS.GRAY90};
  height: 4.5rem;
  display: flex;
  z-index: 50;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  background-color: ${COLORS.GRAY100};
`;

export const headerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const logoCSS = css`
  width: 8.75rem;
  height: 1.125rem;
  position: relative;
  cursor: pointer;
`;

export const navWrapper = css`
  width: calc(100% - 14rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const globalNavBarContainer = css`
  display: flex;
  align-items: center;

  > li {
    font-weight: 700;
    margin-right: 2rem;
    font-size: 0.875rem;
    position: relative;
    padding: 1rem 0;
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    :hover {
      color: ${COLORS.BLUE_FIRST40};
    }
  }
`;

interface activeRouterDef {
  (isActive: boolean): SerializedStyles;
}

export const activeRouter: activeRouterDef = (isActive) => {
  return css`
    color: ${isActive ? COLORS.BLUE_FIRST40 : "#B2B2B2"};
  `;
};

export const downIconCSS = css`
  font-size: 0.75rem;
  margin-left: 0.5rem;
  color: inherit;
`;

interface subMenuToggleWrapperDef {
  (isHover: boolean): SerializedStyles;
}

export const subMenuToggleWrapper: subMenuToggleWrapperDef = (isHover) => {
  return css`
    position: absolute;
    z-index: 30;
    top: 2.5rem;
    left: -1rem;
    padding: 0.5rem 1rem;
    background-color: ${COLORS.GRAY100};
    border-radius: 3px;
    min-width: 8rem;
    width: fit-content;
    box-shadow: 0 1.25rem 1.25rem rgba(0, 0, 0, 0.35);
    display: ${isHover ? "block" : "none"};
  `;
};

export const searchIcon = css`
  color: ${COLORS.BLUE_FIRST40};
  font-size: 1.25rem;
  padding-right: 1rem;
`;

export const unifiedSearchWrapper = (isOn = false) => {
  return css`
    position: absolute;
    bottom: ${isOn ? "-4rem" : "4rem"};
    opacity: ${isOn ? 1 : 0};
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 53.75rem;
    transition: all 0.2s ease;
    z-index: 20;
  `;
};

export const unifiedSearch = css`
  width: 100%;
  height: 2.5rem;
  font-weight: 400;
  font-size: 0.875rem;
  background-color: ${COLORS.GRAY100};
  padding: 0.5rem 2rem;
  border-radius: 1.5rem;
  border: 2px solid ${COLORS.BLUE_SECOND40};
  box-shadow: 0 2px 8px 0 #b4b4b440;

  :focus {
    outline: 2px solid ${COLORS.BLUE_FIRST40};
    outline-offset: -2px;
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

export const flexBox = css`
  display: flex;
  align-items: center;
`;

interface SearchDimmedDef {
  (isUnifiedSearch: boolean): SerializedStyles;
}

export const searchDimmed: SearchDimmedDef = (isUnifiedSearch) => {
  return css`
    position: absolute;
    left: 0;
    bottom: -5rem;
    width: 100%;
    height: 5rem;
    z-index: 10;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 5%, transparent 95%);
    display: ${isUnifiedSearch ? "block" : "none"};
  `;
};
