import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const flexBox = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const workingInfo = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY60};
  margin-right: 0.5rem;
`;

export const requestChangeButton = css`
  font-size: 0.75rem;
  border-radius: 1.5rem;
  padding: 0.25rem 1rem;
  color: ${COLORS.GRAY30};
  background-color: ${COLORS.GRAY100};
`;
