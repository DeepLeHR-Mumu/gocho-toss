import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const container = (isClick: boolean) => {
  const defaultContainerCSS = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.2s ease;
    margin: 0;
  `;

  return css`
    ${defaultContainerCSS};
    background-color: ${isClick ? COLORS.GRAY100 : COLORS.GRAY95};
    border: ${isClick ? `1px solid ${COLORS.BLUE_SECOND30}` : "none"};
    border-width: 1px 0px;
  `;
};

export const title = (isClick: boolean, isDdayEnd: boolean) => {
  const defaultTitleCSS = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 0.75rem;
    font-weight: 500;
    height: 3rem;
    transition: all 0.2s ease;
    line-height: 1.8;
  `;

  return css`
    ${defaultTitleCSS};
    background-color: ${isClick ? COLORS.BLUE_SECOND30 : COLORS.GRAY90};
    ${isDdayEnd &&
    `
        background-color: ${isClick ? COLORS.GRAY40 : COLORS.GRAY90};
    `}
    color: ${isClick ? COLORS.GRAY10 : COLORS.GRAY40};
    width: ${isClick ? "10rem" : "9rem"};
    padding: ${isClick ? "0 0.75rem;" : "0 0.25rem;"};

    > span {
      display: block;
      width: 100%;
      ${shorten()};
    }
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
