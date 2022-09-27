import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  padding: 20rem 0 0;
  text-align: center;
`;

export const titleBox = css`
  position: relative;
`;

export const title = css`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${COLORS.GRAY10};
  margin-bottom: 2.5rem;
  display: block;
`;

export const desc = css`
  font-size: 1rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
`;

export const pointImgBox1 = css`
  width: 1rem;
  height: 1rem;
  position: absolute;
  bottom: 20%;
  right: 20%;
`;

export const pointImgBox2 = css`
  width: 2rem;
  height: 2rem;
  position: absolute;
  bottom: 0;
  left: 20%;
`;

export const listCSS = css`
  display: flex;
  justify-content: space-between;
  margin: 9.375rem 0 5.625rem;

  > li {
    position: relative;
    width: 30%;
    height: 13.5rem;
    background-color: ${COLORS.GRAY60};
  }
`;

export const subDesc = css`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8;
  padding-bottom: 8.125rem;
`;

export const logoBox = css`
  width: 11.5rem;
  height: 1.5rem;
  position: relative;
  margin: 0 auto 1.25rem;
`;

export const buttonBox = css`
  width: 100%;
  max-width: 12rem;
  margin: auto;
  margin-bottom: 1rem;
`;
