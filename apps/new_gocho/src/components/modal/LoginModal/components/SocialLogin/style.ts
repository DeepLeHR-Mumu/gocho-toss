import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  wrapper: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;

    ${MOBILE} {
      padding: 2rem;
      overflow: auto;
    }
  `,

  closeIcon: css`
    width: 2rem;
    height: 2rem;
    color: ${NEWCOLORS.GRAY300};
    align-self: flex-end;
    cursor: pointer;

    ${MOBILE} {
      width: 1.5rem;
      height: 1.5rem;
      color: ${NEWCOLORS.BLACK};
    }
  `,

  mobileTitleWrapper: css`
    margin-top: auto;
    margin-bottom: 1rem;
    align-self: flex-start;
  `,

  title: css`
    margin-top: 4.5rem;
    margin-bottom: 0.5rem;
    ${NEWTEXTS.TITLE13}

    ${MOBILE} {
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 900;
      line-height: 3.125rem;
      margin-top: 0rem;
      margin-bottom: 0rem;
    }
  `,

  logo: css`
    margin-bottom: 2.5rem;

    ${MOBILE} {
      margin-bottom: 1.25rem;
      align-self: flex-start;
    }
  `,

  subtitle: css`
    margin-bottom: 6.5rem;
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.TITLE7}

    ${MOBILE} {
      margin-bottom: auto;
      align-self: flex-start;
    }
  `,

  tooltip: css`
    padding: 0.5rem 0.75rem;
    margin-bottom: 1.5rem;
    border-radius: 0.25rem;
    color: ${NEWCOLORS.WHITE};
    background-color: ${NEWCOLORS.BLUE300};
    position: relative;

    ::after {
      content: "";
      position: absolute;
      bottom: -1rem;
      left: 50%;
      transform: translate(-50%, 0);
      border-width: 0.5rem;
      border-style: solid;
      border-color: ${NEWCOLORS.BLUE300} transparent transparent transparent;
    }
  `,

  kakaoLogo: css`
    margin-right: 0.5rem;
  `,

  kakaoButton: css`
    width: 22.5rem;
    margin-bottom: 2.5rem;
    border-color: #fee500;
    background-color: #fee500;
    color: #392020;
    ${NEWTEXTS.TITLE8}

    ${MOBILE} {
      width: 100%;
      margin-bottom: 2.5rem;
      ${NEWTEXTS.TITLE6}
    }
  `,

  emailLogin: css`
    border: none;
    background-color: transparent;
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.UNDERLINE_M1620}

    ${MOBILE} {
      margin-bottom: 3rem;
    }
  `,

  mobileDescription: css`
    color: ${NEWCOLORS.BLUEGRAY200};
    ${NEWTEXTS.BODY2}
  `,
};
