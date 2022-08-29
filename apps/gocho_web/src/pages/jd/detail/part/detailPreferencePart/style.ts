import { css } from "@emotion/react";

import { COLORS } from "@style/constant";

export const preferredCertiContainer = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > li {
    border: 1px solid ${COLORS.GRAY60};
    padding: 0.25rem 1.75rem;
    border-radius: 1rem;
    margin: 0.25rem 0.5rem 0.25rem 0;
    font-size: 0.875rem;
    color: ${COLORS.GRAY20};
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
