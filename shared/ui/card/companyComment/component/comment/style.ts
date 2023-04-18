import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const container = css`
  margin-bottom: 0.5rem;
`;

export const writerContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const usernameCSS = css`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
`;

export const dateCSS = css`
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 1rem;
  color: ${COLORS.GRAY40};
`;

export const bodyContainer = (isSameUserNickname: boolean) => css`
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-bottom: 2rem;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-left: 1rem solid ${isSameUserNickname ? COLORS.BLUE_SECOND70 : COLORS.GRAY100};
    border-top: 1rem solid transparent;
  }
`;

interface BodyWrapperDef {
  (isSameUserNickname: boolean): SerializedStyles;
}

export const bodyWrapper: BodyWrapperDef = (isSameUserNickname) => css`
  width: 70%;
  margin: 1rem 1rem 0 0;
  padding: 1rem;
  background-color: ${isSameUserNickname ? COLORS.BLUE_SECOND70 : COLORS.GRAY100};
  border-radius: 0 1rem 1rem 1rem;
`;

export const bodyCSS = css`
  word-break: break-all;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  line-height: 1.6;
`;

export const reactionContainer = css`
  > button {
    margin-top: 0.5rem;
  }
`;
