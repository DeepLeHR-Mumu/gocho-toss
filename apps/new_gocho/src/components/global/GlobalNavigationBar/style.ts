import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const getCssObj = (themeWhite: boolean) => ({
  wrapper: css`
    width: 100%;
    height: 8.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 50;
    position: sticky;
    left: 0;
    top: 0;
    background-color: ${themeWhite ? NEWCOLORS.WHITE : NEWCOLORS.BLUE300};
    border-bottom: ${themeWhite ? `1px solid ${NEWCOLORS.GRAY200}` : "1px solid rgba(255, 255, 255, 0.2)"};
  `,

  titleArea: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  `,

  logoWrapper: css`
    position: relative;

    > img {
      width: 12rem;
      object-fit: contain;
    }
  `,

  searchBarWrapper: css`
    width: 30rem;
    margin-left: 2rem;
  `,

  navigationArea: css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 1.125rem;
  `,

  navigationWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  `,

  menu: (isSelected: boolean) => {
    let color;

    if (isSelected) {
      color = themeWhite ? NEWCOLORS.BLUE300 : NEWCOLORS.WHITE;
    } else {
      color = themeWhite ? NEWCOLORS.GRAY600 : NEWCOLORS.WHITE;
    }

    return css`
      color: ${themeWhite ? NEWCOLORS.GRAY600 : NEWCOLORS.WHITE};
      ${NEWTEXTS.TITLE4_B1822}
      cursor: pointer;
      padding-bottom: 1.625rem;
      color: ${color};
      border-bottom: ${isSelected ? `1px solid ${color}` : "none"};
    `;
  },

  etcWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
  `,

  businessServiceButton: css`
    flex-basis: fit-content;
    border-radius: 1.25rem;
    border: 1px solid ${NEWCOLORS.BLUE200};
    padding: 0.5rem 1rem;
    color: ${themeWhite ? NEWCOLORS.BLUE200 : NEWCOLORS.BLUE100};
    background-color: transparent;
    ${NEWTEXTS.TITLE5_B1620}

    :last-of-type {
      margin-right: 1rem;
    }
  `,

  loginButton: css`
    ${NEWTEXTS.TITLE4_B1822}
    color: ${themeWhite ? NEWCOLORS.BLUE300 : NEWCOLORS.WHITE};
  `,

  alarmIcon: css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${themeWhite ? NEWCOLORS.BLACK : NEWCOLORS.WHITE};
    margin-right: 0.5rem;
  `,

  profileDropDownMenu: css`
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.625rem 1rem;
  `,
});
