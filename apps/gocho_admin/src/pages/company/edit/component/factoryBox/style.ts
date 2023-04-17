import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const inputContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const inputTitle = css`
  color: ${COLORS.GRAY30};
  margin-right: 1rem;
`;

export const inputBox = css`
  width: 50%;
  border-radius: 0.5rem;
  border: 1px solid ${COLORS.GRAY70};
  background-color: ${COLORS.GRAY100};
  height: 2rem;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
`;
export const addressInput = css`
  width: 50%;
  border-radius: 0.5rem;
  border: 1px solid ${COLORS.GRAY70};
  background-color: ${COLORS.GRAY100};
  height: 2rem;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
  display: block;
  text-align: left;
`;
export const flexBox = css`
  display: flex;
`;

export const welfareBox = css`
  width: 49%;
  display: flex;
  align-items: center;
`;

export const factoryContainer = css`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_SECOND70};
`;

export const factoryTitle = css`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const inputLabel = css`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const booleanInputBox = (disabled: boolean) => css`
  width: 50%;
  background-color: ${disabled ? COLORS.GRAY70 : COLORS.GRAY100};
  border-radius: 0.5rem;
  border: 1px solid ${COLORS.GRAY70};
  height: 2rem;
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;
`;

export const checkboxText = css`
  margin-right: 0.5rem;
`;

export const deleteFactoryButton = css`
  margin: 0 0 0 auto;
  padding: 0.25rem 1rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: #b32100;
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
