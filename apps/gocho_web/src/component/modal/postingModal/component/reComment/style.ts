import { css } from "@emotion/react";
import { COLORS } from "@style/constant";
import { shorten } from "@style/common";

export const commentWrapper = css`
  display: flex;
  align-items: flex-start;
  margin: 0 0 1rem 2rem;
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
