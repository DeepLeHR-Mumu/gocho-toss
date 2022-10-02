import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const container = css`
  position: relative;
  padding: 1rem 2rem 0;
  border-bottom: 1px solid ${COLORS.GRAY80};
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
  margin: 2.75rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const userId = css`
  color: ${COLORS.GRAY10};
  font-size: 1.375rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const characteristicCSS = css`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > li {
    font-size: 0.875rem;
    color: ${COLORS.GRAY40};
    font-weight: 500;
    margin-right: 0.5rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const descTitle = css`
  color: ${COLORS.GRAY60};
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 1rem;
`;

export const preferenceContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const preference = css`
  display: flex;
  align-items: center;

  > li {
    margin-right: 1rem;
    color: ${COLORS.BLUE_FIRST40};
    font-weight: 400;
    font-size: 0.875rem;
    &:last-of-type {
      margin-right: 0rem;
    }
  }
`;

export const descContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const schoolInfo = css`
  margin-right: 2.5rem;
`;

export const schoolInfoTitle = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY60};
  font-weight: 500;
  line-height: 2;
`;

export const schoolInfoDesc = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  line-height: 2;
`;

export const noStrongDesc = css`
  color: ${COLORS.GRAY60};
  font-size: 0.875rem;
`;

export const certiContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-bottom: 2.25rem;
`;

export const certiTitle = css`
  color: ${COLORS.GRAY60};
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 3;
  font-weight: 500;

  > svg {
    font-size: 1.25rem;
    margin-right: 0.5rem;
    color: ${COLORS.BLUE_NEON40};
  }
`;

export const certiInfo = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  > li {
    margin: 0 1.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${COLORS.GRAY10};
  }
`;

export const certiList = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > li {
    margin: 0 0.5rem 0.5rem 0;
    display: flex;
    align-items: center;
    border-radius: 2rem;
    justify-content: center;
    padding: 0 1.75rem;
    height: 2rem;
    width: fit-content;
    border: 1px solid ${COLORS.GRAY60};
    color: ${COLORS.GRAY40};
    font-size: 0.875rem;
    font-weight: 400;
  }
`;
