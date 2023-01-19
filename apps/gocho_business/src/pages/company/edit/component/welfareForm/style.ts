import { css } from "@emotion/react";

import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    width: 20rem;
  `,
  title: css`
    font-size: 1rem;
    font-weight: 400;
    color: ${COLORS.GRAY10};
  `,
  hidden: css`
    display: none;
  `,
  writeBox: css`
    position: relative;
    margin-bottom: 0.25rem;
  `,
  enterButton: css`
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translate(0, -50%);
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.GRAY10};
  `,
  inputLine: css`
    border: 1px solid ${COLORS.GRAY10};
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    border-radius: 0.3125rem;
    font-size: 1rem;
    width: 100%;
    font-weight: 400;

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,
  container: css`
    border: 1px solid ${COLORS.GRAY10};
  `,
  desc: css`
    padding: 0.5rem 1rem;
    background-color: ${COLORS.GRAY95};
    font-size: 0.875rem;
    color: ${COLORS.GRAY30};
    font-weight: 400;
    height: 3.75rem;
    ${shorten(2)};
  `,
  listBox: css`
    height: 21.25rem;
    overflow: hidden;
    overflow-y: scroll;
    background-color: ${COLORS.GRAY90};
    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid ${COLORS.GRAY70};
      background-color: ${COLORS.GRAY100};
    }
  `,
  noData: css`
    font-size: 1rem;
    height: 21.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.GRAY10};
  `,
  valueDesc: css`
    font-size: 1rem;
    font-weight: 400;
    width: 80%;
    color: ${COLORS.GRAY10};
    ${shorten()};
  `,
  deleteButton: css`
    width: 2rem;
    height: 2rem;
    background-color: ${COLORS.GRAY80};
    border-radius: 50%;
    color: ${COLORS.GRAY10};
  `,
};
