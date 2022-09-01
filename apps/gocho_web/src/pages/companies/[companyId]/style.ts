import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const mainContainer = css`
  background-color: #f2f2f6;
  padding-top: 0.375rem;
`;

export const buttonContainer = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const changeDataButton = (active = false) => {
  return css`
    width: 49.5%;
    padding: 0.75rem 1rem;
    border-radius: 2rem;
    border: 2px solid ${active ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY60}`};
    color: ${active ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY60}`};
    background-color: ${active ? COLORS.GRAY100 : `${COLORS.STATE_SUCCESS}`};
  `;
};

export const flexBox = css`
  display: flex;
`;

export const partContainer = css`
  margin-right: 1rem;
  flex-grow: 1;
`;

export const sectionContainer = css`
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  margin-bottom: 4rem;
`;

export const tempChatBox = css`
  width: 17rem;
  height: 35rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  padding: 2rem;
  text-align: center;
`;
