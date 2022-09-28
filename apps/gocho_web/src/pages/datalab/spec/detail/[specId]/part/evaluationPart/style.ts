import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.GRAY100};
  width: 100%;
  max-width: 17rem;
  padding: 1.125rem;
  border-radius: 2rem;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 5.5rem;
  right: 0;
`;

export const title = css`
  color: ${COLORS.GRAY10};
  font-weight: 500;
  font-size: 1rem;
  line-height: 2;
`;

export const subTitle = css`
  color: ${COLORS.GRAY60};
  margin-bottom: 1.75rem;
  font-weight: 500;
  font-size: 0.875rem;
`;

export const hookingMentSection = css`
  color: ${COLORS.BLUE_FIRST40};
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;
  word-break: keep-all;
  line-height: 1.6;
  margin-bottom: 1.75rem;
`;

export const sectionContainer = css`
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const parentPositionBox = css`
  position: relative;
`;

export const titleContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const strongTitle = css`
  display: block;
  font-weight: 500;
  font-size: 0.75rem;
  color: ${COLORS.GRAY60};
`;

export const warningDesc = css`
  font-size: 0.6875rem;
  color: ${COLORS.ERROR_RED30};
  font-weight: 400;
`;

interface ListBoxDef {
  (isSelectBoxOpen: boolean): SerializedStyles;
}
export const listBox: ListBoxDef = (isSelectBoxOpen) => {
  return css`
    border: 1px solid ${isSelectBoxOpen ? "transparent" : COLORS.GRAY60};
    border-radius: 2rem;
    width: 100%;
    padding: 0 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${COLORS.GRAY60};
    margin-bottom: 1rem;

    > svg {
      font-size: 1.25rem;
    }
  `;
};

export const notSelectedBox = css`
  background-color: ${COLORS.GRAY90};
  width: fit-content;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.GRAY60};
  font-size: 0.875rem;
  font-weight: 400;
  border-radius: 2rem;
  height: 2rem;
`;

export const mySpecMent = css`
  font-weight: 400;
  color: ${COLORS.GRAY40};
  font-size: 0.875rem;
`;

export const disabledButton = css`
  margin-top: 3.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  background-color: ${COLORS.GRAY80};
  height: 3rem;
  color: ${COLORS.GRAY60};
  font-size: 0.875rem;
  font-weight: 500;
  width: 100%;
`;

export const selectBox = css``;

export const feedBackContainer = css`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  min-height: 5rem;
  width: 100%;
  font-weight: 400;
  border: 1px solid ${COLORS.GRAY60};
  color: ${COLORS.GRAY60};
  border-radius: 1.5rem;
  resize: none;
`;

export const pointContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.3125rem;
`;

export const scoreTitle = css`
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${COLORS.GRAY10};
`;

export const warningBox = css`
  margin-top: 1rem;
  height: 0.75rem;
`;
