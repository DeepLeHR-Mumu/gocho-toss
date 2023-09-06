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
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  `,

  profileBox: css`
    position: relative;
    gap: 2rem;
  `,

  infoBox: css`
    display: flex;
    width: 41.5rem;
    flex-direction: column;
    gap: 1rem;
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

  pwdButton: css`
    padding: 1rem 0.75rem;
    width: 8.75rem;
    height: 2.75rem;
    border-radius: 0.5rem;
    margin: 0.25rem 0;
    font-size: 0.875rem;
  `,

  // TODO: 저장하기 버튼 여쭤 보기
  submitBox: css`
    margin-bottom: 2rem;
  `,
};
