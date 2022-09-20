import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: absolute;
  background-color: ${COLORS.GRAY100};
  top: 0;
  left: 0;
  border: 1px solid ${COLORS.GRAY60};
  width: 100%;
  border-radius: 1.5rem;
  padding: 1rem;
  z-index: 10;
`;

export const closeButton = css`
  margin: 0.5rem 1rem 0 0;
  color: ${COLORS.GRAY60};
  position: absolute;
  font-size: 1.3rem;
  top: 0;
  right: 0;
`;

export const container = css`
  display: flex;
  flex-direction: row;
`;
