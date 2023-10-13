import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  formWrapper: css`
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,

  formBox: css`
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
  `,

  infoWrapper: css`
    display: flex;
    width: 33.125;
    flex-direction: column;
    gap: 1.75rem;
  `,

  rMargin: css`
    margin-right: 1.5rem;
  `,

  upload: css`
    display: none;
  `,

  basicInfoWrapper: css`
    display: flex;
    flex-wrap: wrap;
    gap: 1.75rem;

    & > div {
      width: 18.125rem;

      display: flex;
      justify-content: space-around;
      align-items: center;

      & > p {
        width: 5.625rem;
      }

      & > div {
        width: 12.5rem;
      }
    }
  `,

  etcInfoWrapper: css`
    display: flex;
    flex-direction: column;

    gap: 1.5rem;

    & > div {
      display: flex;
      align-items: center;

      & > p {
        width: 5.625rem;
      }

      & > div {
        width: calc(100% - 5.625rem);
      }
    }
  `,

  profileWrapper: css`
    width: 12.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    & > button {
      width: 100%;
    }

    & > p {
      ${NEWTEXTS.BODY4_R1220};
      color: ${NEWCOLORS.GRAY500};
      text-align: center;
    }
  `,

  searchIcon: css`
    width: 1.25rem;
    height: 1.25rem;
    color: ${NEWCOLORS.GRAY450};
  `,

  buttonWrapper: css`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1.25rem;
  `,
};
