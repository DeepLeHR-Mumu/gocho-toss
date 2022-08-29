import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const partContainer = css`
  min-height: 300px;
  border-radius: 2rem;
  padding: 3rem;
  background-color: ${COLORS.GRAY100};
  margin-left: 1rem;
`;

export const headerContainer = css`
  display: flex;
  align-items: center;
`;

export const buttonArrContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const setBookmarkViewButton = (active = false) => {
  return css`
    text-align: center;
    border-radius: 1rem;
    border: 1px solid ${active ? COLORS.GRAY10 : `${COLORS.GRAY70}`};
    color: ${active ? COLORS.GRAY100 : `${COLORS.GRAY30}`};
    background-color: ${active ? COLORS.GRAY10 : "transparent"};
    font-weight: 400;
    margin-right: 0.5rem;
    padding: 0.25rem 1rem;
    transition: all 0.2s ease;

    :last-of-type {
      margin-right: 0;
    }
  `;
};

export const title = css`
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 2rem;
  color: ${COLORS.GRAY10};
`;
