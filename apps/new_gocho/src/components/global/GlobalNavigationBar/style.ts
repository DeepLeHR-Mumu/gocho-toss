import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

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
    border-bottom: 1px solid ${themeWhite ? NEWCOLORS.GRAY200 : NEWCOLORS.WHITE};

    ${MOBILE} {
      height: 3.5rem;
    }
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

      ${MOBILE} {
        width: 7.8rem;
      }
    }
  `,

  mobileIcon: css`
    width: 1.25rem;
    height: 1.25rem;
    color: ${NEWCOLORS.WHITE};
    margin-left: 1rem;
    cursor: pointer;
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

    li {
      color: ${themeWhite ? NEWCOLORS.BLUEGRAY400 : NEWCOLORS.WHITE};
      ${NEWTEXTS.TITLE12}
      cursor: pointer;
      padding-bottom: 1.625rem;

      :focused {
        color: red;
      }
    }
  `,

  selected: css`
    color: ${themeWhite ? NEWCOLORS.BLUE300 : NEWCOLORS.WHITE};
    border-bottom: 1px solid ${themeWhite ? NEWCOLORS.BLUE300 : NEWCOLORS.WHITE};
    ${NEWTEXTS.TITLE12}
  `,

  etcWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding-bottom: 1.0625rem;
  `,

  businessServiceButton: css`
    flex-basis: fit-content;
    border-radius: 1.25rem;
    border: 1px solid ${NEWCOLORS.BLUE200};
    padding: 0.5rem 1rem;
    color: ${themeWhite ? NEWCOLORS.BLUE200 : NEWCOLORS.BLUE100};
    background-color: transparent;
    ${NEWTEXTS.TITLE9}
  `,

  loginButton: css`
    ${NEWTEXTS.TITLE12}
    color: ${themeWhite ? NEWCOLORS.BLUE300 : NEWCOLORS.WHITE};
  `,

  alarmIcon: css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${themeWhite ? NEWCOLORS.BLACK : NEWCOLORS.WHITE};
  `,

  profileDropDownMenu: css`
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.625rem 1rem;
  `,
});
