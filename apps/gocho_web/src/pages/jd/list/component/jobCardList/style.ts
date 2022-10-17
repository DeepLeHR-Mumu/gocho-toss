import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const listContainer = css`
  margin-bottom: 5.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const noDataDesc = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 10rem;
  font-size: 1rem;
  color: ${COLORS.GRAY30};
  font-weight: 500;
`;
