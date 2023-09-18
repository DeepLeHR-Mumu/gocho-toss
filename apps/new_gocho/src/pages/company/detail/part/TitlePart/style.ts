import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  background: css`
    background: ${NEWCOLORS.WHITE};
  `,

  imageWrapper: css`
    width: 100%;
    height: 7.5rem;
    overflow: hidden;
    position: absolute;
    z-index: 0;

    img {
      height: auto !important;
    }
  `,

  wrapper: css`
    padding: 9rem 1.5rem 2.375rem;
    display: flex;
    flex-direction: column;
    position: relative;
  `,

  followWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;
    margin-left: auto;
  `,

  shareIcon: css`
    width: 1.5rem;
    height: 1.5rem;
  `,

  titleWrapper: css`
    margin-top: 0.875rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
  `,

  title: css`
    margin-right: auto;
    ${NEWTEXTS.TITLE14}
  `,

  eyeIcon: css`
    width: 1.25rem;
    height: 1.25rem;
    color: ${NEWCOLORS.GRAY300};
    align-self: flex-end;
  `,

  views: css`
    align-self: flex-end;
    margin-left: 0.5rem;
    color: ${NEWCOLORS.GRAY300};
    ${NEWTEXTS.TITLE7}
  `,

  introWrapper: css`
    display: flex;
    flex-direction: row;
  `,

  intro: css`
    margin-right: auto;
    ${NEWTEXTS.TITLE7}
  `,

  follower: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.TITLE7}

    > span {
      color: ${NEWCOLORS.BLUE300};
    }
  `,

  companyLogo: css`
    border-radius: 50%;
    overflow: hidden;
    width: 6.25rem;
    height: 6.25rem;
    border: 1px solid ${NEWCOLORS.GRAY100};
    background-color: ${NEWCOLORS.WHITE};
    position: absolute;
    top: 4.375rem;

    > img {
      object-fit: contain;
    }
  `,

  listWrapper: css`
    padding-top: 1.4375rem;
    display: flex;
    flex-direction: row;
  `,

  menu: (isSelected: boolean) => css`
    ${NEWTEXTS.TITLE12}
    width: 8.75rem;
    text-align: center;
    padding-bottom: 1.5rem;
    border-bottom: ${isSelected ? `2px solid ${NEWCOLORS.BLUE300}` : `none`};
    color: ${isSelected ? NEWCOLORS.BLUE300 : NEWCOLORS.BLUEGRAY200};
  `,
};

export const skeletonCssObj = {
  emptyDiv1: css`
    width: 100%;
    height: 2.75rem;
  `,

  emptyDiv2: css`
    width: 100%;
    height: 4.5rem;
  `,

  skeletonBoxWrapper1: css`
    width: 10rem;
    height: 2rem;
    margin-top: 0.875rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    overflow: hidden;
  `,

  skeletonBoxWrapper2: css`
    width: 15rem;
    height: 1.25rem;
    border-radius: 0.5rem;
    overflow: hidden;
  `,
};
