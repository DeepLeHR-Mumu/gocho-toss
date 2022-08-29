import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const cardWrapper = css`
  display: flex;
  flex-direction: column;
  width: 16.5rem;
  height: 20rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  margin: 1rem 0.75rem;
`;

export const userInfoContainer = css`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid ${COLORS.GRAY80};
`;

export const userInfoBox = css`
  margin-left: 1rem;
`;

export const nicknameCSS = css`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.375rem;
`;

export const genderCSS = css`
  font-size: 0.75rem;
  font-weight: 500;
`;

export const bodyContainer = css`
  padding: 1rem;
  border-bottom: 1px solid ${COLORS.GRAY80};
`;

export const schoolInfo = css`
  display: flex;
  margin-top: 0.75rem;
`;

export const schoolCSS = css`
  color: ${COLORS.GRAY10};
  font-weight: 500;
  font-size: 0.75rem;
  margin-right: 0.5rem;
`;

export const gradeCSSTitle = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
`;

export const gradeCSS = css`
  color: ${COLORS.GRAY10};
  background-color: ${COLORS.GRAY90};
  border-radius: 1rem;
  padding: 0.125rem 0.5rem;
  margin-left: 0.25rem;
`;

export const maxGradeCSS = css`
  color: ${COLORS.GRAY40};
`;

export const attendance = css`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const infoTitle = css`
  width: fit-content;
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
  margin: 1rem 2rem 0 0;

  :last-of-type {
    margin-right: 0;
  }
`;

export const info = css`
  color: ${COLORS.GRAY10};
  background-color: ${COLORS.GRAY90};
  border-radius: 1rem;
  padding: 0.125rem 0.5rem;
  margin-left: 0.5rem;
`;

export const certi = css`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
`;

export const certiLabel = css`
  font-size: 0.75rem;
  width: fit-content;
  position: relative;
  color: ${COLORS.GRAY10};
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem;
  padding: 0.75rem 1rem;
`;

export const certiNumber = css`
  font-size: 0.75rem;
  position: absolute;
  background-color: ${COLORS.BLUE_SECOND70};
  border-radius: 1.5rem;
  padding: 0.25rem 0.5rem;
  top: 0;
  right: 0;
  transform: translate(35%, -35%);
`;

export const buttonContainer = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem 1rem;
`;
