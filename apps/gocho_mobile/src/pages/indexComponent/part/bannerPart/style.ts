import { css, SerializedStyles } from "@emotion/react";

export const wrapper = css`
  padding: 2rem 0;
`;

export const bannerArrCSS = css`
  display: flex;
  justify-content: space-between;
`;

interface changeBannerColor {
  (bgColor: string): SerializedStyles;
}

export const changeBannerColor: changeBannerColor = (bgColor) => {
  return css`
    width: 30%;
    background-color: ${bgColor};
    border-radius: 1rem;
    padding: 1.375rem;
  `;
};

export const linkCSS = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const titleCSS = css`
  display: block;
  word-break: keep-all;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #1f1f1f;
  font-weight: 600;
  padding-bottom: 0.5rem;
`;

export const descCSS = css`
  font-size: 0.75rem;
  word-break: keep-all;
  color: #5f5f6a;
  line-height: 1.5;
`;

export const iconBox = css`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
`;
