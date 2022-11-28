import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const container = css`
  position: relative;
  padding: 2rem;
  border-bottom: 1px solid ${COLORS.GRAY80};
  display: flex;
  flex-direction: column;
`;

export const infoBox = css`
  margin-bottom: 2rem;

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const title = css`
  color: ${COLORS.GRAY60};
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 3;
  font-weight: 500;

  > svg {
    font-size: 1.25rem;
    margin-right: 0.5rem;
    color: ${COLORS.BLUE_NEON40};
  }
`;
