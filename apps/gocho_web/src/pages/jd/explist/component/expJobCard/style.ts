import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const expJobCardSkeleton = css`
  overflow: hidden;
  width: calc(50% - 1.5rem);
  height: 29.625rem;
  border-radius: 1.5rem;
  margin-bottom: 3rem;
  background-color: ${COLORS.GRAY100};
`;

export const cardWrapper = css`
  width: calc(50% - 1.5rem);
  margin-bottom: 3rem;
`;

export const companyInfoContainer = css`
  display: flex;
  align-items: center;
  border: solid 1px ${COLORS.GRAY80};
  padding: 1rem 1.5rem;
  border-radius: 1.5rem 1.5rem 0 0;
`;

export const companyInfoBox = css`
  margin-left: 1.5rem;
`;

export const companyName = css`
  font-weight: 500;
  font-size: 1rem;
  color: ${COLORS.GRAY10};
  margin-bottom: 1.5rem;
  ${shorten()}
`;

export const companyLogo = css`
  width: 7.5rem;
  height: 7.5rem;
  position: relative;
`;

export const buttonContainer = css`
  display: flex;
  align-items: center;
`;

export const moreExpJobButton = css`
  font-size: 0.875rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  width: fit-content;
  padding: 0 1.5rem;
  margin-left: 4px;
  background-color: ${COLORS.GRAY80};
  color: ${COLORS.GRAY10};
  font-weight: 500;
`;

export const companyDetailButton = css`
  font-size: 0.875rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  width: fit-content;
  padding: 0 1.5rem;
  background-color: ${COLORS.BLUE_SECOND40};
  color: ${COLORS.GRAY10};
  font-weight: 500;
`;

export const expJobListContainer = css`
  min-height: 20rem;
  padding: 1rem;
  position: relative;
  border: solid 1px ${COLORS.GRAY80};
  border-top: 0;
  border-radius: 0 0 1.5rem 1.5rem;
  background-color: ${COLORS.GRAY90};
`;

export const noExplistArrText = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.875rem;
  text-align: center;
  color: ${COLORS.GRAY40};
`;

export const expJobBox = css`
  margin-bottom: 1.25rem;
  padding-bottom: 6px;
  border-bottom: solid 1px ${COLORS.GRAY70};

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const jobTitleContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const jobTitle = css`
  font-size: 0.875rem;
  font-weight: 400;
  flex-grow: 1;
  border: solid 1px ${COLORS.GRAY80};
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY100};
  height: 1.5rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  margin-right: 10px;
  ${shorten()}
`;

export const jobDate = css`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY40};
  white-space: nowrap;
`;

export const taskContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
`;

export const taskSummary = css`
  font-size: 0.75rem;
  font-weight: 700;
  word-break: keep-all;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${COLORS.GRAY100};
  background-color: ${COLORS.GRAY40};
  border-radius: 1.5rem;
  padding: 0 1.5rem;
  margin-right: 2rem;
  height: 1.5rem;
`;

export const taskNumber = css`
  font-size: 0.75rem;
  position: absolute;
  color: ${COLORS.GRAY10};
  background-color: ${COLORS.GRAY80};
  border-radius: 1.5rem;
  padding: 0.25rem 0.5rem;
  top: 0;
  right: 0;
  transform: translate(35%, -35%);
`;

export const taskBox = css`
  font-size: 0.75rem;
  font-weight: 400;
  margin-right: 0.5rem;
  color: ${COLORS.GRAY40};
  ${shorten()};
`;

export const jobDetailButton = css`
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  color: ${COLORS.GRAY30};
  font-weight: 500;
  white-space: nowrap;
`;
