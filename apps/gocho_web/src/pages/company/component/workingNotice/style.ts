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
  font-weight: 400;
  margin-right: 0.75rem;
`;

export const requestChangeButton = css`
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  border-radius: 1.5rem;
  padding: 0 1rem;
  color: ${COLORS.GRAY30};
  background-color: ${COLORS.GRAY100};
`;
