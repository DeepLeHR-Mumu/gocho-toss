import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const jobAdCardSkeleton = css`
  overflow: hidden;
  height: 15rem;
  border-radius: 1.5rem 1.5rem 0 0;
  margin: 0.5rem;
`;

export const cardWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 97%;
  height: 15rem;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 1rem;
  background-color: ${COLORS.GRAY90};
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
  background-color: ${COLORS.GRAY100};
  width: 7.5rem;
  height: 7.5rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
  margin-right: 2rem;
`;

export const companyLogoBox = css`
  width: 6.5rem;
  height: 6.5rem;
  overflow: hidden;
  border-radius: 1.5rem;
  position: relative;
`;

export const infoContainer = css`
  flex-grow: 1;
`;

export const companyName = css`
  width: fit-content;
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  margin: 0 0 1rem auto;
  padding: 0.25rem 0.5rem;
`;

export const date = css`
  text-align: right;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
`;

export const title = css`
  font-size: 1.5rem;
`;
