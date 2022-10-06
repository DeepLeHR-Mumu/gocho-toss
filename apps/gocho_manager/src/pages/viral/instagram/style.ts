import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const sectionContainer = css`
  margin: 2rem 0;
`;

export const jobContainer = css`
  display: flex;
  align-items: center;
  line-height: 1.2;
  margin-bottom: 0.5rem;
`;

export const companyInfo = css`
  width: 15%;
  margin-right: 0.5rem;
`;

export const infoName = css`
  font-weight: 700;
  color: ${COLORS.GRAY10};
`;

export const jobTitle = css`
  font-weight: 500;
  font-size: 1.125rem;
  width: 25%;
  margin-right: 0.5rem;
`;

export const companyLogo = css`
  width: 4rem;
  height: 4rem;
  position: relative;
`;

export const infoBox = css`
  width: 15%;
  margin-right: 0.5rem;
`;

export const info = css`
  font-weight: 400;
  color: ${COLORS.GRAY30};
  margin-bottom: 0.25rem;
`;

export const buttonContainer = css`
  display: flex;
  align-items: center;
`;
