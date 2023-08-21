import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  footer: css`
    margin-top: 7.5rem;
    background-color: #f2f2f5;
    width: 100%;
  `,

  container: css`
    display: flex;
    padding: 0 1.5rem;
    margin: 0 auto;
    gap: 0 1.25rem;
    border-top: 1px solid ${NEWCOLORS.GRAY200};
  `,

  infoContainer: css`
    width: 50.25rem;
    padding: 2.5rem 1.5rem;
  `,

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

  info: css`
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY400};
  `,

  contour: css`
    border-left: 1px solid ${NEWCOLORS.GRAY200};
  `,

  middleBox: css`
    margin: 1.25rem 0 2.5rem;
  `,

  contactContainer: css`
    width: 20.5rem;
    padding: 2.5rem 0.5rem;
  `,

  contactBox: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem 0;
    margin-bottom: 1.75rem;
  `,

  contactTitle: css`
    ${TEXTS.TITLE7};
    color: ${NEWCOLORS.BLUEGRAY400};
  `,

  link: css`
    display: flex;
    align-items: center;
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY400};
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
    ${TEXTS.UNDERLINE};
    color: ${NEWCOLORS.BLUEGRAY400};
  `,
};
