import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const partContainer = css`
  margin-top: 7.9375rem;
`;

export const headerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const title = css`
  font-size: 1.25rem;
  color: ${COLORS.GRAY10};
  font-weight: 600;
`;

export const buttonArrContainer = css`
  display: flex;
  flex-wrap: wrap;
`;

export const postingOrderButton = css`
  width: fit-content;
  text-align: center;
  border-radius: 1rem;
  font-weight: 400;
  margin-right: 0.5rem;
  padding: 0.25rem 1rem;
  border: 1px solid;
  transition: all 0.2s ease;
  border-color: ${COLORS.GRAY70};
  color: ${COLORS.GRAY30};
  background-color: transparent;

  :last-of-type {
    margin-right: 0;
  }
`;

export const cardListContainer = css`
  position: relative;
  overflow: hidden;
`;

export const sliderListContainer = css`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
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
