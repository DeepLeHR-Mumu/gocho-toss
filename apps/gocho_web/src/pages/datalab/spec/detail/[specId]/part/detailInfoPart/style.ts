import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const container = css`
  position: relative;
  padding: 1rem 4rem;
  > div {
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;
export const title = css`
  display: flex;
  flex-direction: row;
  color: ${COLORS.GRAY60};

  > div {
    margin-right: 0.2rem;
    margin-bottom: 0.3rem;
  }
  > h3 {
    font-size: 0.75rem;
    color: ${COLORS.GRAY60};
    font-weight: 500;
  }
`;

export const divider = css`
  border: 1px solid ${COLORS.GRAY80};
  margin-top: 3.25rem;
`;
