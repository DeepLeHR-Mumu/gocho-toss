import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const sectionTitle = css`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const dataWrapper = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const dataBox = css`
  width: 49%;
  display: flex;
  align-items: center;
`;

export const dataTitle = css`
  font-size: 1.25rem;
  color: ${COLORS.GRAY30};
  margin-right: 1rem;
`;

export const dataTextPoint = css`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${COLORS.BLUE_FIRST40};
`;

export const dataText = css`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${COLORS.GRAY10};
`;
