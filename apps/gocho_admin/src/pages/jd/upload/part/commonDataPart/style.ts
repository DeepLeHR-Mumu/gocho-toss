import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css``,
  title: css`
    font-size: 1.25rem;
    font-weight: 500;
    color: ${COLORS.GRAY10};
    margin-bottom: 1rem;
    display: block;
  `,
  container: css`
    padding: 1rem;

    > li {
      margin-bottom: 1.25rem;
    }
  `,
  infoBox: css``,
  requiredTitle: css`
    font-size: 1.125rem;
    font-weight: 500;
    color: ${COLORS.GRAY20};
    margin-bottom: 1rem;
    display: block;
    padding-left: 0.5rem;
    border-left: 3px solid ${COLORS.BLUE_SECOND70};
  `,
  noRequiredTitle: css`
    font-size: 1.125rem;
    font-weight: 500;
    color: ${COLORS.GRAY20};
    margin-bottom: 1rem;
    display: block;
    padding-left: 0.5rem;
    border-left: 3px solid ${COLORS.ERROR_YELLOW50};
  `,
  flexFullBox: css`
    display: flex;
    align-items: center;
    padding: 1rem 0;
  `,
  dateBox: css`
    width: 100%;
    display: grid;
    grid-template-columns: 25% 25% 15% 15%;
    align-items: center;
    gap: 2rem;
  `,
  textareaBox: css`
    display: flex;
    flex-direction: column;
  `,
  textareaWarning: css`
    background-color: ${COLORS.BLUE_SECOND70};
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    color: ${COLORS.BLUE_FIRST40};
    width: fit-content;
    margin: 0.25rem 0;
  `,
  textarea: css`
    width: 100%;
    padding: 1rem;
    max-width: 40rem;
    border-radius: 0.625rem;
    border: 1px solid ${COLORS.GRAY10};
    font-size: 1rem;
    color: ${COLORS.GRAY10};
    min-height: 8rem;
  `,
  flexLiCSS: css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    > ul {
      width: 50%;
      > li {
        margin-bottom: 2rem;
      }
    }
  `,
  inputCSS: css`
    width: 100%;
    max-width: 40rem;
    border: 1px solid ${COLORS.GRAY10};
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.625rem;
    height: 2.5rem;
    color: ${COLORS.GRAY10};
    margin-right: 1rem;
  `,
  buttonCSS: css`
    background-color: ${COLORS.BLUE_FIRST40};
    color: ${COLORS.GRAY100};
    font-size: 1rem;
    width: fit-content;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    border-radius: 0.625rem;
  `,
  companySelectBox: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: baseline;
    gap: 1rem;

    p {
      font-size: 1rem;
      color: ${COLORS.GRAY20};
      padding-left: 0.25rem;
      padding: 0.25rem;
    }
  `,
};
