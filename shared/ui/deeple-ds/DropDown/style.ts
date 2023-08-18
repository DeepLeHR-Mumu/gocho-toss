import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

import { MenuLocation } from "./type";

export const menuCssObj = {
  menuContainer: (width: number) => css`
    width: ${width / 16}rem;
    border: 1px solid ${NEWCOLORS.BLACK};
    border-radius: 0.75rem;
    background-color: ${NEWCOLORS.WHITE};
  `,

  option: (focused: boolean, clickable: boolean) => css`
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    padding: 0.625rem 1rem;
    color: ${focused ? NEWCOLORS.BLUE300 : NEWCOLORS.BLACK};
    cursor: ${clickable ? "pointer" : "auto"};
    ${NEWTEXTS.TITLE7}
  `,

  footer: (clickable: boolean) => css`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 0.75rem 0.75rem;
    cursor: ${clickable ? "pointer" : "auto"};
    background-color: ${NEWCOLORS.GRAY50};
    ${NEWTEXTS.TITLE7}
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
    ${NEWTEXTS.TITLE7}
  `,

  menuWrapper: (location: MenuLocation) => {
    const [directionTopOrBottom, directionLeftOrRight] = location.direction.split("-");
    return css`
      position: absolute;
      ${directionTopOrBottom}: ${location.topOrBottom}rem;
      ${directionLeftOrRight}: ${location.leftOrRight}rem;
    `;
  },
};