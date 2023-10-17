import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  background: css`
    width: 100vw;
    height: 100vh;
    background-color: ${COLOR.WHITE};
  `,

  wrapper: css`
    display: grid;
    grid-template-columns: 168px 1fr;
    row-gap: 1.5rem;
    column-gap: 1.5rem;
    padding-top: 2.5rem;
    margin-bottom: 7.5rem;
  `,

  navBox: css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    ${TEXT.TITLE5_M1620}
  `,

  navigationBox: css`
    width: 10.5rem;
  `,

  sideNavigation: css`
    padding: 2rem 1.25rem;
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    margin-bottom: 1.5rem;
  `,

  menu: (isSelected: boolean) => css`
    display: block;
    cursor: pointer;
    ${isSelected ? TEXT.TITLE5_B1620 : TEXT.TITLE5_M1620}
    color: ${isSelected ? COLOR.BLUE300 : COLOR.BLACK};
    margin-bottom: 1.5rem;

    :last-of-type {
      margin-bottom: 0;
    }
  `,

  elementBox: css`
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    padding: 2rem;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
  `,

  title: css`
    ${TEXT.TITLE1_B2832}
    margin-bottom:2rem;
  `,
};
