import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    margin: 2rem 0;
    padding: 1rem;
    background-color: ${COLORS.BLUE_SECOND90};
  `,

  inputBox: css`
    border-radius: 0.5rem;
    border: 1px solid ${COLORS.GRAY70};
    background-color: ${COLORS.GRAY100};
    height: 2rem;
    padding: 0.25rem 0.5rem;
    margin-right: 1rem;
  `,

  inputContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1.5rem;
  `,

  inputTitle: css`
    color: ${COLORS.GRAY30};
    margin-right: 1rem;
  `,

  imageInput: css`
    display: flex;
    align-items: center;
    height: 13rem;
  `,

  imageUploadLabel: css`
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    background-color: ${COLORS.BLUE_NEON50};
    color: ${COLORS.GRAY100};
    margin: 0 1rem;
    border: 2px solid ${COLORS.GRAY10};
  `,

  imageUploadInput: css`
    display: none;
  `,

  bannerPreviewContainer: css`
    width: 30.5rem;
    height: 12.5rem;
    margin: 0 1rem;
    position: relative;

    > img {
      object-fit: contain;
    }
  `,

  submitBannerButton: css`
    font-size: 1.5rem;
    font-weight: 500;
    margin: 2.5rem auto 0;
    padding: 0.25rem 3rem;
    border: 2px solid ${COLORS.GRAY10};
    background-color: ${COLORS.BLUE_NEON40};
    color: ${COLORS.GRAY100};
  `,

  errorMsgBox: css`
    color: ${COLORS.BLUE_FIRST40};
    font-weight: 500;
    text-align: center;
    margin: 1rem 0;
  `,
};
