import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const title = css`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const inputContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const inputTitle = css`
  color: ${COLORS.GRAY30};
  margin-right: 1rem;
`;

export const inputBox = css`
  width: 30%;
  border-radius: 0.5rem;
  border: 1px solid ${COLORS.GRAY70};
  background-color: ${COLORS.GRAY100};
  height: 2rem;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
`;

export const submitButton = css`
  font-size: 1.25rem;
  margin: 2rem auto 0;
  padding: 0.5rem;
  width: 30%;
  border: 2px solid ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_FIRST40};
  color: ${COLORS.GRAY100};
`;
