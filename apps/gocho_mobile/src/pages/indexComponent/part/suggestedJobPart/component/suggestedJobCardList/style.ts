import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const listContainer = css`
  .slick-slide {
    padding-right: 0.5rem;
  }
`;

export const controlWrapper = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.875rem;
`;

export const buttonCSS = css`
  margin-left: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 50%;
  color: ${COLORS.GRAY40};
`;
