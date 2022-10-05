import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const buttonContainer = css`
  display: flex;
  border-bottom: 1px solid ${COLORS.GRAY80};
  padding: 0.875rem 2rem 0 2rem;
`;

export const menuButton = (active = false) => {
  return css`
    font-size: 0.875rem;
    border-radius: 2rem;
    font-weight: 400;
    margin-right: 0.5rem;
    padding: 0.75rem 3rem;
    white-space: nowrap;
    color: ${active ? COLORS.BLUE_FIRST30 : COLORS.GRAY40};
    background-color: ${active ? COLORS.STATE_SUCCESS : COLORS.GRAY100};
    position: relative;

    :after {
      content: "";
      position: absolute;
      transform: translate(-50%, 0);
      left: 50%;
      width: 100%;
      max-width: 3.5rem;
      bottom: 0;
      height: 2px;
      background-color: ${active && COLORS.BLUE_FIRST30};
    }

    :last-of-type {
      margin-right: 0;
    }
  `;
};
