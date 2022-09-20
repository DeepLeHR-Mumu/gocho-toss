import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const buttonContainer = css`
  display: flex;
  border-bottom: 1px solid ${COLORS.GRAY80};
  margin-bottom: 2rem;
`;

export const menuButton = (active = false) => {
  return css`
    font-size: 0.875rem;
    border-radius: 1.5rem;
    margin-right: 0.5rem;
    padding: 0.75rem 3rem;
    color: ${active ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY40}`};
    background-color: ${active ? COLORS.STATE_SUCCESS : `${COLORS.GRAY100}`};
  `;
};
