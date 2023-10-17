import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  mainContainer: css`
    background-color: ${COLOR.GRAY100};
    padding: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  errorContainer: css`
    position: relative;
    background-color: ${COLOR.WHITE};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
  `,

  title: css`
    ${TEXT.TITLE1_B2832}
  `,

  desc: css`
    ${TEXT.BODY2_R1624};
    margin-top: 0.5rem;
  `,

  companyWrapper: css`
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  `,

  companyDesc: css`
    ${TEXT.BODY2_R1624};

    > span {
      color: ${COLOR.BLUE300};
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
    background-color: ${COLOR.BLUE300};
    color: ${COLOR.WHITE};
    padding: 1rem 2rem;
    margin-top: 2rem;
    ${TEXT.TITLE4_B1822};
  `,

  jobiImageBox: css`
    position: absolute;
    bottom: -0.125rem;
    right: 0;

    > img {
      width: 25rem;
      height: 14rem;
      object-fit: contain;
    }
  `,
};
