import { css } from "@emotion/react";

export const cssObj = {
  gapContainer: css`
    display: flex;
    flex-direction: column;
    gap: 2rem 0;
  `,
  container: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexContainer: css`
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
    margin-right: 0.5rem;
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
  labelContainer: css`
    display: flex;
    gap: 0 0.5rem;
    margin-right: 1rem;
  `,

  etcInfoBox: css`
    border: 1px solid #000000;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
  `,
  trueFalseBox: css`
    margin-right: 0.5rem;
  `,
};
