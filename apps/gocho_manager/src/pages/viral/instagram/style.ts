import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const sectionContainer = css`
  margin: 1.5rem 0;
`;

export const sectionTitle = css`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${COLORS.GRAY30};
`;

export const jobContainer = css`
  padding: 0.5rem 0;
  border-bottom: 2px solid ${COLORS.GRAY10};
`;

export const jobInfoContainer = css`
  display: flex;
  align-items: center;
  line-height: 1.2;
  margin-bottom: 0.5rem;
`;

export const companyLogo = css`
  width: 4rem;
  height: 4rem;
  position: relative;
  margin-right: 1.5rem;
`;

export const companyInfo = css`
  width: 25%;
  margin-right: 1rem;
`;

export const infoName = css`
  font-weight: 700;
  color: ${COLORS.GRAY10};
`;

export const jobTitle = css`
  font-weight: 500;
  font-size: 1.125rem;
  margin-right: 0.5rem;
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
  gap: 0 0.5rem;
`;

export const buttonBox = css`
  display: flex;
  align-items: center;
`;

export const copyButton = css`
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
  border-radius: 0.5rem;
  margin: 0 0.5rem;
`;
