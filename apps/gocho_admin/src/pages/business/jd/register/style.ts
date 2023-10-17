import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  buttonContainer: css`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    margin-top: 2rem;
  `,

  acceptButton: css`
    font-weight: 500;
    border: 2px solid ${COLOR.GRAY900};
    padding: 0.25rem 1rem;
    background-color: ${COLOR.BLUE300};
    color: ${COLOR.WHITE};
  `,

  rejectForm: css`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  rejectReasonBox: css`
    font-family: Noto Sans KR, sans-serif;
    font-size: 16px;
    height: 5rem;
    width: 80%;
    border-radius: 0.5rem;
    border: 1px solid ${COLOR.GRAY300};
    padding: 0.25rem 0.5rem;
    margin-bottom: 1rem;
  `,

  rejectButton: css`
    font-weight: 500;
    border: 2px solid ${COLOR.GRAY900};
    padding: 0.25rem 1rem;
    background-color: #b32100;
    color: ${COLOR.WHITE};
  `,

  checkMessage: css`
    width: fit-content;
    margin: 1rem auto 0;
    color: ${COLOR.BLUE300};
    font-weight: 700;
  `,
};
