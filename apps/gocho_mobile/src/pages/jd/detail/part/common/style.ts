import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

// detail 공용 스타일

export const container = css`
  margin-top: 2rem;

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const containerTitle = css`
  color: ${COLORS.GRAY10};
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

export const flexBox = css`
  display: flex;
  align-items: stretch;
  margin-bottom: 1.5rem;

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const subTitle = css`
  background-color: ${COLORS.GRAY90};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: ${COLORS.GRAY40};
  text-align: center;
  word-break: keep-all;
  line-height: 1.5;
  font-weight: 400;
  width: 4.5rem;
  min-height: 2.5rem;
  margin-right: 1rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export const desc = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.875rem;
  line-height: 1.4;
  font-weight: 400;
  word-break: keep-all;
  color: ${COLORS.GRAY10};
  width: 70%;
  gap: 0.25rem 0;
`;

export const restPoint = css`
  word-break: keep-all;
  display: inline-block;
  ::after {
    content: ", ";
  }

  :last-of-type {
    ::after {
      content: "";
    }
  }
`;
