import { css } from "@emotion/react";

import { COLORS } from "@style/constant";

export const buttonCSS = css`
  white-space: nowrap;
  border-radius: 1rem;
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
  font-weight: 400;
  width: fit-content;
  height: 1.25rem;
  padding: 0 0.5rem;
`;
