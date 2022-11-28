import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const closeButton = css`
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1.5rem;
  background-color: ${COLORS.GRAY90};
  margin: 0.25rem 0;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.GRAY10};
  border-radius: 2rem;
  border: 1px solid ${COLORS.GRAY10};
`;
