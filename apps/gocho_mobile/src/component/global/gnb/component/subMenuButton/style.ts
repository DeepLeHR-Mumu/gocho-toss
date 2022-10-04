import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const subMenuButton = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
  font-weight: 500;
  line-height: 2.5;
  padding: 0 2rem;
  color: ${COLORS.GRAY30};
  background-color: ${COLORS.GRAY90};
`;
