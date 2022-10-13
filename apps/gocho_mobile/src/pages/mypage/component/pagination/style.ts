import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;

  > li {
    font-size: 0.875rem;
  }
`;

export const buttonCSS = css`
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.GRAY60};
`;

interface isActiveButtonDef {
  (isCurrentPage: boolean): SerializedStyles;
}
export const isActiveButton: isActiveButtonDef = (isCurrentPage) => {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    color: ${isCurrentPage ? COLORS.GRAY10 : COLORS.GRAY60};
  `;
};
