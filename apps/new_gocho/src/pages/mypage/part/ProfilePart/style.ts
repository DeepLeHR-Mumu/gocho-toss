import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  `,

  contentWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    margin-bottom: 1.5rem;
  `,

  profileBox: css`
    position: relative;
    gap: 2rem;
  `,

  profileWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  `,

  basicProfileButton: css`
    color: ${COLOR.GRAY600};
    font: ${NEWTEXTS.TITLE5_M1620};
  `,

  upload: css`
    display: none;
  `,

  uploadIcon: css`
    width: 1.25rem;
    height: 1.25rem;
  `,

  uploadBox: css`
    position: absolute;
    left: 5.375rem;
    top: 5.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${COLOR.GRAY100};
    border-radius: 2rem;
    width: 2.25rem;
    height: 2.25rem;
  `,

  nickNameBox: css`
    display: flex;
    justify-content: space-between;

    p {
      padding: 1rem 0;
      width: 8.25rem;
      line-height: 1rem;
      font-weight: 500;
      color: ${COLOR.GRAY600};
    }

    span {
      padding-top: 0.9rem;
      width: 31rem;
      line-height: 1.25rem;
      font-weight: 700;
    }

    button {
      margin-top: 0.7rem;
      font-weight: 400;
    }
  `,

  inputBox: css`
    display: flex;
    justify-content: center;
    width: 30rem;
    text-align: center;
  `,

  formBox: css`
    display: flex;
    gap: 3rem;

    button {
      padding: 1rem 0.75rem;
      height: 2.75rem;
      font-size: 0.875rem;
      border-radius: 1.5rem;
      margin: 0.25rem 0;
    }
  `,

  submitBox: css`
    margin: auto 0;
  `,
};
