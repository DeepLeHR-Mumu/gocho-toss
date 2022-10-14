import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const mainProductDesc = css`
  background-color: ${COLORS.GRAY90};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: ${COLORS.BLUE_NEON40};
  font-weight: 700;
  padding: 0.5rem;
  box-sizing: border-box;
  white-space: nowrap;
`;

export const productContainer = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 0.5rem;

  > li {
    background-color: ${COLORS.GRAY90};
    padding: 0.5rem;
    box-sizing: border-box;
    margin: 0.25rem 0.5rem 0.25rem 0;
    font-size: 0.75rem;
    color: ${COLORS.GRAY30};
    border-radius: 1rem;

    :last-of-type {
      margin-right: 0;
    }
  }
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_NEON40};
`;

export const workPlaceContainer = css`
  margin: 2.75rem 0 4.3125rem 0;
`;

export const typeText = css`
  background-color: ${COLORS.GRAY90};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: ${COLORS.BLUE_NEON40};
  font-weight: 700;
  padding: 0.14rem 1rem;
  box-sizing: border-box;
  white-space: nowrap;
  margin-right: 0.5rem;
`;

export const container = css`
  display: flex;
  align-items: flex-start;
`;

export const flexDesc = css`
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  line-height: 1.8;
  font-weight: 400;
  word-break: keep-all;
`;

export const factoryButton = css`
  color: ${COLORS.BLUE_FIRST40};
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;

  ::after {
    content: "|";
    color: ${COLORS.GRAY40};
    padding: 0 0.5rem;
  }
`;

export const placeContainer = css`
  display: flex;
`;
