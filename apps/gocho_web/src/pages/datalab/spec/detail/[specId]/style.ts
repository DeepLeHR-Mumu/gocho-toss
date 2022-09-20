import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const loadingBox = css`
  width: 100%;
  height: 30rem;
`;

export const wrapper = css`
  background-color: #f5f5f5;
`;

export const container = css`
  padding-top: 10.125rem;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const mainWrapper = css`
  background-color: ${COLORS.GRAY100};
  width: 100%;
  max-width: 53rem;
  border-radius: 1.5rem;
  margin-right: 1rem;
  margin-bottom: 10rem;
`;
