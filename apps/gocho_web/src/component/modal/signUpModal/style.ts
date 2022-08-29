import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const wrapper = css`
  position: absolute;
  z-index: 50;
  left: 50%;
  top: 50%;
  width: 22rem;
  transform: translate(-50%, -80%);
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
  }
`;

export const closeBtn = css`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
`;
