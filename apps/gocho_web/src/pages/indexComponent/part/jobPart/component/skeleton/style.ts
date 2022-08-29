import { css } from "@emotion/react";

import { COLORS } from "@style/constant";

export const partContainer = css`
  margin-top: 5.3125rem;
`;

export const headerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const buttonArrContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const title = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.GRAY10};
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_NEON40};
`;

export const jobOrderButton = css`
  width: fit-content;
  text-align: center;
  border-radius: 1rem;
  border: 1px solid ${COLORS.GRAY70};
  color: ${COLORS.GRAY30};
  background-color: transparent;
  font-weight: 400;
  margin-right: 0.5rem;
  padding: 0.25rem 1rem;
  transition: all 0.2s ease;

  :last-of-type {
    margin-right: 0;
  }
`;

export const cardListContainer = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem 0;
`;

export const showMoreJobButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 29.25rem;
  font-size: 0.9375rem;
  border-radius: 2rem;
  margin: 2.5rem auto 0;
  padding: 1rem;
  background-color: ${COLORS.GRAY20};
  color: ${COLORS.GRAY100};

  > span {
    padding-left: 5px;
    color: ${COLORS.GRAY100};
    opacity: 0.4;
    display: flex;
    align-items: center;
  }
`;
