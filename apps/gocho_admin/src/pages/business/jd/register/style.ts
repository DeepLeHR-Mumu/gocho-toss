import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const buttonContainer = css`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

export const acceptButton = css`
  font-weight: 500;
  border: 2px solid ${COLORS.GRAY10};
  padding: 0.25rem 1rem;
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
`;

export const rejectButton = css`
  font-weight: 500;
  border: 2px solid ${COLORS.GRAY10};
  padding: 0.25rem 1rem;
  background-color: #b32100;
  color: ${COLORS.GRAY100};
`;
