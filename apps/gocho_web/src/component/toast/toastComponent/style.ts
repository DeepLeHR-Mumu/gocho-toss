import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: rgba(43, 43, 43, 0.8);
  width: fit-content;
  padding: 1rem 3rem;
  position: fixed;
  z-index: 70;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  left: 50%;
  top: 80%;
  cursor: pointer;
  box-shadow: 0 0.3125rem 3rem rgba(0, 0, 0, 0.65);
  animation: upAndFadeOut 3s forwards cubic-bezier(0.69, 0, 0.23, 1);
  transform: translate(-50%, -50%);

  @keyframes upAndFadeOut {
    from {
      top: 120%;
    }
    20% {
      top: 79%;
    }
    30% {
      top: 80%;
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
