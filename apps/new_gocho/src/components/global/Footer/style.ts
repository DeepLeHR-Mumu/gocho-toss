import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  footer: css`
    background-color: #f2f2f5;
    width: 100%;
  `,

  container: css`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 4.375rem 0;
    gap: 0 1.25rem;
  `,

  infoContainer: css``,

  logoBox: css`
    position: relative;
    width: 8rem;
    height: 1.5rem;
    display: block;
    margin-bottom: 1.75rem;

    > img {
      object-fit: contain;
    }
  `,

  infoBox: css`
    display: flex;
    gap: 0 1rem;
    margin-bottom: 0.5rem;
  `,

  ceoInfo: css`
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY600};
  `,

  info: css`
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY600};
  `,

  contour: css`
    border-left: 1px solid ${COLOR.GRAY200};
  `,

  middleBox: css`
    margin: 1.25rem 0 2.5rem;
  `,

  contactBox: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem 0;
    margin-bottom: 1.75rem;
  `,

  contactTitle: css`
    ${TEXT.TITLE5_B1620};
    color: ${COLOR.GRAY600};
  `,

  link: css`
    display: flex;
    align-items: center;
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY600};
  `,

  kakaoLogo: css`
    display: block;
    position: relative;
    margin-right: 0.25rem;
    width: 1rem;
    height: 1rem;

    > img {
      object-fit: contain;
    }
  `,

  linkBox: css`
    display: flex;
    gap: 0 1rem;
  `,

  underlineLink: css`
    ${TEXT.UNDERLINE1_M1620};
    color: ${COLOR.GRAY600};
  `,
};
