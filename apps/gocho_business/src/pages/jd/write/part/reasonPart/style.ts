import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  spinnerBox: css`
    position: relative;
  `,

  wrapper: css`
    border: 1px solid ${NEWCOLORS.RED300};
    background-color: ${NEWCOLORS.WHITE};
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    margin-bottom: 1.25rem;
  `,

  infoTitle: css`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    > svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      color: ${NEWCOLORS.RED300};
    }

    > p {
      ${TEXTS.TITLE9}
      color: ${NEWCOLORS.RED300};
    }
  `,

  infoContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  userInfo: css`
    display: flex;
    gap: 0 0.5rem;
  `,

  infoBox: css`
    ${TEXTS.TITLE3};
    color: ${NEWCOLORS.BLUEGRAY300};

    > span {
      margin-left: 0.5rem;
      color: ${NEWCOLORS.BLUEGRAY500};
    }
  `,

  contour: css`
    border-left: 1px solid ${NEWCOLORS.GRAY200};
  `,

  email: css`
    ${TEXTS.TITLE3};
    color: ${NEWCOLORS.BLUEGRAY400};

    > span {
      margin-left: 0.5rem;
    }
  `,

  reasonContainer: css`
    border-top: 1px solid ${NEWCOLORS.GRAY200};
    margin-top: 1.25rem;
    padding-top: 1.25rem;
  `,

  reasonTitle: css`
    ${TEXTS.TITLE6};
    color: ${NEWCOLORS.RED300};
    margin-bottom: 1.25rem;

    > span {
      ${TEXTS.TITLE3};
      color: ${NEWCOLORS.BLUEGRAY300};
      margin-left: 0.5rem;
    }
  `,

  reason: css`
    ${TEXTS.TITLE5};
    margin-bottom: 0.5rem;

    :before {
      ${TEXTS.TITLE5};
      font-weight: 700;
      content: "·";
      margin-right: 0.25rem;
    }

    :last-of-type {
      margin-bottom: 0;
    }
  `,
};
