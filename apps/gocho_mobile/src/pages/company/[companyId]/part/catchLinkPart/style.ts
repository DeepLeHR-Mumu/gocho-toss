import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const hrLine = css`
  border-top: 1px solid ${COLORS.GRAY80};
`;

export const container = css`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const linkBox = css`
  width: 22.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  > a {
    background-color: ${COLORS.GRAY90};
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    font-size: 0.875rem;
    color: ${COLORS.GRAY40};
  }
`;

export const youtubeIconBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${COLORS.GRAY30};
  font-size: 0.875rem;
`;
