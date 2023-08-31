import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  sectionContainer: css`
    margin: 3rem 0;

    ${MOBILE} {
      margin: 1.5rem 0;
    }
  `,

  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,

  title: css`
    ${NEWTEXTS.TITLE15};

    ${MOBILE} {
      ${NEWTEXTS.TITLE9};
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

  contentContainer: css`
    display: flex;
    width: 100%;
    margin-top: 2.25rem;

    .slick-slider {
      width: calc(100% - 17.25rem);
    }

    ${MOBILE} {
      margin-top: 1.5rem;
    }
  `,

  nowJdBanner: css`
    position: relative;
    width: 15.75rem;
    height: 23.125rem;
    margin-right: 1.5rem;
    flex-shrink: 0;
    padding: 1.75rem;
    background-color: ${NEWCOLORS.BLUE400};
    border-radius: 0.5rem;

    ${MOBILE} {
      width: 8.75rem;
      height: 12.25rem;
      padding: 1rem 0.75rem;
    }
  `,

  bannerTitle: css`
    ${NEWTEXTS.TITLE16};
    color: ${NEWCOLORS.WHITE};

    ${MOBILE} {
      ${NEWTEXTS.TITLE14};
    }
  `,

  nowLink: css`
    ${NEWTEXTS.TITLE11};
    color: ${NEWCOLORS.WHITE};
    display: block;
    cursor: pointer;
    margin-top: 1rem;

    ${MOBILE} {
      ${NEWTEXTS.TITLE1};
    }
  `,

  imageWrapper: css`
    width: 6.25rem;
    height: 9rem;
    position: absolute;
    bottom: 1rem;
    right: 0.5rem;
    margin: 0 0 0 auto;

    ${MOBILE} {
      width: 3.75rem;
      height: 5.125rem;
    }

    > img {
      object-fit: contain;
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
