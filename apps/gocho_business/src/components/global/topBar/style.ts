import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  headerWrapper: (isLogin: boolean) => css`
    display: ${isLogin ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    height: 4rem;
    width: 100%;
    background-color: ${COLORS.BLUE_FIRST40};
    border-bottom: 1px solid ${COLORS.GRAY80};
  `,

  headerContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 1200px;
  `,

  defaultMenuContainer: css`
    display: flex;
    align-items: center;
    flex-grow: 1;
  `,

  logo: css`
    display: block;
    width: 9.5rem;
    height: 1.25rem;
    position: relative;

    > img {
      object-fit: contain;
    }
  `,

  navWrapper: css`
    display: flex;
    margin-left: 1rem;
    gap: 1.25rem;
  `,

  navLink: (isActive: boolean) => css`
    position: relative;
    width: 4rem;
    height: 4rem;
    font-weight: ${isActive ? 700 : 500};
    font-style: normal;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${isActive ? `2px solid ${COLORS.GRAY100}` : "none"};
    color: ${COLORS.GRAY100};
    transition: color 0.2s ease;
  `,

  profileWrapper: css`
    position: relative;
    margin-right: 1.5rem;

    :last-of-type {
      margin-right: 0;
    }
  `,

  profileButton: css`
    display: flex;
    padding: 1rem 0;
    align-items: center;
    cursor: pointer;
    color: ${COLORS.GRAY100};
    font-weight: 700;
  `,

  toggleIcon: (isActive: boolean) => css`
    font-size: 1rem;
    font-weight: 700;
    margin-left: 0.5rem;
    color: ${COLORS.GRAY100};
    transition: all 0.2s ease-in;
    transform: ${isActive ? "rotate(0deg)" : "rotate(180deg)"};
  `,

  companyMenu: css`
    position: absolute;
    top: 4.25rem;
    right: 0;
    border: 1px solid ${COLORS.GRAY10};
    border-radius: 1rem;
    width: 15rem;
    padding: 1rem;
    background-color: ${COLORS.GRAY100};
    z-index: 50;
  `,

  companyProfile: css`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  `,

  companyLogoBox: css`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    border-radius: 50%;
    position: relative;

    > img {
      object-fit: contain;
    }
  `,

  companyMenuLink: css`
    display: block;
    padding: 0.625rem 0;

    :last-of-type {
      padding-bottom: 0;
    }
  `,

  userMenu: css`
    position: absolute;
    top: 4.25rem;
    right: 0;
    border: 1px solid ${COLORS.GRAY10};
    border-radius: 1rem;
    width: 10rem;
    padding: 1rem;
    background-color: ${COLORS.GRAY100};
    z-index: 50;
  `,

  userName: css`
    :after {
      content: " 님";
      font-weight: 400;
    }
  `,
};
