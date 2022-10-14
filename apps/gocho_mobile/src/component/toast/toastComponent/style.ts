import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: rgba(43, 43, 43, 0.8);
  width: fit-content;
  padding: 1rem 3rem;
  position: fixed;
  z-index: 200;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-align: center;
  left: 50%;
  top: 30%;
  cursor: pointer;
  box-shadow: 0 0.3125rem 3rem rgba(0, 0, 0, 0.65);
  animation: upAndFadeOut 2.5s forwards ease;
  transform: translate(-50%, -50%);

  @keyframes upAndFadeOut {
    from {
      top: 0%;
    }
    30% {
      top: 30%;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const descCSS = css`
  color: ${COLORS.GRAY100};
  font-size: 1rem;
  font-weight: 400;
`;
