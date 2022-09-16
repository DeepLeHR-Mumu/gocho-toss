import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const specBestWrapper = css`
  margin-top: 5.625rem;
  padding: 5.1875rem 0;
  background-color: ${COLORS.GRAY90};
`;

export const title = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f1f1f;
  margin-bottom: 2.1875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const linkButton = css`
  color: #9f9fa2;
  font-size: 0.875rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    padding-right: 6px;
  }
`;

export const bestUserWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;
