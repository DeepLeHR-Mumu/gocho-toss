import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: (isLogin: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem 1rem 2rem;
    height: 4rem;
    width: 100%;
    background-color: ${isLogin ? COLORS.GRAY100 : COLORS.GRAY10};
    border-bottom: 1px solid #cccccc;
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
  title: (isLogin: boolean) => css`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${isLogin ? COLORS.GRAY10 : COLORS.GRAY100};
  `,
  logoutButton: css`
    padding: 0.75rem 1rem;
    border: 1px solid #000000;
  `,
  signUpButton: css`
    padding: 0.75rem 1rem;
    border: 1px solid #000000;
  `,
};
