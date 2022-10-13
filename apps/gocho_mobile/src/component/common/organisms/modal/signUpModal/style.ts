import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  max-height: 85vh;
  min-height: 70vh;
  background-color: ${COLORS.GRAY100};
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
`;

export const closeButton = css`
  position: absolute;
  top: 0.875rem;
  right: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.BLUE_FIRST40};
`;

export const logoContainer = css`
  width: 7.5rem;
  height: 1rem;
  position: relative;
  margin-bottom: 1rem;
`;

export const desc = css`
  color: ${COLORS.BLUE_FIRST40};
  font-size: 0.875rem;
  font-weight: 400;
`;

export const formCSS = css`
  width: 100%;
`;

export const formArr = css`
  margin-top: 2.5rem;

  > li {
    margin-bottom: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    :last-of-type {
      margin: 0;
    }
  }
`;

export const bottomDesc = css`
  margin-top: 1rem;
  font-size: 0.875rem;
  text-align: center;
  color: ${COLORS.GRAY60};
  line-height: 2;
  font-weight: 400;
  word-break: break-all;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
  font-weight: 500;
  display: inline-block;
`;

export const sideErrorMsg = css`
  color: ${COLORS.ERROR_RED30};
  font-size: 0.875rem;
  height: 1rem;
  text-align: center;
  white-space: nowrap;
  font-weight: 400;
  display: block;
  margin: 1rem 0;
`;
