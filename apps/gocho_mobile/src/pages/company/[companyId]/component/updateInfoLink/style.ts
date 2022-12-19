import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > p {
    color: ${COLORS.GRAY30};
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    background-color: ${COLORS.GRAY90};
    color: ${COLORS.GRAY30};
    font-size: 0.875rem;
    padding: 1rem;
  }
`;
