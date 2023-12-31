import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  dateInputContainer: css`
    display: flex;
    align-items: center;
    gap: 0 1rem;
  `,

  dateWrapper: css`
    height: 3.25rem;
  `,

  errorMessageWrapper: css`
    margin-top: 0.25rem;
    height: 0;
  `,

  isAlwaysBlock: css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
    width: 17.5rem;
    height: 3.25rem;
    font-weight: 400;
    background-color: ${COLOR.GRAY300};
    color: ${COLOR.GRAY600};
  `,

  processBox: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
  `,

  deleteInputButton: css`
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${COLOR.BLACK};
    background-color: ${COLOR.GRAY300};
  `,

  icon: css`
    margin-top: 0.5rem;
    font-size: 1.5rem;
    color: ${COLOR.GRAY600};
  `,

  addButtonWrapper: css`
    margin-left: 0.5rem;
  `,

  linkLabelContainer: css`
    display: flex;
    align-items: center;
    gap: 0 2.5rem;
    margin-bottom: 1.5rem;
  `,

  linkButtonContainer: css`
    display: flex;
    align-items: center;
    gap: 0 1rem;
    margin-top: 1rem;
  `,

  externalLinkButton: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: ${COLOR.GRAY100};
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY600};

    > svg {
      color: ${COLOR.GRAY450};
    }
  `,
};
