import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

interface ContainerDef {
  (isClick: boolean): SerializedStyles;
}

export const container: ContainerDef = (isClick) => {
  const defaultContainerCSS = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.2s ease;
    cursor: pointer;
  `;

  return css`
    ${defaultContainerCSS};
    background-color: ${isClick ? COLORS.GRAY100 : COLORS.GRAY95};
  `;
};

export const containerSkeleton = css`
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  height: 2.25rem;
  text-indent: -9999px;
  border-radius: 2rem;
  margin-bottom: 2px;
  padding: 2px;
`;

interface TitleDef {
  (isClick: boolean): SerializedStyles;
}

export const title: TitleDef = (isClick) => {
  const defaultTitleCSS = css`
    width: 9rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    font-size: 0.75rem;
    font-weight: 500;
  `;

  if (!isClick) {
    return css`
      ${defaultTitleCSS};
      color: ${COLORS.GRAY40};
      background-color: ${COLORS.GRAY90};
    `;
  }

  return css`
    ${defaultTitleCSS};
    background-color: ${isClick ? COLORS.BLUE_SECOND70 : COLORS.GRAY100};
    color: ${isClick ? COLORS.GRAY10 : COLORS.GRAY40};
  `;
};

export const infoBox = css`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const desc = css`
  width: 25%;
  text-align: center;
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
  font-weight: 500;
  ${shorten()};
`;

export const restCSS = css`
  ::after {
    content: ", ";
  }

  :last-of-type {
    ::after {
      content: "";
    }
  }
`;
