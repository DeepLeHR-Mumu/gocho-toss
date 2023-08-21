import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  closeIcon: css`
    width: 2rem;
    height: 2rem;
    color: ${NEWCOLORS.GRAY300};
    align-self: flex-end;
    cursor: pointer;
  `,

  title: css`
    margin-top: 4.5rem;
    margin-bottom: 1rem;
    ${NEWTEXTS.TITLE13}
  `,

  logo: css`
    margin-bottom: 2.5rem;
  `,

  subtitle: css`
    margin-bottom: 6.5rem;
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.TITLE7}
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
  `,

  emailLogin: css`
    border: none;
    background-color: transparent;
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.UNDERLINE_M1620}
  `,
};
