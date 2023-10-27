import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  top: css`
    display: flex;
    flex-direction: row;
    margin-bottom: 0.875rem;
  `,

  onProgress: css`
    color: ${COLOR.BLUE250};
  `,

  expired: css`
    color: ${COLOR.GRAY600};
  `,

  jdIdLabel: css`
    margin-left: auto;
    color: ${COLOR.GRAY600};
  `,

  jdId: css`
    margin-left: 0.5rem;
    color: ${COLOR.GRAY800};
  `,

  title: css`
    margin-bottom: 0.875rem;
    ${TEXT.TITLE2_B2428}
  `,

  jdInfoWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 2rem;
  `,

  verticalDivider: css`
    border-right: 1px solid ${COLOR.GRAY200};
    min-height: 1rem;
  `,

  eachInfoWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    ${TEXT.BODY2_R1624}

    > span {
      :first-of-type {
        color: ${COLOR.GRAY600};
      }

      :last-of-type {
        color: ${COLOR.BLACK};
      }
    }
  `,

  jdControlContainer: css`
    border-radius: 0.75rem;
    background-color: ${COLOR.GRAY50};
    padding: 0.875rem 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  `,

  controlWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-right: 1rem;

    > button {
      color: ${COLOR.GRAY600};

      > svg {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
  `,

  customButton: css`
    width: 5.25rem;
    background-color: ${COLOR.WHITE};
  `,
};
