import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

import { MenuLocation } from "./type";

export const menuCssObj = {
  menuContainer: (width: number) => css`
    width: ${width / 16}rem;
    border: 1px solid ${COLOR.BLACK};
    border-radius: 0.75rem;
    background-color: ${COLOR.WHITE};
    overflow: hidden;
  `,

  optionContainer: css`
    height: 29.25rem;
    overflow: auto;
  `,

  option: (focused: boolean, clickable: boolean, flexibleHeight?: boolean) => css`
    height: ${flexibleHeight ? "auto" : "2.5rem"};
    display: flex;
    flex-direction: row;
    padding: 0.625rem 1rem;
    color: ${focused ? COLOR.BLUE300 : COLOR.BLACK};
    cursor: ${clickable ? "pointer" : "auto"};
    ${focused ? TEXT.TITLE5_B1620 : TEXT.TITLE5_M1620};
  `,

  header: (clickable: boolean) => css`
    padding: 1rem;
    cursor: ${clickable ? "pointer" : "auto"};
  `,

  footer: (clickable: boolean) => css`
    padding: 1rem;
    width: 100%;
    border-radius: 0 0 0.75rem 0.75rem;
    cursor: ${clickable ? "pointer" : "auto"};
    background-color: ${COLOR.GRAY50};
    ${TEXT.TITLE5_M1620}
  `,
};

export const dropDownCssObj = {
  dropDownWrapper: css`
    position: relative;
    width: fit-content;
  `,

  titleWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${TEXT.TITLE5_M1620}
  `,

  menuWrapper: (location: MenuLocation) => {
    const [directionTopOrBottom, directionLeftOrRight] = location.direction.split("-");
    return css`
      position: absolute;
      z-index: 50;
      ${directionTopOrBottom}: ${location.topOrBottom}rem;
      ${directionLeftOrRight}: ${location.leftOrRight}rem;
    `;
  },
};
