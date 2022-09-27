import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const popupBackground = css`
  position: fixed;
  cursor: default;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: ${COLORS.GRAY10};
  opacity: 0.7;
`;

export const bottomPopup = css`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem 1.5rem 0 0;
  z-index: 50;
`;
