import { css } from "@emotion/react";

import { shorten } from "shared-style/common";
import { COLOR } from "shared-style/color";

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
    border-bottom: 1px solid ${COLOR.GRAY100};
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
      color: ${COLOR.GRAY900};
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
    color: ${COLOR.GRAY900};
    word-break: keep-all;
    text-align: center;
  `,

  flexBox: css`
    display: flex;
    justify-content: space-between;
  `,

  applyButton: css`
    ${defaultButton};
    color: ${COLOR.BLUE300};
    background-color: ${COLOR.GRAY50};
    border: 1px solid ${COLOR.GRAY100};
  `,

  editButton: css`
    ${defaultButton};
    color: ${COLOR.GRAY900};
    background-color: ${COLOR.YELLOW100};
  `,

  deleteButton: css`
    ${defaultButton};
    color: ${COLOR.WHITE};
    background-color: ${COLOR.RED300};
  `,

  endJobButton: css`
    ${defaultButton};
    color: ${COLOR.GRAY900};
    background-color: ${COLOR.GRAY50};
    border: 1px solid ${COLOR.GRAY100};
  `,
};
