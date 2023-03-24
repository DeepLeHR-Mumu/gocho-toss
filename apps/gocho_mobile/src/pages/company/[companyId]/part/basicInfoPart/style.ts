import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.GRAY100};
  margin-bottom: 5rem;
`;

export const sectionContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const sizeContainer = css`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const infoContainer = css`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  > p {
    padding: 0.5rem;
    :first-of-type {
      width: 40%;
      text-align: right;
      font-size: 0.875rem;
      color: ${COLORS.GRAY60};
    }
    :last-of-type {
      width: 60%;
      line-height: 1.6;
      font-size: 0.875rem;
      font-weight: 400;
      color: ${COLORS.GRAY10};
    }
  }
`;

export const employeeNumberCSS = css`
  font-size: 1rem;
  color: ${COLORS.BLUE_NEON50};
`;

export const mapButton = css`
  margin: 1.5rem 0;
  width: 100%;
  background-color: ${COLORS.GRAY90};
  border: 2px solid ${COLORS.GRAY80};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: ${COLORS.GRAY30};
  padding: 0.75rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const companyListContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const companyLogo = css`
  color: ${COLORS.GRAY70};
  font-size: 1.5rem;
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const factoryBox = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const factoryText = css`
  border-radius: 1.5rem;
  font-size: 0.875rem;
  background-color: #e9eef9;
  color: ${COLORS.GRAY30};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

export const nozoContainer = css`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  > p {
    :first-of-type {
      width: 6.25rem;
      text-align: end;
      margin-right: 0.5rem;
      font-size: 1rem;
      color: ${COLORS.GRAY60};
    }
  }
`;

export const iconText = css`
  position: relative;
  display: flex;
  align-items: center;
`;

export const nozoIconBox = css`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  position: relative;
  > img {
    object-fit: contain;
  }
`;

export const nozoExplainText = css`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${COLORS.GRAY40};
  line-height: 1.6;
`;
