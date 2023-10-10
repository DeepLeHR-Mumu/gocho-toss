import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    margin: 3rem 0;
  `,

  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,

  title: css`
    ${NEWTEXTS.DISPLAY2_B3236};
  `,

  buttonContainer: css`
    display: flex;
    gap: 0 1.75rem;
  `,

  sliderButton: (isDisabled: boolean) => css`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${isDisabled ? NEWCOLORS.GRAY50 : NEWCOLORS.WHITE};
    border: 1px solid ${NEWCOLORS.GRAY200};
    cursor: ${isDisabled ? "default" : "pointer"};

    > svg {
      color: ${isDisabled ? NEWCOLORS.GRAY100 : NEWCOLORS.GRAY300};
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
  `,

  bannerTitle: css`
    ${NEWTEXTS.DISPLAY1_B4044};
    color: ${NEWCOLORS.WHITE};
  `,

  nowLink: css`
    ${NEWTEXTS.TITLE4_M1822};
    color: ${NEWCOLORS.WHITE};
    display: block;
    cursor: pointer;
    margin-top: 1rem;
  `,

  imageWrapper: css`
    width: 6.25rem;
    height: 9rem;
    position: absolute;
    bottom: 1rem;
    right: 0.5rem;
    margin: 0 0 0 auto;

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
