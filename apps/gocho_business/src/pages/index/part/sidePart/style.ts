import { css } from "@emotion/react";

import { TEXT } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  companyContainer: css`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,

  companyLogo: css`
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    margin-right: 1rem;
    border-radius: 50%;
    overflow: hidden;

    > img {
      object-fit: contain;
    }
  `,

  companyName: css`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${TEXT.TITLE1_B2832};

    > svg {
      color: ${COLOR.GRAY450};
      font-size: 1.75rem;
    }
  `,

  infoContainer: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    margin-bottom: 0.5rem;

    :last-of-type {
      margin-bottom: 0;
    }

    > svg {
      color: ${COLOR.GRAY600};
    }
  `,

  infoTitle: css`
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY600};
    flex-grow: 1;
  `,

  info: css`
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY600};
  `,

  companyAuthButton: css`
    display: block;
    cursor: pointer;
    width: fit-content;
    margin: 1.25rem auto 0;
    padding: 0.75rem 1rem;
    border-radius: 1.5rem;
    background-color: ${COLOR.BLUE100};
    color: ${COLOR.BLUE300};
  `,

  jdCountContainer: css`
    display: flex;
    justify-content: center;
    gap: 0 1.25rem;
  `,

  jdCountWrapper: css`
    padding: 1rem 0;
    width: 6.5rem;
    text-align: center;
  `,

  countInfo: css`
    ${TEXT.TITLE5_M1620};
    margin-bottom: 1rem;
  `,

  countNumber: (isAuth: boolean) => css`
    ${TEXT.TITLE2_B2428};
    color: ${isAuth ? COLOR.BLACK : COLOR.GRAY400};
  `,

  contour: css`
    margin: 1rem 0;
    border-left: 1px solid ${COLOR.GRAY200};
  `,

  adImageWrapper: css`
    border-radius: 1rem;
    overflow: hidden;
    width: 20.5rem;
    height: 27.25rem;
  `,
};
