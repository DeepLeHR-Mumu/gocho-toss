import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const expJobCardSkeleton = css`
  overflow: hidden;
  width: 100%;
  height: 27.5rem;
  border-radius: 1.5rem;
  margin-bottom: 2rem;
  background-color: ${COLORS.GRAY100};
`;

export const cardWrapper = css`
  width: 100%;
  margin-bottom: 2rem;
`;

export const companyInfoContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px ${COLORS.GRAY80};
  padding: 1rem;
  border-radius: 1.5rem 1.5rem 0 0;
  border-bottom: 0;
`;

export const companyName = css`
  font-weight: 500;
`;

export const companyLogo = css`
  width: 5rem;
  height: 5rem;
  margin-right: 1.25rem;
  position: relative;

  > img {
    object-fit: contain;
  }
`;

export const buttonContainer = css`
  margin-top: 2rem;
  display: flex;
`;

export const moreExpJobButton = css`
  font-size: 0.875rem;
  border-radius: 1.5rem;
  width: fit-content;
  padding: 1rem 1rem;
  margin-left: 0.5rem;
  background-color: ${COLORS.GRAY80};
`;

export const companyDetailButton = css`
  font-size: 0.875rem;
  border-radius: 1.5rem;
  width: fit-content;
  padding: 1rem 1rem;
  background-color: ${COLORS.BLUE_SECOND40};
`;

export const expJobListContainer = css`
  min-height: 18rem;
  position: relative;
  padding: 1rem;
  border: solid 1px ${COLORS.GRAY80};
  border-radius: 0 0 1.5rem 1.5rem;
  background-color: ${COLORS.GRAY90};
`;

export const expJobBox = css`
  margin-bottom: 0.875rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px ${COLORS.GRAY70};

  &:last-of-type {
    border-bottom: none;
  }
`;

export const jobTitleContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const jobTitle = css`
  font-size: 0.875rem;
  font-weight: 400;
  width: 100%;
  flex-grow: 1;
  border: solid 1px ${COLORS.GRAY80};
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY100};
  padding: 0.5rem;
  margin-right: 0.5rem;
  align-items: center;
  display: block;
  color: ${COLORS.GRAY10};
  ${shorten()};
`;

export const jobDate = css`
  white-space: nowrap;
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${COLORS.GRAY40};
`;

export const taskContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexRow = css`
  display: flex;
  align-items: center;
`;

export const taskSummary = css`
  font-size: 0.75rem;
  margin-right: 01rem;
  font-weight: 700;
  white-space: nowrap;
  width: fit-content;
  position: relative;
  color: ${COLORS.GRAY100};
  background-color: ${COLORS.GRAY40};
  border-radius: 2rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-right: 0.5rem;
  color: ${COLORS.GRAY40};
  word-break: keep-all;

  :last-of-type {
    ${shorten()};
  }
`;

export const jobDetailButton = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY30};
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
