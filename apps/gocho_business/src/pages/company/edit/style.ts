import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  contentWrapper: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  partContainer: css`
    flex-grow: 1;
    background-color: ${NEWCOLORS.WHITE};
    padding: 2rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  spinner: css`
    position: relative;
    width: 100%;
    height: 100vh;
  `,

  wrapper: css`
    margin-top: 2rem;
  `,

  container: css``,

  header: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 5.5rem;
  `,

  title: css`
    font-size: 1.25rem;
    font-weight: 700;
  `,

  desc: css`
    font-size: 1rem;
    font-weight: 400;
  `,

  topButtonBox: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 28.625rem;
  `,

  sharedButtonBox: css`
    margin: auto;
    width: 100%;
    max-width: 25rem;
  `,

  companyInfoBox: css`
    padding: 2rem;
  `,
};
