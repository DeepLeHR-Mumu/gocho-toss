import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const container = css`
  position: relative;
  padding: 1rem 4rem;
`;

export const backButton = css`
  color: ${COLORS.GRAY60};
  font-size: 0.75rem;
`;

export const imageContainer = css`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 0%;
  left: 50%;
`;

export const basicInfoContainer = css`
  margin-top: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const userId = css`
  color: ${COLORS.GRAY10};
  font-size: 1.375rem;
  margin-bottom: 0.6rem;
`;

export const characteristicCSS = css`
  margin-bottom: 1.2rem;
  font-size: 0.875rem;
  display: flex;
  flex-direction: row;
  > li {
    color: ${COLORS.GRAY40};
    margin-right: 0.5rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const descTitle = css`
  color: ${COLORS.GRAY60};
  font-size: 0.75rem;
  margin-right: 1rem;
  font-weight: 500;
`;

export const preferenceContainer = css`
  display: flex;
  flex-direction: row;
`;

export const preference = css`
  margin-bottom: 0.3rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  > li {
    margin-right: 1rem;
    color: ${COLORS.BLUE_FIRST40};
    font-size: 0.875rem;
    &:last-of-type {
      margin-right: 0rem;
    }
  }
`;

export const descContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const schoolInfo = css`
  margin-right: 3rem;
  > h3 {
    font-size: 0.75rem;
    color: ${COLORS.GRAY60};
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  > p {
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    margin-bottom: 0;
  }
`;

export const certiContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-bottom: 2.25rem;
`;

export const certiTitle = css`
  display: flex;
  flex-direction: row;
  color: ${COLORS.GRAY60};
  margin-bottom: 0.5rem;
  > div {
    margin-right: 0.2rem;
  }
  > h3 {
    font-size: 0.75rem;
    color: ${COLORS.GRAY60};
    font-weight: 500;
  }
`;

export const certiInfo = css`
  display: flex;
  justify-content: left;
  margin-bottom: 1rem;
  > li {
    margin-right: 3rem;
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
  }
`;
export const certiList = css`
  display: flex;
  justify-content: left;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  > li {
    margin-right: 0.5625rem;
    margin-bottom: 0.75rem;
  }
`;

export const divider = css`
  border: 1px solid ${COLORS.GRAY80};
`;
