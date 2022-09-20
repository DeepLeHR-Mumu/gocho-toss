import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: relative;
  background-color: ${COLORS.GRAY90};
  margin: 0.25rem 0;
  padding: 0.5rem 0 0.5rem 1rem;
  width: fit-content;
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  border-radius: 1.5rem;
  border: 1px solid ${COLORS.GRAY10};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const closeButton = css`
  font-size: 1rem;
  padding: 0 0.5rem 0 1rem;
`;
