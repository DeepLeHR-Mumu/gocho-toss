import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const sectionContainer = css`
  padding: 3rem 0;
`;

export const titleBox = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const title = css`
  font-size: 1rem;
  font-weight: 700;
  color: ${COLORS.GRAY10};
  display: block;
`;

export const linkButton = css`
  font-size: 12px;
  display: flex;
  align-items: center;
  color: ${COLORS.GRAY10};
  font-weight: 400;
`;

export const cardContainer = css`
  padding-left: 1rem;
`;
