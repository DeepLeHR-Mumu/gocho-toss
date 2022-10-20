import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const formContainer = css`
  background-color: ${COLORS.BLUE_SECOND90};
  padding: 1rem;
`;

export const sectionTitle = css`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const inputContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const inputTitle = css`
  color: ${COLORS.GRAY30};
  margin-right: 1rem;
`;

export const searchBox = css`
  width: 30%;
  border-radius: 0.5rem;
  border: 1px solid ${COLORS.GRAY70};
  background-color: ${COLORS.GRAY100};
  height: 2rem;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
`;

export const searchCompanyButton = css`
  font-size: 0.75rem;
  margin-right: 1rem;
  padding: 0.25rem 0.5rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
`;

export const selectBox = css`
  background-color: ${COLORS.GRAY100};
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
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

export const flexBox = css`
  display: flex;
`;

export const positionContainer = css`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_SECOND70};
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

export const deletePlaceButton = css`
  margin: 0 1rem;
  padding: 0.25rem 0.5rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: ${COLORS.ERROR_RED30};
  color: ${COLORS.GRAY100};
`;

export const hireNumberButton = css`
  margin-right: 1rem;
  padding: 0.25rem 0.5rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
`;

export const buttonContainer = css`
  display: flex;
  gap: 0 0.5rem;
  justify-content: flex-end;
`;

export const copyPositionButton = css`
  padding: 0.25rem 1rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: ${COLORS.GRAY30};
  color: ${COLORS.GRAY100};
`;

export const deletePositionButton = css`
  padding: 0.25rem 1rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: #b32100;
  color: ${COLORS.GRAY100};
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
