import { css } from "@emotion/react";
import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";

export const jobCardSkeleton = css`
  overflow: hidden;
  width: 49.5%;
  height: 16rem;
  border-radius: 1.5rem;
  margin-bottom: 1rem;
  background-color: ${COLORS.GRAY100};
`;

export const cardWrapper = (isExpired = false) => {
  return css`
    position: relative;
    width: 49.5%;
    height: 16rem;
    border-radius: 1.5rem;
    margin-bottom: 1rem;
    padding: 1.5rem;
    background-color: ${isExpired ? COLORS.GRAY90 : `${COLORS.GRAY100}`};
    box-shadow: 0 0 8px rgba(43, 43, 43, 0.1);
    transition: all 0.3s ease;

    ${PC_HOVER} {
      :hover .Logo {
        width: 8.5rem;
        height: 8.5rem;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
      }

      :hover .hoverButton {
        opacity: 1;
      }

      :hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
      }
    }
  `;
};

export const bookmarkButtonWrapper = css`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  background-color: ${COLORS.GRAY90};
  color: ${COLORS.GRAY60};
  border-radius: 0 1rem 0 1rem;
  padding: 0.25rem 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.3s ease;
  z-index: 20;

  ${PC_HOVER} {
    :hover {
      background-color: ${COLORS.GRAY80};
      color: ${COLORS.GRAY40};
    }
  }
`;

export const bookmarkNumber = css`
  margin-left: 0.25rem;
`;

export const viewWrapper = css`
  display: flex;

  font-size: 0.75rem;
  color: ${COLORS.GRAY60};
  text-align: center;
  position: absolute;
  padding: 0 1.5rem;
  top: 2rem;
  right: 0;
`;

export const viewNumber = css`
  margin-left: 0.25rem;
`;

export const mainContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const companyLogoWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 1.5rem;
  margin-right: 2rem;
`;

export const companyLogoBox = css`
  width: 7.5rem;
  height: 7.5rem;
  overflow: hidden;
  border-radius: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
`;

export const dateInfoContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
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
  color: ${COLORS.GRAY40};
  margin-bottom: 0.5rem;
`;

export const titleCSS = css`
  font-size: 1rem;
  font-weight: 500;
  height: 3rem;
`;

export const detailInfoContainer = css`
  display: flex;
`;

export const eduQual = css`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 50%;
`;

export const detailInfo = css`
  padding: 0.5rem;
  margin-right: 0.25rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY40};
`;

export const taskContainer = css`
  display: flex;
  align-items: baseline;
`;

export const taskSummary = css`
  font-size: 0.75rem;
  font-weight: 700;
  width: fit-content;
  position: relative;
  color: ${COLORS.GRAY100};
  background-color: ${COLORS.GRAY10};
  border-radius: 1.5rem;
  padding: 0.75rem 2rem;
  margin-right: 2rem;
`;

export const taskNumber = css`
  font-size: 0.75rem;
  position: absolute;
  color: ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_SECOND70};
  border-radius: 1.5rem;
  padding: 0.25rem 0.5rem;
  top: 0;
  right: 0;
  transform: translate(35%, -35%);
`;

export const taskBox = css`
  border-radius: 1.5rem;
  font-size: 0.75rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  color: ${COLORS.GRAY40};
  border: 1px solid ${COLORS.GRAY40};
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
