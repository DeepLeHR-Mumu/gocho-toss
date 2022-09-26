import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const commentWrapper = css`
  display: flex;
  align-items: flex-start;
  margin: 0 0 1rem 2rem;

  :last-of-type {
    margin-bottom: 3rem;
  }
`;

export const nicknameBox = css`
  flex-shrink: 0;
  width: 100%;
  max-width: 11rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  margin-right: 0.5rem;
  overflow: hidden;
`;

export const nicknameCSS = css`
  font-size: 0.875rem;
  padding-left: 0.5rem;
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
