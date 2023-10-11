import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";

export const cssObj = {
  wrapper: css``,
  title: css`
    font-size: 1.25rem;
    font-weight: 500;
    color: ${COLOR.GRAY900};
    margin-bottom: 1rem;
    display: block;
  `,
  container: css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 0 3rem;
  `,
  formBox: css`
    width: 100%;
    max-width: 40rem;

    > li {
      margin-bottom: 2rem;
    }
  `,
  requiredTitle: css`
    font-size: 1.125rem;
    font-weight: 500;
    color: ${COLOR.GRAY700};
    margin-bottom: 1rem;
    display: block;
    padding-left: 0.5rem;
    border-left: 3px solid ${COLOR.BLUE200};
  `,
  noRequiredTitle: css`
    font-size: 1.125rem;
    font-weight: 500;
    color: ${COLOR.GRAY700};
    margin-bottom: 1rem;
    display: block;
    padding-left: 0.5rem;
    border-left: 3px solid ${COLOR.YELLOW100};
  `,
  subTitle: css`
    font-size: 1rem;
    font-weight: 500;
    color: ${COLOR.GRAY900};
    display: block;
    margin: 2rem 0 1rem;
  `,
  textareaBox: css`
    display: flex;
    flex-direction: column;
  `,
  textareaWarning: css`
    background-color: ${COLOR.BLUE200};
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    color: ${COLOR.BLUE300};
    width: fit-content;
    margin: 0.25rem 0;
  `,
  textarea: css`
    width: 100%;
    padding: 1rem;
    max-width: 40rem;
    border-radius: 0.625rem;
    border: 1px solid ${COLOR.GRAY900};
    font-size: 1rem;
    color: ${COLOR.GRAY900};
    min-height: 8rem;
  `,
  warningDesc: css`
    display: block;
    color: ${COLOR.BLUE300};
    font-size: 0.875rem;
    font-weight: 400;
    padding: 0.5rem 0;
  `,
  flexBox: css`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;
  `,
  inputCSS: css`
    width: 100%;
    max-width: 40rem;
    border: 1px solid ${COLOR.GRAY900};
    background-color: ${COLOR.WHITE};
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.625rem;
    height: 2.5rem;
    color: ${COLOR.GRAY900};
    margin-right: 1rem;
  `,
  isHaveCertiButton: css`
    font-size: 0.875rem;
    color: ${COLOR.BLUE300};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      margin-right: 0.25rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${COLOR.BLUE300};
    }
  `,
  certiButton: css`
    font-size: 0.875rem;
    color: ${COLOR.GRAY900};
    padding: 0.5rem;
    > div {
      margin-right: 0.25rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${COLOR.WHITE};
      border: 1px solid ${COLOR.GRAY900};
    }
  `,
  gridBox: css`
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 20% 20% 20% 20%;
    white-space: nowrap;
  `,
  deleteButton: css`
    background-color: ${COLOR.BLUE300};
    padding: 0.25rem 1rem;
    width: fit-content;
    border-radius: 0.3125rem;
    font-size: 0.875rem;
    color: ${COLOR.WHITE};
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLOR.WHITE};
    transition: all 200ms ease-in;

    :hover {
      background-color: ${COLOR.RED300};
    }

    > svg {
      margin-left: 0.25rem;
    }
  `,
  buttonBox: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  `,
};
