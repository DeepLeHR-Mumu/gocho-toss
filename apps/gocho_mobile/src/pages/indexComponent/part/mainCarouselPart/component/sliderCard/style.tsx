import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = (bgColor: string) => {
  return css`
    width: 100%;
    height: 25.75rem;
    background-color: ${bgColor};
    position: relative;
    padding-top: 3.5rem;
    padding-left: 3rem;
  `;
};

export const topMsg = css`
  font-weight: 600;
  color: ${COLORS.GRAY100};
`;
