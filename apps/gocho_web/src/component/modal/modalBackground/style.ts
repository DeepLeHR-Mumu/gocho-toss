import { css } from "@emotion/react";

export const dimmed = css`
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
`;

export const homeLinkBackground = css`
  position: fixed;
  z-index: 30;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
