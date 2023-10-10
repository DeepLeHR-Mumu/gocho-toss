import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  contentWrapper: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  partContainer: css`
    flex-grow: 1;
    height: 45rem;
    background-color: ${NEWCOLORS.WHITE};
    padding: 2rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  label: css`
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.GRAY600};
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY600};
  `,

  title: css`
    ${TEXTS.TITLE10};
    margin-bottom: 1.5rem;
  `,

  infoContainer: css`
    display: flex;
    gap: 0 1rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};

    > p {
      ${TEXTS.TITLE3};
      color: ${NEWCOLORS.GRAY600};
    }
  `,

  body: css`
    ${TEXTS.BODY4};
    padding-bottom: 2rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  relatedNotice: css`
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  relatedLabel: css`
    ${TEXTS.TITLE6};
    margin-right: 2.5rem;
  `,

  relatedTitle: css`
    ${TEXTS.TITLE5};
    flex-grow: 1;
  `,

  relatedDate: css`
    ${TEXTS.TITLE3};
    color: ${NEWCOLORS.GRAY500};
  `,
};
