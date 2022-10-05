import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const partContainer = css`
  background-color: ${COLORS.GRAY100};
  padding-top: 3rem;
`;

export const listContainer = css`
  padding: 2rem 0 4.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const totalCount = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  display: flex;
  justify-content: flex-end;
`;
