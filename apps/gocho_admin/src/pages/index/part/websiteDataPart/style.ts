import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

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
`;

export const flexBox = css`
  display: flex;
`;

export const dataTitle = css`
  font-size: 1.25rem;
  color: ${COLOR.GRAY600};
  margin-right: 1rem;
`;

export const dataTextPoint = css`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${COLOR.BLUE300};
`;

export const dataText = css`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${COLOR.GRAY900};
`;
