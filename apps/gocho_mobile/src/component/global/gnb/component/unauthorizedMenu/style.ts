import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  display: flex;
  align-items: center;
`;

export const buttonCSS = css`
  font-weight: 500;
  color: ${COLORS.GRAY30};
  line-height: 2.5;
`;

export const divider = css`
  margin: 0 0.25rem;
  font-weight: 500;
  color: ${COLORS.GRAY30};
`;
