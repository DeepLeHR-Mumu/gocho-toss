import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const headerWrapper = css`
  height: 4.5rem;
  display: flex;
  z-index: 10;
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

    :last-of-type {
      margin-right: 0;
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
    z-index: 10;
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
  color: ${COLORS.BLUE_SECOND30};
`;

export const unifiedSearchWrapper = (isOn = false) => {
  return css`
    position: absolute;
    top: ${isOn ? "6.1rem" : "4rem"};
    opacity: ${isOn ? 1 : 0};
    left: 50%;
    transform: translate(-50%, 0%);
    width: 60%;
    transition: all 0.2s ease;
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
`;

export const searchButton = css`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translate(0, -50%);
  color: ${COLORS.GRAY40};
  width: 1.25rem;
`;
