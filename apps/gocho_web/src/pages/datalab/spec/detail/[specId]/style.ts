import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const loadingBox = css`
  width: 100%;
  height: 50vh;
`;

export const wrapper = css`
  margin-top: 4.5rem;
  background-color: #f2f2f6;
  padding: 10rem 0;
`;

export const container = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const mainWrapper = css`
  background-color: ${COLORS.GRAY100};
  width: calc(100% - 18rem);
  border-radius: 2rem;
`;
