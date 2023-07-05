import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  headerWrapper: (isLogin: boolean) => css`
    display: ${isLogin ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    height: 4rem;
    width: 100%;
    background-color: ${NEWCOLORS.BLUE300};
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
    border-bottom: ${isActive ? `2px solid ${NEWCOLORS.WHITE}` : "none"};
    color: ${NEWCOLORS.WHITE};
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
    color: ${NEWCOLORS.WHITE};
    font-weight: 700;
  `,

  toggleIcon: (isActive: boolean) => css`
    font-size: 1rem;
    font-weight: 700;
    margin-left: 0.5rem;
    color: ${NEWCOLORS.WHITE};
    transition: all 0.2s ease-in;
    transform: ${isActive ? "rotate(0deg)" : "rotate(180deg)"};
  `,

  companyMenu: css`
    position: absolute;
    top: 4.25rem;
    right: 0;
    border: 1px solid ${NEWCOLORS.BLACK};
    border-radius: 1rem;
    width: 15rem;
    padding: 1rem 0 0.25rem;
    background-color: ${NEWCOLORS.WHITE};
    z-index: 50;
  `,

  companyProfile: css`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0 1rem;
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

  companyName: css`
    ${TEXTS.TITLE9};
    margin-bottom: 0.25rem;
  `,

  industry: css`
    ${TEXTS.TITLE3};
  `,

  companyMenuLink: css`
    ${TEXTS.TITLE5};
    display: block;
    padding: 0.75rem 1rem;
  `,

  userMenu: css`
    position: absolute;
    top: 4.25rem;
    right: 0;
    border: 1px solid ${NEWCOLORS.BLACK};
    border-radius: 1rem;
    width: 15rem;
    padding-top: 1.25rem;
    background-color: ${NEWCOLORS.WHITE};
    z-index: 50;
  `,

  userInfoContainer: css`
    margin: 0 1rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  userName: css`
    ${TEXTS.TITLE9};
    margin-bottom: 0.25rem;
  `,

  userDepartment: css`
    ${TEXTS.TITLE3};
  `,

  logoutButton: css`
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    background-color: ${NEWCOLORS.GRAY50};
    border-radius: 0 0 1rem 1rem;
  `,
};
