import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const partContainer = css`
  background-color: ${COLORS.GRAY90};
  padding: 6rem 0 2.9375rem;
`;

export const title = css`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${COLORS.GRAY10};
  margin-bottom: 4.5rem;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;

export const flexBox = css`
  display: flex;
  margin-top: 1rem;
`;

export const searchWrapper = css`
  flex-grow: 1;
  margin-right: 1rem;
  position: relative;
`;

export const searchBox = css`
  width: 100%;
  height: 2.5rem;
  font-weight: 400;
  padding: 0.5rem 2rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY100};
  font-size: 0.875rem;
  color: ${COLORS.GRAY20};

  :placeholder {
    color: ${COLORS.GRAY60};
  }
`;

export const searchButton = css`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translate(0, -50%);
  color: ${COLORS.GRAY40};
  width: 1.25rem;
`;

export const buttonArrContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const setJobOrderButton = (active = false) => {
  return css`
    width: fit-content;
    text-align: center;
    border-radius: 2rem;
    border: 1px solid ${active ? COLORS.GRAY10 : `${COLORS.GRAY80}`};
    color: ${COLORS.GRAY10};
    background-color: ${active ? COLORS.STATE_SUCCESS : `${COLORS.GRAY100}`};
    margin-right: 0.5rem;
    padding: 0 1rem;
    transition: all 0.2s ease;
    height: 2.5rem;
    font-size: 0.875rem;
    font-weight: 400;

    ${PC_HOVER} {
      :hover {
        border: 1px solid ${active ? COLORS.GRAY10 : `${COLORS.GRAY80}`};
        background-color: ${active ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
      }
    }
  `;
};

export const infoContainer = css`
  margin: 0.875rem 0 3rem 0;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY60};
`;

export const infoImage = css`
  margin: 0 1rem;
  position: relative;
  width: 0.75rem;
  height: 0.75rem;

  > img {
    object-fit: contain;
  }
  &:last-of-type {
    margin-left: 0;
  }
`;
