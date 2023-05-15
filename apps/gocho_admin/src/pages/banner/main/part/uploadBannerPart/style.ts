import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const sectionContainer = css`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${COLORS.BLUE_SECOND90};
`;

export const inputBox = (isSmall: boolean) => css`
  width: ${isSmall ? "6rem" : "25%"};
  border-radius: 0.5rem;
  border: 1px solid ${COLORS.GRAY70};
  background-color: ${COLORS.GRAY100};
  height: 2rem;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
`;

export const inputContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1.5rem;
`;

export const inputTitle = css`
  color: ${COLORS.GRAY30};
  margin-right: 1rem;
`;

export const imageInput = css`
  display: flex;
  align-items: center;
  height: 13rem;
`;

export const imageUploadLabel = css`
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: ${COLORS.BLUE_NEON50};
  color: ${COLORS.GRAY100};
  margin: 0 1rem;
  border: 2px solid ${COLORS.GRAY10};
`;

export const imageUploadInput = css`
  display: none;
`;

export const bannerPreviewContainer = css`
  width: 30.5rem;
  height: 12.5rem;
  margin: 0 1rem;
  position: relative;

  > img {
    object-fit: contain;
  }
`;

export const colorPickerButton = css`
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: ${COLORS.BLUE_NEON30};
  color: ${COLORS.GRAY100};
  margin-right: 0.5rem;
  border: 2px solid ${COLORS.GRAY10};
`;

export const colorPicker = css`
  opacity: 0;
  height: 1px;
`;

export const submitBannerButton = css`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 2.5rem auto 0;
  padding: 0.25rem 3rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
`;
