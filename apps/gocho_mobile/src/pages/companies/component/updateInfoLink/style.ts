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
    margin-bottom: 0.5rem;
  }
  > a {
    border-radius: 1.5rem;
    background-color: ${COLORS.GRAY90};
    color: ${COLORS.GRAY30};
    font-size: 0.75rem;
    padding: 1rem;
  }
`;
