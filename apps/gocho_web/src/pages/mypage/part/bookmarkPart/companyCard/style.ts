import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const cardWrapper = css`
  width: 32%;
  margin-bottom: 1.5%;
  margin-right: 1.8%;
  border-radius: 1.5rem;
  border: 2px solid ${COLORS.GRAY90};
  padding: 1.75rem;
  position: relative;

  :nth-of-type(3n) {
    margin-right: 0;
  }
`;

export const bookmarkButtonWrapper = css`
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
`;

export const bookmarkButtonBox = css`
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${COLORS.GRAY100};
  position: relative;
`;

export const isRecruitingCSS = css`
  color: ${COLORS.ERROR_RED40};
`;

export const NameCSS = css`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${COLORS.GRAY30};
  margin-top: 0.5rem;
`;

export const infoWrapper = css`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const companyLogoBox = css`
  width: 4rem;
  height: 4rem;
  position: relative;
  margin: 0 0 0 auto;
`;

export const sizeCSS = css`
  font-size: 1.125rem;
  font-weight: 700;
  margin-right: 0.25rem;
  color: ${COLORS.GRAY40};
`;

export const sectorCSS = css`
  font-size: 1rem;
  font-weight: 400;
  align-items: center;
  line-height: 1.125;
  color: ${COLORS.GRAY40};
`;
