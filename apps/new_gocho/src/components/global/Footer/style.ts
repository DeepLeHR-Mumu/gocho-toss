import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS, TEXTS } from "shared-style/text";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  footer: css`
    background-color: #f2f2f5;
    width: 100%;

    ${MOBILE} {
      margin-top: 2.5rem;
    }
  `,

  container: css`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 4.375rem 0;
    gap: 0 1.25rem;

    ${MOBILE} {
      padding: 1.25rem 0;
      flex-direction: column;
    }
  `,

  infoContainer: css`
    ${MOBILE} {
      margin-bottom: 0.5rem;
    }
  `,

  logoBox: css`
    position: relative;
    width: 8rem;
    height: 1.5rem;
    display: block;
    margin-bottom: 1.75rem;

    ${MOBILE} {
      margin-bottom: 1rem;
    }

    > img {
      object-fit: contain;
    }
  `,

  infoBox: css`
    display: flex;
    gap: 0 1rem;
    margin-bottom: 0.5rem;

    ${MOBILE} {
      gap: 0 0.5rem;
    }
  `,

  ceoInfo: css`
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY400};

    ${MOBILE} {
      ${NEWTEXTS.TITLE4};
    }
  `,

  info: css`
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY400};

    ${MOBILE} {
      ${NEWTEXTS.TITLE1};
    }
  `,

  contour: css`
    border-left: 1px solid ${NEWCOLORS.GRAY200};
  `,

  middleBox: css`
    margin: 1.25rem 0 2.5rem;

    ${MOBILE} {
      margin: 1rem 0;
    }
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

    ${MOBILE} {
      ${NEWTEXTS.TITLE6};
    }
  `,

  link: css`
    display: flex;
    align-items: center;
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY400};

    ${MOBILE} {
      ${NEWTEXTS.TITLE1};
    }
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

    ${MOBILE} {
      margin-bottom: 1rem;
    }
  `,

  underlineLink: css`
    ${TEXTS.UNDERLINE};
    color: ${NEWCOLORS.BLUEGRAY400};

    ${MOBILE} {
      ${NEWTEXTS.TITLE6};
    }
  `,
};
