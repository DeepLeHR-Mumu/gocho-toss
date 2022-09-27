import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const specCardSkeleton = css`
  overflow: hidden;
  width: 100%;
  border-radius: 2rem;
  height: 7rem;
  margin-bottom: 1.5rem;

  :first-of-type {
    margin-top: 2rem;
  }
`;

export const cardWrapper = css`
  display: flex;
  height: 7rem;
  margin-bottom: 1.5rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  box-shadow: 0 4px 12px #e9e9e9;

  :first-of-type {
    margin-top: 2rem;
  }
`;

export const userInfoContainer = css`
  display: flex;
  padding: 2.5rem 1rem;
  border-right: 1px solid ${COLORS.GRAY70};
`;

export const userInfoBox = css`
  margin-left: 1rem;
`;

export const nicknameCSS = css`
  width: 7.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.375rem;
`;

export const genderCSS = css`
  font-size: 0.75rem;
  font-weight: 500;
`;

export const bodyContainer = css`
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
  border-right: 1px solid ${COLORS.GRAY70};
  flex-grow: 1;
`;

export const schoolInfo = css`
  margin-right: 2rem;
`;

export const schoolCSS = css`
  width: 8rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
  ${shorten()};
`;

export const gradeCSSTitle = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
`;

export const gradeCSS = css`
  color: ${COLORS.GRAY10};
  background-color: ${COLORS.GRAY90};
  font-weight: 500;
  border-radius: 1rem;
  padding: 0 0.5rem;
  margin-left: 0.25rem;
`;

export const maxGradeCSS = css`
  color: ${COLORS.GRAY40};
`;

export const attendance = css`
  margin-right: 3rem;
`;

export const infoTitle = css`
  width: fit-content;
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
  margin-top: 0.75rem;

  :first-of-type {
    margin-top: 0;
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
`;

export const certiLabel = css`
  font-size: 0.75rem;
  width: fit-content;
  position: relative;
  color: ${COLORS.GRAY10};
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem;
  padding: 0.75rem 1rem;
  margin-right: 1.5rem;
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
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1rem;
`;
