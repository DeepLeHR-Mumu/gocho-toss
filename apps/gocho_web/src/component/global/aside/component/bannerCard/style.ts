import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "shared-style/color";

interface changeBannerColor {
  (bgColor: string): SerializedStyles;
}

export const changeBannerColor: changeBannerColor = (bgColor) => {
  return css`
    background-color: ${bgColor};
    margin-bottom: 1rem;
    border-radius: 1rem;
    box-shadow: 15px 15px 20px rgba(221, 221, 221, 0.34);
  `;
};

export const linkCSS = css`
  min-height: 9rem;
  padding: 1.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const titleCSS = css`
  font-size: 0.875rem;
  line-height: 1.6;
  word-break: keep-all;
  color: ${COLORS.GRAY10};
  font-weight: 600;
  padding-bottom: 0.5rem;
`;

export const descCSS = css`
  font-size: 0.75rem;
  word-break: keep-all;
  color: ${COLORS.GRAY30};
  line-height: 1.5;
  margin-bottom: 0.875rem;
`;

export const iconBox = css`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  > img {
    object-fit: contain;
  }
`;
