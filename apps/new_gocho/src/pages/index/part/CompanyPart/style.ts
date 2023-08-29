import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  sectionContainer: css`
    margin: 4.5rem 0;

    ${MOBILE} {
      margin: 1.5rem 0;
    }
  `,

  title: css`
    ${NEWTEXTS.TITLE15};

    ${MOBILE} {
      ${NEWTEXTS.TITLE9};
    }
  `,

  controlContainer: css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 2.25rem;

    ${MOBILE} {
      margin-top: 1rem;
    }
  `,

  keywordContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.25rem;

    ${MOBILE} {
      gap: 0.5rem 0.75rem;
    }
  `,

  buttonContainer: css`
    display: flex;
    gap: 0 1.75rem;
  `,

  sliderButton: css`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid ${NEWCOLORS.GRAY200};

    ${MOBILE} {
      display: none;
    }

    > svg {
      color: ${NEWCOLORS.GRAY300};
      width: 2rem;
      height: 2rem;
    }
  `,

  sliderContainer: css`
    margin-top: 2.25rem;

    ${MOBILE} {
      margin-top: 1.5rem;
    }
  `,

  cardContainer: css`
    display: flex;
    gap: 0 1rem;
    overflow-x: scroll;

    * ::-webkit-scrollbar {
      display: none;
    }
  `,
};
