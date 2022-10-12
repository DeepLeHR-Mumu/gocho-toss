import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const popupBackground = css`
  position: absolute;
  cursor: default;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: ${COLORS.GRAY10};
  opacity: 0.7;
`;

export const bottomPopup = css`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem 1.5rem 0 0;
  z-index: 20;
  padding: 3rem;
  transform: translateY(100%);
  animation: showUp 0.5s forwards ease;

  @keyframes showUp {
    0% {
      opacity: 0.2;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
