import { css } from "@emotion/react";

export const cssObj = {
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  box: css`
    width: 47%;
    display: flex;
    flex-direction: column;
  `,
  infoText: css`
    font-weight: 700;
  `,

  infoContainer: css`
    display: flex;
    align-items: center;
  `,

  iconBox: css`
    font-size: 1.5rem;
    margin-right: 1rem;
  `,
  totalWorkerNumber: css`
    color: #cccccc;
    font-weight: 400;
  `,

  manWomanContainer: css`
    display: flex;
    align-items: center;
  `,
  manWomanInput: css`
    width: 5rem;
    border: 1px solid #000000;
    padding: 0.5rem 1rem;
  `,
  womanIconBox: css`
    font-size: 1.5rem;
    margin-right: 0.5rem;
    margin-left: 1rem;
  `,
  trueFalseContainer: css`
    display: flex;
  `,
  trueFalseBox: css`
    margin-right: 0.5rem;
  `,
};
