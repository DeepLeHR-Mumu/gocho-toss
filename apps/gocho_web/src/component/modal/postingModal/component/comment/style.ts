import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/shorten";

export const wrapper = css`
  margin-bottom: 1rem;
`;
export const commentWrapper = css`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const nicknameBox = css`
  flex-shrink: 0;
  width: 100%;
  max-width: 11rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  margin-right: 0.5rem;
  overflow: hidden;
`;

export const nicknameCSS = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  ${shorten()};
`;

export const bodyBox = css`
  flex-grow: 1;
`;

export const bodyCSS = css`
  font-size: 0.875rem;
  line-height: 1.8;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  font-weight: 400;
  color: ${COLORS.GRAY10};
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  min-height: 2.25rem;
`;

export const buttonContainer = css`
  display: flex;
  padding-top: 0.5rem;
`;

export const writeReCommentButtonBox = css`
  /* margin: 0 0.5rem 0 1.5rem; */
  font-size: 0.875rem;
  color: ${COLORS.GRAY30};
  font-weight: 400;
  white-space: nowrap;
  margin-right: 1rem;
`;

export const settingButtonContainer = css`
  display: flex;
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
`;

export const settingButton = css`
  min-width: 1.5rem;
  color: ${COLORS.GRAY40};
  margin: 0.25rem 0.5rem 0 0;
`;
