import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: relative;
`;

interface ContainerDef {
  (isClick: boolean, isHover: boolean): SerializedStyles;
}

export const container: ContainerDef = (isClick, isHover) => {
  const defaultContainerCSS = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 2rem;
    margin-bottom: 2px;
    padding: 2px;
    transition: all 0.2s ease;
    cursor: pointer;
  `;

  if (!isClick) {
    return css`
      ${defaultContainerCSS};
      background-color: ${isHover ? COLORS.GRAY100 : COLORS.GRAY80};
    `;
  }
  return css`
    ${defaultContainerCSS};
    background-color: ${isClick ? COLORS.GRAY100 : COLORS.GRAY80};
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

interface TitleCSSDef {
  (isClick: boolean, isHover: boolean): SerializedStyles;
}

export const titleCSS: TitleCSSDef = (isClick, isHover) => {
  const defaultTitleCSS = css`
    width: 14.5rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    transition: all 0.2s ease;
    font-size: 0.75rem;
    font-weight: 500;
  `;

  if (!isClick) {
    return css`
      ${defaultTitleCSS};
      color: ${isHover ? COLORS.GRAY10 : COLORS.GRAY40};
      background-color: ${isHover ? COLORS.BLUE_SECOND70 : COLORS.GRAY100};
    `;
  }
  return css`
    ${defaultTitleCSS};
    background-color: ${isClick ? COLORS.BLUE_SECOND70 : COLORS.GRAY100};
    color: ${isClick ? COLORS.GRAY10 : COLORS.GRAY40};
  `;
};

export const infoBox = css`
  display: flex;
  align-items: center;
  width: calc(100% - 15rem);
`;

export const desc = css`
  text-align: center;
  width: 20%;
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
  font-weight: 500;
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

export const viewButton = css`
  text-align: center;
  width: 20%;
  color: ${COLORS.BLUE_FIRST40};
  font-size: 0.875rem;
  font-weight: 500;
`;

const defaultArrowBox = css`
  position: absolute;
  font-size: 1rem;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const arrowClickBox = css`
  ${defaultArrowBox};
  color: ${COLORS.BLUE_FIRST40};
  animation: fadeInLeft 0.75s forwards ease;

  @keyframes fadeInLeft {
    0% {
      right: -0.25rem;
      opacity: 0;
    }
    25% {
      opacity: 1;
      right: 1rem;
    }
    50% {
      right: -0.25rem;
    }
    75% {
      right: 1rem;
    }
    100% {
    }
  }
`;

export const arrowMoveBox = css`
  ${defaultArrowBox};
  color: #000;
  animation: fadeInMove 0.5s forwards ease;

  @keyframes fadeInMove {
    0% {
      opacity: 0;
      right: -0.25rem;
    }
    100% {
      right: 1rem;
      opacity: 1;
    }
  }
`;
