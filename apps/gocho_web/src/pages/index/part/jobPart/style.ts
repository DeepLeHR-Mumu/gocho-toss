import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const partContainer = css`
  margin-top: 9rem;
`;

export const buttonArrContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

export const title = css`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${COLORS.GRAY10};
  margin-bottom: 1.5rem;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_NEON40};
`;

export const setJobOrderButton = (active = false) => {
  return css`
    width: fit-content;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid ${active ? COLORS.GRAY10 : COLORS.GRAY80};
    color: ${active ? COLORS.GRAY10 : COLORS.GRAY40};
    background-color: ${active ? COLORS.STATE_SUCCESS : "transparent"};
    font-weight: 500;
    font-size: 0.75rem;
    margin-right: 0.5rem;
    padding: 0.25rem 1rem;
    transition: all 0.2s ease;

    :last-of-type {
      margin-right: 0;
    }
  `;
};

export const showMoreJobBox = css`
  width: 100%;
  max-width: 25rem;
  margin: 5.5rem auto 0;
`;
