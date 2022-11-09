import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const container = () => {
  return css`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    width: 100%;
  `;
};

export const formCSS = css`
  width: 100%;
`;

export const writeCommentWrapper = css`
  position: relative;
  margin-top: 0.5rem;
  width: 100%;
`;

export const writeCommentBox = css`
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  padding: 0.5rem 2rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  color: ${COLORS.GRAY30};
  vertical-align: middle;
  border: none;
  resize: none;
  box-shadow: none;

  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

export const postCommentButton = css`
  position: absolute;
  top: 1.25rem;
  right: 1rem;
  font-size: 1.25rem;
  transform: translate(0, -50%);
  color: ${COLORS.GRAY40};
`;
