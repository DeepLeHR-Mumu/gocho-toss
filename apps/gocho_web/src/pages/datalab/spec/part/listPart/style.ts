import { css } from "@emotion/react";
import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";

export const partContainer = css`
  background-color: ${COLORS.GRAY100};
  padding: 6rem 0;
`;

export const title = css`
  font-size: 1.75rem;
  font-weight: 700;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_NEON30};
`;

export const mainContainer = css`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
`;

export const menu = css`
  position: sticky;
  top: 0;
  left: 0;
  padding-top: 120px;
  z-index: 10;
`;

export const asideProfile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  width: 5rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem;
  color: ${COLORS.GRAY40};
  margin-bottom: 0.5rem;
  padding: 1rem;
  word-break: break-all;
  text-align: center;
`;

export const loginNickname = css`
  margin-top: 0.5rem;
`;

export const asideButton = css`
  font-size: 0.75rem;
  width: 5rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem;
  color: ${COLORS.GRAY40};
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  word-break: break-all;
  text-align: center;
`;

export const listContainer = css`
  margin-left: 1rem;
  flex-grow: 1;
`;

export const OrderButtonContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1.5rem;
  background-color: ${COLORS.BLUE_SECOND90};
  color: ${COLORS.GRAY40};
  font-size: 0.875rem;
  padding: 1.5rem 2.5rem;
`;

export const setSpecOrderButton = (active = false) => {
  return css`
    width: fit-content;
    text-align: center;
    border-radius: 1.5rem;
    padding: 0.5rem 2rem;
    margin-left: 1rem;
    transition: all 0.2s ease;
    word-break: keep-all;
    font-weight: ${active ? 500 : 400};
    border: 1px solid ${active ? COLORS.BLUE_SECOND40 : `${COLORS.GRAY40}`};
    color: ${active ? "#3171b7" : `${COLORS.GRAY30}`};
    background-color: ${active ? COLORS.BLUE_SECOND40 : "transparent"};

    ${PC_HOVER} {
      :hover {
        font-weight: 500;
      }
    }
  `;
};
