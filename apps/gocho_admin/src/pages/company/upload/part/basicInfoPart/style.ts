import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const sectionContainer = css`
  margin-bottom: 2rem;
`;

export const sectionTitle = css`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

export const inputContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const inputTitle = css`
  color: ${COLOR.GRAY600};
  margin-right: 1rem;
`;

export const inputBox = css`
  width: 50%;
  border-radius: 0.5rem;
  border: 1px solid ${COLOR.GRAY300};
  background-color: ${COLOR.WHITE};
  height: 2rem;
  text-align: left;
  display: block;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
`;

export const addressButton = css`
  background-color: ${COLOR.GRAY900};
  color: ${COLOR.WHITE};
  height: 2rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
`;

export const logoUploadLabel = css`
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  margin: 0 1rem;
  background-color: ${COLOR.BLUE250};
  color: ${COLOR.WHITE};
  border: 2px solid ${COLOR.GRAY900};
`;

export const imageUploadInput = css`
  display: none;
`;

export const imageInput = css`
  display: flex;
  align-items: center;
  height: 6rem;
`;

export const logoPreviewContainer = css`
  width: 6rem;
  height: 6rem;
  position: relative;

  > img {
    object-fit: contain;
  }
`;

export const selectBox = css`
  background-color: ${COLOR.WHITE};
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
`;

export const inputLabel = css`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const booleanInputBox = (disabled: boolean) => css`
  width: 50%;
  background-color: ${disabled ? COLOR.GRAY300 : COLOR.WHITE};
  border-radius: 0.5rem;
  border: 1px solid ${COLOR.GRAY300};
  height: 2rem;
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;
`;

export const checkboxText = css`
  margin-right: 0.5rem;
`;
