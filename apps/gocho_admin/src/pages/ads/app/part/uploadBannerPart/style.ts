import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    margin: 2rem 0;
    padding: 1rem;
    background-color: ${COLOR.BLUE50};
  `,

  inputBox: css`
    border-radius: 0.5rem;
    border: 1px solid ${COLOR.GRAY300};
    background-color: ${COLOR.WHITE};
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
    color: ${COLOR.GRAY600};
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
    background-color: ${COLOR.BLUE250};
    color: ${COLOR.WHITE};
    margin: 0 1rem;
    border: 2px solid ${COLOR.GRAY900};
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
    border: 2px solid ${COLOR.GRAY900};
    background-color: ${COLOR.BLUE300};
    color: ${COLOR.WHITE};
  `,

  errorMsgBox: css`
    color: ${COLOR.BLUE300};
    font-weight: 500;
    text-align: center;
    margin: 1rem 0;
  `,
};
