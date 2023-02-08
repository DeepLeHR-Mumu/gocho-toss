import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: (isLogin: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    height: 4rem;
    width: 100%;
    background-color: ${isLogin ? COLORS.GRAY100 : COLORS.GRAY10};
    border-bottom: 1px solid ${COLORS.GRAY80};
  `,
  container: css`
    display: flex;
    align-items: center;
  `,
  logo: css`
    height: 2rem;
    width: 2rem;
    position: relative;
    margin-right: 1rem;
  `,
  title: css`
    display: block;
    width: 9.375rem;
    height: 1.25rem;
    position: relative;
  `,
  linkButton: css`
    background-color: ${COLORS.GRAY100};
    border: 1px solid ${COLORS.BLUE_FIRST40};
    color: ${COLORS.BLUE_FIRST40};
    padding: 0.875rem 1rem;
    border-radius: 0.375rem;
    line-height: 1;
  `,
};
