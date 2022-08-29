import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "@style/constant";

export const certificateContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2.5rem;
  margin-bottom: 5rem;
`;

export const buttonContainer = css`
  position: relative;
`;

export const appendButton = css`
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.GRAY60};
  color: ${COLORS.GRAY60};
  display: flex;
  align-items: center;
  min-width: 24rem;
  justify-content: center;
  height: 3rem;
  width: fit-content;
  padding: 0 2rem;
  box-sizing: border-box;
  font-weight: 400;
  border-radius: 2rem;
  position: relative;

  > span {
    line-height: 0;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

interface certificateArrBox {
  (isClick: boolean): SerializedStyles;
}

export const certificateArrBox: certificateArrBox = (isClick) => {
  return css`
    position: absolute;
    left: 0;
    top: -1rem;
    width: 100%;
    height: 13rem;
    z-index: 10;
    border-radius: 2rem;
    overflow: hidden;
    border: 1px solid ${COLORS.GRAY60};
    background-color: ${COLORS.GRAY100};
    display: ${isClick ? "block" : "none"};
  `;
};

export const inputTextCSS = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.3125rem;
  box-sizing: border-box;
  border-bottom: 1px solid ${COLORS.GRAY60};

  > input {
    color: ${COLORS.GRAY10};
    font-size: 0.875rem;
    font-weight: 400;
    width: 90%;
  }
`;

export const certificateArrCSS = css`
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  height: 8.75rem;
  overflow: hidden;
  overflow-y: scroll;

  > li {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

export const appendKeywordButton = css`
  color: ${COLORS.GRAY40};
  font-size: 14px;
  margin-left: 0.5rem;
  line-height: 1.6;
`;

export const certificateCardBox = css`
  margin-top: 1rem;
  width: 100%;
  max-width: 840px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const certificateCard = css`
  position: relative;
  background-color: ${COLORS.BLUE_SECOND70};
  margin: 0 1rem 1rem 0;
  width: fit-content;
  height: 3rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  border: 1px solid ${COLORS.GRAY10};
  color: ${COLORS.GRAY20};
  font-weight: 400;
  font-size: 1rem;
  box-sizing: border-box;

  > button {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 14px;
  }
`;
