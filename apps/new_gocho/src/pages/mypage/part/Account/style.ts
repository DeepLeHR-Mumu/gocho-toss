import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,

  contentWrapper: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  profileBox: css`
    position: relative;
    gap: 2rem;
  `,

  uploadBox: css`
    position: absolute;
    left: 5.25rem;
    top: 5.25rem;
    background-color: orange;
    border-radius: 2rem;
    width: 2.25rem;
    height: 2.25rem;
  `,

  infoBox: css`
    display: flex;
    width: 41.5rem;
    flex-direction: column;
    gap: 1rem;
  `,

  nickNameBox: css`
    display: flex;
    justify-content: space-between;

    p {
      padding: 1rem 0;
      width: 8.25rem;
      line-height: 1rem;
      font-weight: 500;
      color: ${NEWCOLORS.BLUEGRAY400};
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

    p {
      padding: 1rem 0;
      width: 8.25rem;
      line-height: 1rem;
      font-weight: 500;
      color: ${NEWCOLORS.BLUEGRAY400};
    }

    // 이메일
    span {
      padding-top: 0.8rem;
      font-weight: 500;
    }
  `,

  reviseButton: css`
    padding: 0.5rem 0.38rem;
    width: 2.6rem;
    height: 1.9rem;
    font-size: 0.875rem;
    border-radius: 1.5rem;
  `,

  pwdButton: css`
    padding: 1rem 0.75rem;
    width: 8.75rem;
    height: 2.75rem;
    font-size: 0.875rem;
    border-radius: 0.5rem;
    margin: 0.25rem 0;
  `,

  // TODO: 저장하기 버튼 여쭤 보기
  submitBox: css`
    position: absolute;
    left: 50%;
    height: 1px;
    > button {
      position: relative;
      top: 5rem;
    }
  `,
};
