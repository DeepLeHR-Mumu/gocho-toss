import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const h2Title = css`
  font-size: 22px;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const container = css`
  display: flex;
  width: 100%;
  justify-content: center;
  > div {
    width: 22.5rem;
  }
`;
