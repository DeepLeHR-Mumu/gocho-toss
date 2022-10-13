import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const profileWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const menuCategory = css`
  font-weight: 500;
  color: ${COLORS.GRAY30};
  line-height: 2.5;
  font-size: 1rem;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
`;

export const nickname = css`
  margin-left: 0.5rem;
  color: ${COLORS.GRAY60};
`;
