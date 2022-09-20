import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const headerWrapper = css`
  border-bottom: 1px solid ${COLORS.GRAY70};
  height: 6rem;
  display: flex;
`;

export const headerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const logoCSS = css`
  width: 9.375rem;
  height: 1.5625rem;
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
    font-weight: 500;
    margin-right: 2rem;
    font-size: 1rem;
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
    color: ${isActive ? COLORS.BLUE_FIRST40 : COLORS.GRAY10};
  `;
};

export const downIconCSS = css`
  font-size: 1rem;
  margin-left: 0.5rem;
  color: inherit;
`;

interface subMenuToggleWrapperDef {
  (ishover: boolean): SerializedStyles;
}

export const subMenuToggleWrapper: subMenuToggleWrapperDef = (ishover) => {
  return css`
    position: absolute;
    z-index: 10;
    top: 2.8rem;
    left: -1rem;
    padding: 0.5rem 1rem;
    background-color: ${COLORS.GRAY100};
    border-radius: 3px;
    min-width: 8rem;
    width: fit-content;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
    display: ${ishover ? "block" : "none"};
  `;
};
