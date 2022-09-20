import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "@style/common";

export const wrapper = css`
  margin-bottom: 1rem;
`;
export const commentWrapper = css`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const nicknameCSS = css`
  flex-shrink: 0;
  width: 9rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  padding: 0.375rem 1.5rem;
  margin-right: 0.5rem;
  overflow: hidden;

  ${shorten()};
`;

export const bodyBox = css`
  flex-grow: 1;
`;

export const bodyCSS = css`
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  padding: 0.375rem 1.5rem;
`;

export const buttonContainer = css`
  display: flex;
  padding-top: 0.5rem;
`;

export const writeReCommentButtonBox = css`
  margin: 0 0.5rem 0 1.5rem;
  color: ${COLORS.GRAY40};
  transform: matrix(-1, 0, 0, 1, 0, 0);
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
