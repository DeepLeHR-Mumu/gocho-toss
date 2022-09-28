import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cardWrapper = css`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  margin: 0 0.75rem;
  margin-bottom: 1rem;
`;

export const cardSkeletonContainer = css`
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  margin: 0 0.75rem;
  margin-bottom: 1rem;
  min-height: 21.25rem;
`;

export const userInfoContainer = css`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${COLORS.GRAY80};
`;

export const userInfoBox = css`
  margin-left: 1rem;
`;

export const nicknameCSS = css`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const genderCSS = css`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY20};
`;

export const bodyContainer = css`
  padding: 1rem;
  border-bottom: 1px solid ${COLORS.GRAY80};
`;

export const schoolTypeCSS = css`
  color: ${COLORS.GRAY10};
  font-weight: 500;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const schoolInfo = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const schoolCSS = css`
  color: ${COLORS.GRAY10};
  font-weight: 500;
  font-size: 0.75rem;
`;

export const gradeCSSTitle = css`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${COLORS.GRAY40};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const gradeCSS = css`
  color: ${COLORS.GRAY10};
  width: fit-content;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY90};
  border-radius: 1rem;
  padding: 0 0.5rem;
  margin-left: 1rem;
  font-weight: 500;
`;

export const maxGradeCSS = css`
  color: ${COLORS.GRAY40};
  font-size: 0.75rem;
  font-weight: 400;
`;

export const strongCSS = css`
  color: ${COLORS.GRAY10};
  font-weight: 500;
`;

export const attendance = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const infoTitle = css`
  width: 40%;
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
  margin-bottom: 0.5rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const info = css`
  color: ${COLORS.GRAY10};
  background-color: ${COLORS.GRAY90};
  border-radius: 2rem;
  width: fit-content;
  font-size: 0.75rem;
  font-weight: 500;
  height: 1.25rem;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

export const certi = css`
  display: flex;
  justify-content: space-between;
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
  margin: 0.5rem 1rem 1rem auto;
`;
