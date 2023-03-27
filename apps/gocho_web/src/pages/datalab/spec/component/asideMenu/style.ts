import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const partContainer = css`
  background-color: ${COLORS.GRAY100};
  padding: 6rem 0;
`;

interface WrapperDef {
  (isFix: boolean): SerializedStyles;
}

export const wrapper: WrapperDef = (isFix) => {
  const defaultCSS = css`
    width: 5rem;
  `;
  if (isFix) {
    return css`
      ${defaultCSS};
      position: sticky;
      left: 0;
      top: 0;
      padding-top: 7.5rem;
    `;
  }
  return css`
    ${defaultCSS};
  `;
};

export const asideProfile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  width: 100%;
  background-color: ${COLORS.GRAY90};
  border-radius: 1rem;
  color: ${COLORS.GRAY40};
  padding: 1rem 0.625rem;
  word-break: break-all;
  text-align: center;
`;

export const loginNickname = css`
  margin-top: 0.5rem;
  color: ${COLORS.GRAY10};
  word-break: keep-all;
  font-size: 0.75rem;
  line-height: 1.6;
  font-weight: 500;
  width: 100%;
  ${shorten()}
`;

export const asideLink = css`
  white-space: nowrap;
  font-size: 0.75rem;
  display: flex;
  line-height: 1.8;
  align-items: center;
  justify-content: center;
  min-height: 3.5rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 1rem;
  font-weight: 500;
  color: ${COLORS.GRAY40};
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  word-break: keep-all;
  text-align: center;
`;

export const pointLink = css`
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
`;

export const activeLink = css`
  background-color: ${COLORS.BLUE_SECOND70};
  color: ${COLORS.BLUE_NEON40};
`;
