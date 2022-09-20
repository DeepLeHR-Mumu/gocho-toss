import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.GRAY100};
  width: 17rem;
  padding: 1.125rem 1.5rem 2.625rem 1.5rem;
  border-radius: 1.5rem;
  flex-grow: 0;
  flex-shrink: 0;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const title = css`
  color: ${COLORS.GRAY10};
  margin-bottom: 0.3rem;
  font-weight: 500;
  font-size: 1rem;
`;

export const subTitle = css`
  color: ${COLORS.GRAY60};
  margin-bottom: 1.625rem;
  font-weight: 500;
  font-size: 0.875rem;
`;

export const hookingMentSection = css`
  color: ${COLORS.BLUE_FIRST40};
  text-align: center;
  word-break: keep-all;
  margin-bottom: 2.5rem;
`;

export const sectionContainer = css`
  margin-top: 1.5rem;
  width: 100%;

  > div {
    position: relative;
  }
`;

export const titleContainer = css`
  display: flex;
  flex-direction: row;
  h3 {
    font-weight: 500;
    font-size: 0.75rem;
    color: ${COLORS.GRAY60};
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }
  span {
    font-size: 0.6875rem;
    color: ${COLORS.ERROR_RED30};
    font-weight: 400;
  }
`;

interface ListBoxDef {
  (isSelectBoxOpen: boolean): SerializedStyles;
}
export const listBox: ListBoxDef = (isSelectBoxOpen) => {
  return css`
    position: relative;
    border: 1px solid ${isSelectBoxOpen ? "transparent" : COLORS.GRAY60};
    border-radius: 1.5rem;
    padding: 0.5rem 2rem 0.5rem 1.5rem;
    width: 100%;
    display: flex;
    justify-content: left;
    font-size: 0.875rem;
    color: ${COLORS.GRAY60};
    margin-bottom: 0.25rem;
    > button {
      position: absolute;
      color: ${COLORS.GRAY60};
      font-size: 1.3rem;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      margin-right: 1rem;
    }
  `;
};

export const notSelectedBox = css`
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  > p {
    color: ${COLORS.GRAY60};
  }
`;

export const mySpecMent = css`
  font-weight: 400;
  color: ${COLORS.GRAY40};
  font-size: 0.875rem;
`;

export const disabledButton = css`
  margin-top: 3.5rem;
  text-align: center;
  border-radius: 1.5rem;
  width: 100%;
  padding: 0.875rem 0;
  background-color: ${COLORS.GRAY80};
  color: ${COLORS.GRAY60};
`;

export const selectBox = css``;

export const feedBackContainer = css`
  position: relative;
  margin-bottom: 2rem;
  > textarea {
    padding: 0.25rem 2.5625rem 0.25rem 1.5rem;
    font-size: 0.875rem;
    width: 100%;
    border: 1px solid ${COLORS.GRAY60};
    border-radius: 1.5rem;
    resize: none;
    font-family: Noto Sans KR, sans-serif;
  }
`;

export const pointContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.3125rem;
`;

export const pointCSS = css`
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;
