import { css } from "@emotion/react";

import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";

const defaultButton = css`
  padding: 0.25rem 0.5rem;
  font-size: 0.8125rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const cssObj = {
  wrapper: css`
    border-bottom: 1px solid ${COLORS.GRAY80};
    padding: 1rem 0;
  `,

  container: css`
    display: grid;
    grid-template-columns: 5% 10% 15% 30% 10% 30%;
    justify-content: space-between;
    align-items: center;

    > li {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.8;
      color: ${COLORS.GRAY10};
      padding: 0 1rem;
    }
  `,

  data: css`
    text-align: center;
  `,

  desc: css`
    text-align: center;
    ${shorten(2)};
  `,

  leftDesc: css`
    text-align: left;
    word-break: keep-all;
  `,

  taskBox: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  task: css`
    font-size: 0.75rem;
    color: ${COLORS.GRAY10};
    word-break: keep-all;
    text-align: center;
  `,

  flexBox: css`
    display: flex;
    justify-content: space-between;
  `,

  applyButton: css`
    ${defaultButton};
    color: ${COLORS.BLUE_FIRST40};
    background-color: ${COLORS.GRAY90};
    border: 1px solid ${COLORS.GRAY80};
  `,

  editButton: css`
    ${defaultButton};
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.ERROR_YELLOW50};
  `,

  deleteButton: css`
    ${defaultButton};
    color: ${COLORS.GRAY100};
    background-color: ${COLORS.ERROR_RED30};
  `,

  endJobButton: css`
    ${defaultButton};
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY90};
    border: 1px solid ${COLORS.GRAY80};
  `,
};
