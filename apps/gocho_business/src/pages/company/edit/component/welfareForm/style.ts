import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    width: 20rem;
  `,
  title: (isMine: boolean) => css`
    font-size: 1rem;
    font-weight: 400;
    color: ${isMine ? COLORS.GRAY60 : COLORS.GRAY10};
    margin-bottom: 0.5rem;
    display: block;
  `,
  hidden: css`
    display: none;
  `,
  writeBox: css`
    position: relative;
    margin-bottom: 0.25rem;
  `,
  enterButton: (isMine: boolean) => css`
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translate(0, -50%);
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${isMine ? COLORS.GRAY60 : COLORS.GRAY10};
  `,
  inputLine: (isMine: boolean) => css`
    border: 1px solid ${isMine ? COLORS.GRAY60 : COLORS.GRAY10};
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    border-radius: 0.3125rem;
    font-size: 1rem;
    width: 100%;
    font-weight: 400;

    ::placeholder {
      color: ${isMine ? COLORS.GRAY60 : COLORS.GRAY30};
    }
  `,
  container: (isMine: boolean) => css`
    border: 1px solid ${isMine ? COLORS.GRAY65 : COLORS.GRAY10};
  `,
  desc: (isMine: boolean) => css`
    padding: 0.5rem 1rem;
    background-color: ${COLORS.GRAY95};
    font-size: 0.875rem;
    color: ${isMine ? COLORS.GRAY60 : COLORS.GRAY30};
    font-weight: 400;
    height: 3.75rem;
  `,
  listBox: css`
    height: 21.25rem;
    overflow: hidden;
    overflow-y: scroll;
    background-color: ${COLORS.GRAY90};
  `,
  buttonLine: css`
    align-items: center;
    width: 100%;
    justify-content: space-between;
    display: flex;
    border-bottom: 1px solid ${COLORS.GRAY70};
    background-color: ${COLORS.GRAY100};
  `,
  noData: (isMine: boolean) => css`
    font-size: 1rem;
    height: 21.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${isMine ? COLORS.GRAY60 : COLORS.GRAY30};
    background-color: ${COLORS.GRAY90};
  `,
  valueDesc: (isMine: boolean) => css`
    font-size: 1rem;
    color: ${isMine ? COLORS.GRAY60 : COLORS.GRAY10};
    text-align: left;
    width: 100%;
    overflow-wrap: anywhere;
    width: 80%;
    padding: 0.75rem 1rem;
  `,
  deleteButton: (isMine: boolean) => css`
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
    background-color: ${COLORS.GRAY80};
    border-radius: 50%;
    color: ${isMine ? COLORS.GRAY60 : COLORS.GRAY10};
  `,
};
