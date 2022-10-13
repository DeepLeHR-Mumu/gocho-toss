import { css, SerializedStyles } from "@emotion/react";

interface changeBannerColor {
  (bgColor: string): SerializedStyles;
}

export const changeBannerColor: changeBannerColor = (bgColor) => {
  return css`
    width: 30%;
    background-color: ${bgColor};
    margin-bottom: 1rem;
    border-radius: 1rem;
    padding: 1.375rem;
    height: 10rem;
  `;
};

export const linkCSS = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const titleCSS = css`
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
