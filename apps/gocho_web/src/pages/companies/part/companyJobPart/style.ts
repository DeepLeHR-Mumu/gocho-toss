import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const partContainer = css`
  background-color: ${COLORS.GRAY100};
`;

export const listContainer = css`
  padding: 2rem 0 4.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
