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
  font-weight: 500;
  color: ${COLORS.GRAY10};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const listContainer = css`
  margin: 1rem 0 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;
