import { css, SerializedStyles } from "@emotion/react";
import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";

export const cardWrapper = css`
  border-radius: 1.5rem 1.5rem 1.5rem 0;
  background-color: ${COLORS.GRAY90};
  padding: 2rem;
  margin-right: 1rem;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    bottom: -1.75rem;
    left: 0;
    border-top: 1.875rem solid ${COLORS.GRAY90};
    border-right: 1.875rem solid transparent;
  }
`;

export const topContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

interface typeCreatorCSSDef {
  (type: "진로" | "자유" | "기업" | "자격증"): SerializedStyles;
}

export const typeCreatorCSS: typeCreatorCSSDef = (type) => {
  return css`
    width: 3.5rem;
    height: 2.0625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    border-radius: 1.25rem;

    ${type === "진로" &&
    `
    color:#440AE9;
    background-color:#E7DEFF;
    `}
    ${type === "자유" &&
    `
    color:#09A434;
    background-color : #EDFFE3
    `}
    ${type === "기업" &&
    `
    color:${COLORS.GRAY10};
    background-color:#F0F0F0;
    `}
    ${type === "자격증" &&
    `
    color:#F16E0E;
    background-color:#FFF4DC;
    `}
  `;
};

export const postingNicknameCSS = css`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${COLORS.GRAY40};
`;

export const titleCSS = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  margin-bottom: 1rem;
  line-height: 1.6;
  word-break: keep-all;
  ${shorten(2)}
`;

export const bodyCSS = css`
  font-size: 0.75rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: ${COLORS.GRAY30};
  line-height: 1.8;
  word-break: keep-all;
  ${shorten(3)};
`;

export const commentCount = css`
  font-size: 0.75rem;
  text-align: right;
  line-height: 2;
  margin-bottom: 0.5rem;
  color: ${COLORS.GRAY40};
`;

export const commentCSS = css`
  display: flex;
  align-items: flex-start;
  font-size: 0.75rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 1rem;
  padding: 0.5rem;
`;

export const commentNickname = css`
  white-space: nowrap;
  font-weight: 500;
  line-height: 1.6;
  color: ${COLORS.GRAY40};
  margin-right: 0.5rem;
`;

export const commentBody = css`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.6;
  color: ${COLORS.GRAY30};
  ${shorten(2)};
`;
