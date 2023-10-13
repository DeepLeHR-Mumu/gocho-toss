import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";
import { shorten } from "shared-style/common";

export const cssObj = {
  headerWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    height: 4rem;
    width: 100%;
    background-color: ${COLOR.BLUE300};
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
    border-bottom: ${isActive ? `2px solid ${COLOR.WHITE}` : "none"};
    color: ${COLOR.WHITE};
    transition: color 0.2s ease;
  `,

  profileWrapper: css`
    position: relative;
    margin-right: 1.5rem;

    :last-of-type {
      margin-right: 0;
    }
  `,

  alarmButton: css`
    padding: 1rem 0;

    > svg {
      color: ${COLOR.WHITE};
      width: 1.25rem;
      height: 1.25rem;
    }
  `,

  redDot: css`
    width: 3px;
    height: 3px;
    background-color: ${COLOR.RED200};
    border-radius: 50%;
    position: absolute;
    top: 1rem;
    left: 0;
  `,

  alarmMenu: css`
    position: absolute;
    top: 4.25rem;
    right: 0;
    border: 1px solid ${COLOR.BLACK};
    border-radius: 1rem;
    width: 25rem;
    max-height: 28rem;
    padding: 0.25rem 0;
    overflow-y: scroll;
    background-color: ${COLOR.WHITE};
    z-index: 100;
  `,

  alarmContainer: css`
    text-align: left;
    padding: 1rem;
  `,

  infoType: (isRead: boolean) => css`
    ${TEXT.TITLE6_M1418};
    color: ${isRead ? COLOR.GRAY600 : COLOR.BLUE200};
  `,

  infoTitle: (isRead: boolean) => css`
    ${TEXT.BODY3_R1422};
    color: ${isRead ? COLOR.GRAY600 : COLOR.BLACK};
    ${shorten(3)};
  `,

  contour: css`
    margin: 0.25rem 1rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,

  noAlarmDesc: css`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY600};
  `,

  profileButton: css`
    display: flex;
    padding: 1rem 0;
    align-items: center;
    cursor: pointer;
    color: ${COLOR.WHITE};
    font-weight: 700;
  `,

  companyProfileButton: css`
    max-width: 6.5rem;
    ${shorten()};
  `,

  toggleIcon: (isActive: boolean) => css`
    font-size: 1rem;
    font-weight: 700;
    margin-left: 0.5rem;
    color: ${COLOR.WHITE};
    transition: all 0.2s ease-in;
    transform: ${isActive ? "rotate(0deg)" : "rotate(180deg)"};
  `,

  companyMenu: css`
    position: absolute;
    top: 4.25rem;
    right: 0;
    border: 1px solid ${COLOR.BLACK};
    border-radius: 1rem;
    width: 15rem;
    padding: 1rem 0 0.25rem;
    background-color: ${COLOR.WHITE};
    z-index: 100;
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
    overflow: hidden;
    position: relative;

    > img {
      object-fit: contain;
    }
  `,

  companyName: css`
    ${TEXT.TITLE4_B1822};
    margin-bottom: 0.25rem;
  `,

  industry: css`
    ${TEXT.TITLE6_M1418};
  `,

  companyMenuLink: css`
    ${TEXT.TITLE5_M1620};
    display: block;
    padding: 0.75rem 1rem;
  `,

  userMenu: css`
    position: absolute;
    top: 4.25rem;
    right: 0;
    border: 1px solid ${COLOR.BLACK};
    border-radius: 1rem;
    width: 15rem;
    padding-top: 1.25rem;
    background-color: ${COLOR.WHITE};
    z-index: 100;
  `,

  userInfoContainer: css`
    margin: 0 1rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,

  userName: css`
    ${TEXT.TITLE4_B1822};
    margin-bottom: 0.25rem;
  `,

  userDepartment: css`
    ${TEXT.TITLE6_M1418};
  `,

  logoutButton: css`
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    background-color: ${COLOR.GRAY50};
    border-radius: 0 0 1rem 1rem;
  `,
};
