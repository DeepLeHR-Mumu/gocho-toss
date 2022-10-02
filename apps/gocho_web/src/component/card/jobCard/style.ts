import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";
import { MOBILE, PC_HOVER } from "shared-style/mediaQuery";

export const jobCardSkeleton = css`
  overflow: hidden;
  width: calc(50% - 0.5rem);
  height: 14.75rem;
  border-radius: 1.5rem;
  margin-bottom: 1rem;
  background-color: ${COLORS.GRAY100};
`;

export const cardWrapper = (isExpired = false) => {
  return css`
    overflow: hidden;
    position: relative;
    width: calc(50% - 0.5rem);
    border-radius: 1.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: ${isExpired ? COLORS.GRAY90 : `${COLORS.GRAY100}`};
    box-shadow: 0 0 0.5rem rgba(43, 43, 43, 0.1);
    transition: all 0.2s ease;

    ${PC_HOVER} {
      :hover {
        transform: translateY(-6px);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
      }

      :hover .Logo {
        box-shadow: 0 0.75rem 0.75rem rgba(0, 0, 0, 0.25);
      }

      :hover .hoverButton {
        opacity: 1;
      }
    }
  `;
};

export const bookmarkButtonWrapper = (isBookmarked = false) => {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 500;
    background-color: ${isBookmarked ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
    color: ${isBookmarked ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY60}`};
    border-radius: 0 0 0 2rem;
    position: absolute;
    width: 6.25rem;
    height: 2rem;
    top: 0;
    right: 0;
    transition: all 0.3s ease;
    z-index: 5;

    ${PC_HOVER} {
      :hover {
        background-color: ${COLORS.GRAY80};
        color: ${COLORS.GRAY40};
      }
    }

    ${MOBILE} {
      width: 5rem;
    }
  `;
};

export const bookmarkNumber = css`
  margin-left: 0.25rem;
`;

export const viewWrapper = css`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY60};
  text-align: center;
  position: absolute;
  top: 2.5rem;
  right: 0.875rem;
`;

export const viewNumber = css`
  margin-left: 0.25rem;
`;

export const mainContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const companyLogoWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 1.5rem;
  transition: all 0.5s ease;
`;

export const companyLogoBox = css`
  width: 7.5rem;
  height: 7.5rem;
  overflow: hidden;
  border-radius: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
`;

export const infoBox = css`
  margin-left: 1rem;
`;

export const dateInfoContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY40};
`;

export const date = css`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY40};
  margin-right: 0.75rem;
`;

export const cutBox = css`
  font-size: 0.75rem;
  width: -moz-fit-content;
  width: fit-content;
  white-space: nowrap;
  font-weight: 700;
  border-radius: 1rem;
  margin-left: 0.25rem;
  padding: 0.3rem 0.5rem;
  background-color: #f6f6f6;
  color: #1553cd;
`;

export const companyName = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY40};
  margin-bottom: 0.5rem;
`;

export const titleCSS = css`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6;
  min-height: 3.0625rem;
  margin-bottom: 0.25rem;
  color: ${COLORS.GRAY10};
  ${shorten(2)};
`;

export const detailInfoContainer = css`
  display: flex;
  align-items: center;
`;

export const eduQual = css`
  position: relative;
  width: 1.625rem;
  height: 1.625rem;
  margin-right: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY90};
  border-radius: 50%;
`;

export const detailInfo = css`
  margin-right: 0.25rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 1rem;
  width: fit-content;
  padding: 0 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  height: 1.625rem;
  align-items: center;
  justify-content: center;
  color: ${COLORS.GRAY40};
`;

export const taskContainer = css`
  display: flex;
  align-items: baseline;
`;

interface TaskSummaryDef {
  (isExpired: boolean): SerializedStyles;
}

export const taskSummary: TaskSummaryDef = (isExpired) => {
  return css`
    font-size: 0.75rem;
    font-weight: 700;
    width: fit-content;
    position: relative;
    color: ${COLORS.GRAY100};
    background-color: ${isExpired ? COLORS.GRAY40 : COLORS.GRAY10};
    border-radius: 1.5rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    height: 2.25rem;
  `;
};

interface TaskNumberDef {
  (isExpired: boolean): SerializedStyles;
}

export const taskNumber: TaskNumberDef = (isExpired) => {
  return css`
    font-size: 0.75rem;
    position: absolute;
    color: ${COLORS.GRAY10};
    background-color: ${isExpired ? COLORS.GRAY80 : COLORS.BLUE_SECOND70};
    border-radius: 50%;
    width: 1.875rem;
    height: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    transform: translate(35%, -35%);
  `;
};

export const taskBox = css`
  border-radius: 1.5rem;
  font-size: 0.75rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  color: ${COLORS.GRAY40};
  border: 1px solid ${COLORS.GRAY40};
  background-color: ${COLORS.GRAY100};
`;

export const hoverButton = css`
  opacity: 0;
  z-index: 20;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 0.875rem;
  color: ${COLORS.BLUE_FIRST40};
  background-color: ${COLORS.GRAY100};
  padding: 0.75rem 3rem;
  border-radius: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 12px 0 #eeeeee;
`;
