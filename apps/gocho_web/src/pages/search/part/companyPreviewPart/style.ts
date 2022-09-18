import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const listContainer = css`
  margin: 2rem 0 3rem;
  display: flex;
  flex-wrap: wrap;
`;

export const noDataText = css`
  width: 100%;
  color: ${COLORS.GRAY30};
  font-size: 0.875rem;
  text-align: center;
`;
