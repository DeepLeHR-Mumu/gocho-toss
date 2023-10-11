import { css } from "@emotion/react";

import { shorten } from "shared-style/common";
import { COLOR } from "shared-style/color";

const defaultButton = css`
  font-size: 0.8125rem;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
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
    grid-template-columns: 10% 35% 10% 15% 30%;
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

  centerDesc: css`
    text-align: center;
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

  companyName: css`
    font-weight: 500;
    display: block;
    margin-bottom: 0.25rem;
    ${shorten()};
  `,

  startDateCSS: css`
    display: block;
    font-size: 0.875rem;
    ::before {
      content: "시작일 : ";
    }
  `,

  endDateCSS: css`
    font-size: 0.875rem;
    ::before {
      content: "마감일 : ";
    }
    display: block;
  `,

  applyButton: css`
    ${defaultButton};
    color: ${COLOR.BLUE300};
    background-color: ${COLOR.GRAY50};
    border: 1px solid ${COLOR.GRAY100};
  `,

  jdEditButton: css`
    ${defaultButton};
    background-color: ${COLOR.BLUE300};
    color: ${COLOR.WHITE};
  `,
};
