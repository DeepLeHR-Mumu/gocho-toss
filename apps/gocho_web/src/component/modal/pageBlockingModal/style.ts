import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: fixed;
  z-index: 50;
  padding: 1.5rem;
  background-color: ${COLORS.GRAY100};
  width: 100%;
  max-width: 18.75rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
`;

export const title = css`
  font-size: 1rem;
  font-weight: 400;
  color: ${COLORS.BLUE_FIRST40};
  margin-bottom: 1rem;
`;

export const descCSS = css`
  color: ${COLORS.GRAY30};
  word-break: keep-all;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const defaultButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 5.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
`;

export const noButton = css`
  ${defaultButton};
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.BLUE_FIRST40};
  color: ${COLORS.BLUE_FIRST40};
`;

export const yesButton = css`
  ${defaultButton};
  margin-left: 0.5rem;
  background-color: ${COLORS.BLUE_FIRST40};
  color: ${COLORS.GRAY100};
`;
