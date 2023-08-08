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

export const customLayout = css`
  max-width: calc(1200px + 0rem);
  padding: 0 0 0 2rem;
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

export const logoLink = css`
  width: 100%;
  height: 100%;
  position: relative;
  > img {
    object-fit: contain;
  }
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

export const unifiedSearchWrapper = css`
  position: relative;
  margin-right: 1.5rem;
`;

export const unifiedSearch = css`
  width: 20rem;
  height: 2.25rem;
  font-weight: 400;
  font-size: 0.875rem;
  background-color: ${COLORS.GRAY100};
  padding: 0.25rem 2rem;
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

export const newBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  margin-left: 0.5rem;
  width: 1rem;
  height: 1rem;
  color: ${COLORS.GRAY100};
  background-color: ${COLORS.ERROR_RED30};
`;

export const businessService = css`
  padding: 0.375rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.BLUE_FIRST40};
  color: ${COLORS.BLUE_FIRST40};
  border-radius: 2rem;

  font-size: 0.75rem;
  font-weight: 500;
  transition: color 0.2s ease;
`;
