import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const partContainer = css`
  margin-top: 10rem;
`;

export const title = css`
  font-size: 1.25rem;
  color: ${COLORS.GRAY10};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;

export const buttonArrContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

export const postingOrderButton = css`
  text-align: center;
  border-radius: 1rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 2.0625rem;
  background-color: ${COLORS.GRAY90};
  color: ${COLORS.GRAY10};

  :last-of-type {
    margin-right: 0;
  }
`;

export const cardListContainer = css`
  position: relative;
  min-height: 20.625rem;
`;

export const sliderListContainer = css`
  display: flex;
  padding-bottom: 1.25rem;
`;

export const showMoreCommunityPostingButton = css`
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

export const linkButtonBox = css`
  width: 100%;
  margin: 1.5rem auto 0;
  max-width: 25.5rem;
`;
