import { css, SerializedStyles } from "@emotion/react";

interface changeBannerColor {
  (bgColor: string): SerializedStyles;
}

export const changeBannerColor: changeBannerColor = (bgColor) => {
  return css`
    background-color: ${bgColor};
    margin-bottom: 1rem;
    border-radius: 1rem 0 0 0;
    /* box-shadow: 15px 15px 20px rgba(221, 221, 221, 0.34); */
  `;
};

export const linkCSS = css`
  /* min-height: 9rem; */
  /* padding: 1.25rem; */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const titleCSS = css`
  white-space: nowrap;
  font-size: 0.875rem;
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
