import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const profileWrapper = css`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const greetingMsg = css`
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 600;
  color: ${COLORS.GRAY40};
  padding-left: 5px;
`;

export const downIconCSS = css`
  font-size: 1rem;
  margin-left: 0.5rem;
  color: ${COLORS.GRAY40};
`;
