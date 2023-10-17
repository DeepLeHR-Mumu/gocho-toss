import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  contentWrapper: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  partContainer: css`
    flex-grow: 1;
    height: 45rem;
    background-color: ${COLOR.WHITE};
    padding: 2rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  label: css`
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY600};
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid ${COLOR.GRAY600};
  `,

  title: css`
    ${TEXT.TITLE2_B2428};
    margin-bottom: 1.5rem;
  `,

  infoContainer: css`
    display: flex;
    gap: 0 1rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid ${COLOR.GRAY200};

    > p {
      ${TEXT.TITLE6_M1418};
      color: ${COLOR.GRAY600};
    }
  `,

  body: css`
    ${TEXT.BODY2_R1624};
    padding-bottom: 2rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,

  relatedNotice: css`
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,

  relatedLabel: css`
    ${TEXT.TITLE5_M1620};
    margin-right: 2.5rem;
  `,

  relatedTitle: css`
    ${TEXT.TITLE5_M1620};
    flex-grow: 1;
  `,

  relatedDate: css`
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY500};
  `,
};
