import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const formCSS = css`
  width: 100%;
`;

export const writeCommentWrapper = css`
  position: relative;
  margin-top: 0.5rem;
  width: 100%;
`;

export const userProfileImage = css`
  border-radius: 50%;
  overflow: hidden;
  width: 2rem;
  height: 2rem;
  position: absolute;
  z-index: 10;
  margin: 0.25rem;
`;

export const writeCommentBox = css`
  width: 100%;
  height: 2.5rem;
  font-family: Noto Sans KR, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  padding: 0.5rem 3rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  color: ${COLORS.GRAY30};
  vertical-align: middle;
  border: none;
  resize: none;
  outline: none;
  box-shadow: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

export const postCommentButton = css`
  position: absolute;
  top: 40%;
  right: 1rem;
  transform: translate(0, -50%);
  color: ${COLORS.GRAY40};
`;
