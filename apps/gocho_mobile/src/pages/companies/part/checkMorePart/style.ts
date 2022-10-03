import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.BLUE_SECOND90};
  padding: 1.5rem 0;
`;

export const buttonBox = css`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const buttonContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;

export const buttonText = css`
  font-weight: 500;
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
`;

export const buttonIcon = css`
  border-radius: 0.75rem;
  background-color: ${COLORS.GRAY90};
  padding: 0.35rem 0.5rem;
`;

export const copyrightText = css`
  padding: 0 1.5rem 1.5rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 400;
`;
