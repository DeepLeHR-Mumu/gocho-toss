import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

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
  position: relative;
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

export const optionList = (isOpen: boolean) => css`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 15rem;
  border: 1px solid ${COLOR.GRAY200};
  border-radius: 0.5rem;
  max-height: ${isOpen ? `10rem` : 0};
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 20;
  background-color: ${COLOR.WHITE};
  border: ${isOpen ? `1px solid ${COLOR.GRAY600}` : 0};

  ::-webkit-scrollbar {
    padding: 0.25rem 0;
    width: 0.5rem;
    background-color: ${COLOR.WHITE};
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background-color: ${COLOR.GRAY400};
  }
`;

export const option = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 0.25rem;
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  background-color: ${COLOR.WHITE};
  transition: 0.1s;
  ${TEXT.TITLE5_M1620};

  :hover {
    background-color: ${COLOR.GRAY100};
  }
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
