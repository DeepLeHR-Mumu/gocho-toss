import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

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
    background-color: ${NEWCOLORS.BLUE250};
  `,

  titleArea: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 56.25%;
    padding-top: 1.5rem;
  `,

  searchBarWrapper: css`
    width: 44%;
  `,

  navigationArea: css`
    width: 56.25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
  `,

  navigationWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
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

  businessServicebutton: css`
    flex-basis: fit-content;
    border-radius: 1.25rem;
    border: 1px solid ${NEWCOLORS.BLUE200};
    padding: 0.5rem 1rem;
    color: ${NEWCOLORS.BLUE100};
    background-color: transparent;
    ${NEWTEXTS.TITLE9}
  `,

  loginButton: css`
    padding-left: 0;
    padding-right: 0;
    background-color: transparent;
    border-color: transparent;
    ${NEWTEXTS.TITLE12}
  `,
};
