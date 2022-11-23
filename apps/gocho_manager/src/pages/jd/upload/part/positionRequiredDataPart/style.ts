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

export const textareaBox = css`
  font-family: Noto Sans KR, sans-serif;
  font-size: 16px;
  height: 5rem;
  width: 50%;
  border-radius: 0.5rem;
  border: 1px solid ${COLORS.GRAY70};
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
`;

export const enterNotice = css`
  font-size: 0.875rem;
  color: ${COLORS.BLUE_NEON40};
  line-height: 1.5;
`;

export const positionTitle = css`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const inputLabel = css`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const smallInputContainer = css`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

export const smallInputBox = (disabled: boolean) => {
  return css`
    width: 5rem;
    background-color: ${disabled ? COLORS.GRAY70 : COLORS.GRAY100};
    border-radius: 0.5rem;
    border: 1px solid ${COLORS.GRAY70};
    height: 2rem;
    padding: 0.25rem 0.5rem;
    margin: 0 0.5rem;
  `;
};
