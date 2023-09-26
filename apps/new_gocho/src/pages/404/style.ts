import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  mainContainer: css`
    background-color: ${NEWCOLORS.GRAY100};
    padding: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  errorContainer: css`
    position: relative;
    background-color: ${NEWCOLORS.WHITE};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
  `,

  title: css`
    ${NEWTEXTS.TITLE14}
  `,

  desc: css`
    ${NEWTEXTS.BODY5};
    margin-top: 0.5rem;
  `,

  companyWrapper: css`
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  `,

  companyDesc: css`
    ${NEWTEXTS.BODY4};

    > span {
      color: ${NEWCOLORS.BLUE300};
      font-weight: 700;
    }
  `,

  companyLogoBox: css`
    position: relative;
    width: 10rem;
    height: 3rem;

    > img {
      object-fit: contain;
    }
  `,

  link: css`
    border-radius: 2rem;
    background-color: ${NEWCOLORS.BLUE300};
    color: ${NEWCOLORS.WHITE};
    padding: 1rem 2rem;
    margin-top: 2rem;
    ${NEWTEXTS.TITLE12};
  `,

  jobiImageBox: css`
    position: absolute;
    bottom: -0.125rem;
    right: 0;

    > img {
      width: 25rem;
      height: 12rem;
      object-fit: contain;
    }
  `,
};
