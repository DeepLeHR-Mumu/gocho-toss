import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const commentWrapper = (isRecomment: boolean) => {
  if (isRecomment) {
    return css`
      margin: 0 0 1rem 2rem;

      :last-of-type {
        margin-bottom: 3rem;
      }
    `;
  }
  return css`
    margin-bottom: 1rem;
  `;
};

export const commentUserInfoBox = css`
  flex-shrink: 0;
  width: 100%;
  max-width: 11rem;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

export const userInfoContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const nicknameCSS = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  ${shorten()};
`;

export const userBadgeCSS = css`
  margin-right: 0.5rem;
`;

export const bodyBox = css`
  flex-grow: 1;
`;

export const bodyCSS = (isRecomment: boolean) => {
  return css`
    height: 2.5rem;
    font-size: 1rem;
    border-radius: 1.5rem;
    background-color: ${isRecomment ? COLORS.BLUE_SECOND90 : COLORS.GRAY90};
    font-weight: 400;
    color: ${COLORS.GRAY10};
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
  `;
};

export const dateCSS = css`
  color: ${COLORS.GRAY40};
  font-size: 0.6875rem;
  font-weight: 400;
  margin: 0.5rem 0 0 1.5rem;
`;

export const myCommentButton = css`
  color: ${COLORS.GRAY40};
  font-weight: 400;
  white-space: nowrap;
  margin-right: 1rem;
`;

export const settingButtonContainer = css`
  margin-left: 1.5rem;
  display: flex;
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
`;

export const settingButton = css`
  min-width: 1.5rem;
  color: ${COLORS.GRAY40};
  margin: 0.25rem 0.5rem 0 0;
`;

export const buttonContainer = css`
  display: flex;
  padding-top: 0.5rem;
`;
