import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  width: 100%;
  background-color: ${COLORS.GRAY100};
  padding-top: 4rem;
`;

export const sectionContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const h2Title = css`
  color: ${COLORS.GRAY10};
  font-size: 1.375rem;
  font-weight: 500;
`;

export const sizeContainer = css`
  width: 22.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const infoContainer = css`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-start;
  > p {
    :first-of-type {
      width: 6.25rem;
      text-align: end;
      margin-right: 0.5rem;
      font-size: 1rem;
      color: ${COLORS.GRAY60};
    }
    :last-of-type {
      font-size: 1rem;
      color: ${COLORS.GRAY10};
    }
  }
`;

export const employeeNumberCSS = css`
  font-size: 1rem;
  color: ${COLORS.BLUE_NEON50};
`;

export const mapButton = css`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
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
  gap: 0.3rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const companyLogo = css`
  color: ${COLORS.GRAY70};
  font-size: 1.2rem;
  margin-right: 0.4rem;
`;

export const factoryBox = css`
  background-color: #e9eef9;
  padding: 0.5rem 0.375rem;
  border-radius: 1.5rem;
  flex-shrink: 0;
`;

export const factoryText = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY30};
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

export const nozoExplainText = css`
  :first-of-type {
    font-size: 1rem;
    color: ${COLORS.GRAY10};
  }
  :last-of-type {
    font-size: 1rem;
    color: ${COLORS.GRAY40};
  }
`;
