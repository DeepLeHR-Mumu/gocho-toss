import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.GRAY90};
  padding: 5rem 0;
  text-align: center;
  position: relative;
`;

export const title = css`
  text-align: center;
  line-height: 1.6;
  word-break: keep-all;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.GRAY10};
  margin-bottom: 2.5rem;
  display: block;
`;

export const iconCSS = css`
  display: block;
  font-size: 3rem;
`;

export const desc = css`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  margin-bottom: 3rem;
`;

export const imgBox = css`
  width: 100%;
  height: 20rem;
  margin: auto;
  margin-top: 1.5rem;
  position: relative;
  > img {
    object-fit: contain;
  }
`;


export const lastImgBox = css`
  width: 100%;
  height: 60rem;
  margin: auto;
  margin-top: 1.5rem;
  position: relative;
  > img {
    object-fit: contain;
  }
`;