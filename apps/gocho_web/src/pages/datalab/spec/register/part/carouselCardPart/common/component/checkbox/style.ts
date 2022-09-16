import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const checkCSS = css`
  width: 1rem;
  height: 1rem;
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.GRAY60};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: ${COLORS.BLUE_NEON40};
`;
