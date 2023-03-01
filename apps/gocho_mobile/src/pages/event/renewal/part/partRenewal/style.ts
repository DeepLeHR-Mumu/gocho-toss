import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  padding: 5rem 0 0;
  text-align: center;
`;

export const titleBox = css`
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
  white-space: nowrap;
  display: block;
`;

export const iconCSS = css`
  display: block;
  font-size: 3rem;
`;

export const desc = css`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  word-break: keep-all;
  color: ${COLORS.GRAY10};
`;

export const pointImgBox1 = css`
  width: 1rem;
  height: 1rem;
  position: absolute;
  bottom: 20%;
  right: 20%;
  > img {
    object-fit: cover;
  }
`;

export const pointImgBox2 = css`
  width: 2rem;
  height: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  > img {
    object-fit: cover;
  }
`;

export const listCSS = css`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 9.375rem 0 5.625rem;

  > li {
    width: 100%;
    height: 26rem;

    margin-bottom: 1rem;
    position: relative;
    > img {
      object-fit: cover;
    }
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const subDesc = css`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8;
  padding-bottom: 8.125rem;
  word-break: keep-all;
`;

export const logoBox = css`
  width: 11.5rem;
  height: 1.5rem;
  position: relative;
  margin: 0 auto 1.25rem;
  > img {
    object-fit: contain;
  }
`;

export const buttonBox = css`
  width: 100%;
  max-width: 12rem;
  margin: auto;
  margin-bottom: 1rem;
`;
