import { css, SerializedStyles } from "@emotion/react";
import { shorten } from "@style/common";
import { COLORS } from "@style/constant";

export const cardWrapper = css`
  border-radius: 1.875rem 1.875rem 1.875rem 0;
  background-color: ${COLORS.GRAY90};
  padding: 2rem;
  margin-right: 2rem;
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
    width: 3.125rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8125rem;
    border: 1px solid;
    border-radius: 0.75rem;

    ${type === "진로" &&
    `
    color:#5429cd;
    border-color:#5429cd;
    `}
    ${type === "자유" &&
    `
    color:#3f7222;
    border-color:#3f7222;
    `}
    ${type === "기업" &&
    `
    color:${COLORS.GRAY10};
    border-color:${COLORS.GRAY10};
    `}
    ${type === "자격증" &&
    `
    color:${COLORS.ERROR_RED40};
    border-color:${COLORS.ERROR_RED40};
    `}
  `;
};

export const postingNicknameCSS = css`
  font-size: 10px;
  color: ${COLORS.GRAY10};
`;

export const titleCSS = css`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${COLORS.GRAY10};
  margin-bottom: 1rem;
  line-height: 1.5;
  word-break: keep-all;
  ${shorten(2)}
`;

export const bodyCSS = css`
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  color: ${COLORS.GRAY10};
  line-height: 1.8;
  word-break: keep-all;
  ${shorten(3)};
`;

export const commentCount = css`
  font-size: 10px;
  text-align: right;
  line-height: 2;
  color: ${COLORS.GRAY10};
`;

export const commentCSS = css`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 1rem;
  padding: 0.75rem;
  margin-top: 5px;
  color: #6f7182;
`;

export const commentNickname = css`
  white-space: nowrap;
  font-weight: 600;
  margin-right: 1rem;
`;

export const commentBody = css`
  font-weight: 500;
  ${shorten()};
`;
