import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const sectionContainer = css`
  margin: 2rem 0;
`;

export const sectionTitle = css`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${COLOR.GRAY700};
`;

export const buttonContainer = css`
  display: flex;
  margin-top: 1rem;
  gap: 0 0.5rem;
`;

export const jdButton = css`
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: ${COLOR.BLUE300};
  color: ${COLOR.WHITE};
  font-weight: 500;
`;

export const naverButton = css`
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: #32b44a;
  color: ${COLOR.WHITE};
  font-weight: 500;
`;
