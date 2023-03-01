import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const footerWrapper = css`
  background-color: #2d2d2d;
  padding: 1.5rem 2rem 2rem;
`;

export const linkContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const linkText = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY60};
`;

export const title = css`
  display: block;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${COLORS.GRAY60};
  margin-bottom: 1rem;
`;

export const emailText = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY60};
  margin-bottom: 1.5rem;
`;

export const logo = css`
  width: 7.125rem;
  height: 1.25rem;
  display: block;
  position: relative;
  margin: 2.5rem 0 1rem;
  > img {
    object-fit: contain;
  }
`;

export const infoContainer = css`
  margin-bottom: 2rem;
  font-size: 0.75rem;
  color: ${COLORS.GRAY60};
  line-height: 1.75;

  > li {
    line-height: 2;
  }
`;

export const text = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY60};
  line-height: 1.5;
  text-align: center;
`;
