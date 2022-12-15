import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const formContainer = css`
  background-color: ${COLORS.BLUE_SECOND90};
  padding: 1rem;
`;

export const positionContainer = css`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_SECOND70};
`;

export const addPositionButton = css`
  margin: 0 0 1.5rem auto;
  padding: 0.25rem 1rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
`;

export const submitButton = css`
  font-size: 1.75rem;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  width: 50%;
  border: 2px solid ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_FIRST40};
  color: ${COLORS.GRAY100};
`;

export const checkMsgBox = css`
  color: ${COLORS.BLUE_FIRST40};
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
`;
