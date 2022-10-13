import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: relative;
  width: 12.5rem;
`;

export const buttonCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  box-sizing: border-box;
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.GRAY70};
  color: ${COLORS.GRAY40};
  font-size: 0.875rem;
  height: 3rem;
  border-radius: 2rem;
  white-space: nowrap;
`;

interface isValueColorDef {
  (isValue: undefined | number): SerializedStyles;
}

export const isValueColor: isValueColorDef = (isValue) => {
  return css`
    color: ${isValue ? COLORS.GRAY10 : COLORS.GRAY40};
  `;
};

export const textForm = css`
  width: 100%;
  padding: 0.75rem 1.75rem;
  box-sizing: border-box;
  text-align: center;
  transition: all 0.2s ease;
  border-bottom: 1px solid ${COLORS.GRAY60};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    font-size: 0.875rem;
    color: ${COLORS.GRAY40};
  }

  :focus {
    outline: 0;
    border-bottom: 1px solid ${COLORS.BLUE_FIRST40};
  }
`;

interface langArrBoxDef {
  (isClick: boolean): SerializedStyles;
}

export const langArrBox: langArrBoxDef = (isClick) => {
  return css`
    position: absolute;
    top: -1rem;
    left: 0;
    width: 100%;
    overflow: hidden;
    z-index: 10;
    border: 1px solid ${COLORS.GRAY60};
    border-radius: 2rem;
    background-color: ${COLORS.GRAY100};
    padding-bottom: 8px;
    display: ${isClick ? "block" : "none"};
  `;
};

export const langArrContainer = css`
  padding: 8px;
  height: 5rem;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: scroll;

  > li {
    margin-bottom: 0.5rem;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const defaultBeforeAfter = css`
  width: 1rem;
  height: 1rem;
  border-radius: 3px;
  display: inline-block;
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`;

export const labelCSS = css`
  cursor: pointer;

  > p {
    color: ${COLORS.GRAY40};
    font-size: 0.875rem;
    font-weight: 400;
    position: relative;
    align-items: center;
    display: flex;
    padding-left: 1.5rem;

    :before {
      ${defaultBeforeAfter};
      border: 1px solid ${COLORS.GRAY60};
      background-color: ${COLORS.GRAY100};
    }

    :after {
      ${defaultBeforeAfter};
      border: 1px solid ${COLORS.GRAY60};
      background-image: url('data:image/svg+xml;utf8,<svg stroke="skyblue" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>');
      background-position: center;
      background-size: 1rem;
      background-repeat: no-repeat;
      opacity: 0;
    }
  }
`;

export const hide = css`
  margin: 0;

  &:checked + label {
    > p {
      ::after {
        opacity: 1;
      }
    }
  }
`;

export const appendButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  margin: auto;
  border-radius: 1rem;
  height: 2rem;
  background-color: ${COLORS.BLUE_NEON40};
  font-size: 0.875rem;
  color: ${COLORS.GRAY100};
`;
