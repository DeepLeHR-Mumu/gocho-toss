import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
  `,

  closeIcon: css`
    width: 2rem;
    height: 2rem;
    color: ${COLOR.GRAY450};
    align-self: flex-end;
    cursor: pointer;
  `,

  mobileTitleWrapper: css`
    margin-top: auto;
    margin-bottom: 1rem;
    align-self: flex-start;
  `,

  title: css`
    margin-top: 4.5rem;
    margin-bottom: 0.5rem;
    ${TEXT.TITLE2_B2428}
  `,

  logo: css`
    margin-bottom: 2.5rem;
  `,

  subtitle: css`
    margin-bottom: 6.5rem;
    color: ${COLOR.GRAY600};
    ${TEXT.TITLE5_M1620}
  `,

  tooltip: css`
    padding: 0.5rem 0.75rem;
    margin-bottom: 1.5rem;
    border-radius: 0.25rem;
    color: ${COLOR.WHITE};
    background-color: ${COLOR.BLUE300};
    position: relative;

    ::after {
      content: "";
      position: absolute;
      bottom: -1rem;
      left: 50%;
      transform: translate(-50%, 0);
      border-width: 0.5rem;
      border-style: solid;
      border-color: ${COLOR.BLUE300} transparent transparent transparent;
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
    ${TEXT.TITLE5_M1620}
  `,

  emailLogin: css`
    border: none;
    background-color: transparent;
    color: ${COLOR.GRAY600};
    ${TEXT.UNDERLINE1_M1620}
  `,

  mobileDescription: css`
    color: ${COLOR.GRAY400};
    ${TEXT.BODY3_R1422}
  `,
};
