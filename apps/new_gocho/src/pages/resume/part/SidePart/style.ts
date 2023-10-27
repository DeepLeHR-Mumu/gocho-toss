import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: sticky;
    top: 11.25rem;
    align-items: center;
  `,

  contentsIndexWrapper: css`
    width: 10.5rem;

    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    background-color: ${COLOR.WHITE};
    padding: 2rem 1.25rem;
  `,

  contentsIndexList: css`
    > li {
      color: ${COLOR.GRAY600};
      margin-bottom: 1.25rem;
      ${TEXT.TITLE5_M1620}

      ::before {
        content: "";
        border-radius: 50%;
        background-color: ${COLOR.GRAY200};
        display: inline-block;
        width: 0.75rem;
        height: 0.75rem;
        margin-right: 0.5rem;
      }

      :last-child {
        margin-bottom: 0;
      }
    }
  `,

  previewButton: css`
    width: 10.5rem;

    background-color: ${COLOR.WHITE};
  `,

  previewText: css`
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.BLUE300};
  `,
};
