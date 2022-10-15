import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: absolute;
  z-index: 50;
  left: 50%;
  top: 50%;
  width: 22rem;
  transform: translate(-50%, -50%);
  height: auto;
  padding: 2rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const logoContainer = css`
  width: 7.5rem;
  height: 1rem;
  position: relative;
  margin-bottom: 1rem;
`;

export const desc = css`
  color: ${COLORS.BLUE_FIRST40};
  font-size: 1rem;
  font-weight: 400;
`;

export const formCSS = css`
  width: 100%;
`;

export const formArr = css`
  margin-top: 2.5rem;

  > li {
    width: 80%;
    margin: auto;
    margin-bottom: 1.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const sideErrorMsg = css`
  color: ${COLORS.ERROR_RED30};
  font-size: 0.75rem;
  height: 0.75rem;
  margin: 0.5rem 0 2rem 1.75rem;
  white-space: nowrap;
  font-weight: 400;
  display: block;
`;

export const closeBtn = css`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
`;
