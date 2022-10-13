import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const chipContainer = css`
  position: relative;
`;

interface chipButtonDef {
  (isValue: string | undefined): SerializedStyles;
}

const defaultChipButton = css`
  height: 3rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10rem;
  background-color: ${COLORS.GRAY100};
  font-size: 0.875rem;
  border-radius: 2rem;
  border: 1px solid ${COLORS.GRAY60};
`;

export const chipButton: chipButtonDef = (isValue) => {
  if (isValue) {
    return css`
      ${defaultChipButton}
      color: ${COLORS.GRAY10};

      > svg {
        color: ${COLORS.BLUE_FIRST40};
      }
    `;
  }
  return css`
    ${defaultChipButton}
    color: ${COLORS.GRAY60};
  `;
};

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

export const langTitle = css`
  padding: 0.75rem 1.75rem;
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.GRAY60};
`;

export const langArrContainer = css`
  padding: 8px;
  height: 7.5rem;
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

export const appendButton = css``;
