import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
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
    background-color: ${NEWCOLORS.BLUE300};
    border-bottom: 1px solid ${NEWCOLORS.WHITE};

    ${MOBILE} {
      height: 3.5rem;
    }
  `,

  titleArea: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    align-items: center;
    justify-content: space-between;
    margin-top: 1.125rem;
  `,

  navigationWrapper: css`
    display: flex;
    align-items: center;
    gap: 3rem;

    li {
      color: ${NEWCOLORS.WHITE};
      ${NEWTEXTS.TITLE12}
      cursor: pointer;

      :focused {
        color: red;
      }
    }
  `,

  etcWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  `,

  businessServiceButton: css`
    flex-basis: fit-content;
    border-radius: 1.25rem;
    border: 1px solid ${NEWCOLORS.BLUE200};
    padding: 0.5rem 1rem;
    color: ${NEWCOLORS.BLUE100};
    background-color: transparent;
    ${NEWTEXTS.TITLE9}
  `,

  loginButton: css`
    ${NEWTEXTS.TITLE12}
    color: ${NEWCOLORS.WHITE};
  `,
};
