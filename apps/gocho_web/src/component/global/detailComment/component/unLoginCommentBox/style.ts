import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const commentContainerBlur = css`
  background-color: ${COLORS.GRAY90};
  min-height: 13rem;
  max-height: 15rem;
  overflow: hidden;
  overflow-y: hidden;
  filter: blur(3px);
  padding: 1rem;
`;

export const commentArrCSS = css``;

export const commentHeader = css`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
`;

export const nicknameCSS = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
`;

export const commentBody = css`
  display: flex;
  align-items: flex-end;
`;

export const commentBox = css`
  background-color: ${COLORS.GRAY100};
  padding: 0.75rem;
  box-sizing: border-box;
  border-radius: 0 1rem 1rem 1rem;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 0;
    border-left: 1rem solid ${COLORS.GRAY100};
    border-top: 1rem solid transparent;
  }
`;

export const commentTypeCSS = css`
  color: ${COLORS.GRAY30};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

export const commentDesc = css`
  color: ${COLORS.GRAY10};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
`;

//  commentWrite

export const loginBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.125rem 0;
  text-align: center;
`;

export const loginDesc = css`
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 2;
`;

export const loginButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;
