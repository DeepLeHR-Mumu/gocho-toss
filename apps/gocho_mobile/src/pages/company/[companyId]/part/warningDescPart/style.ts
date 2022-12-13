import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.BLUE_SECOND90};
  padding: 1.5rem 0;
`;

export const buttonBox = css`
  width: 100%;
  background-color: ${COLORS.GRAY100};
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
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.GRAY30};
  font-size: 1.25rem;
`;

export const copyrightText = css`
  padding: 0 1.5rem 1.5rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${COLORS.GRAY20};
  font-weight: 400;
  line-height: 1.8;
  word-break: keep-all;
`;
