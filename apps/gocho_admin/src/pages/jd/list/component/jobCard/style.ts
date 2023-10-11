import { css } from "@emotion/react";

import { shorten } from "shared-style/common";
import { COLORS, NEWCOLORS } from "shared-style/color";

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
    border-bottom: 1px solid ${COLORS.GRAY80};
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
      color: ${COLORS.GRAY10};
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
    color: ${COLORS.GRAY10};
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
    color: ${COLORS.BLUE_FIRST40};
    background-color: ${COLORS.GRAY90};
    border: 1px solid ${COLORS.GRAY80};
  `,

  jdEditButton: css`
    ${defaultButton};
    background-color: ${NEWCOLORS.BLUE300};
    color: ${NEWCOLORS.WHITE};
  `,
};
