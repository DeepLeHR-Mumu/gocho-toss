import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const totalCountContainer = css`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
`;
export const totalText = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
`;

export const listContainer = css`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  /* justify-content: flex-start; */
  flex-wrap: wrap;
  justify-content: space-between;
  ::after {
    content: "";
    flex: auto;
  }
`;
