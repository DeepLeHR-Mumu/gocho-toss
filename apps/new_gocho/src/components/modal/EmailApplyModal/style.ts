import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    gap: 4rem;
  `,

  link: css`
    border-radius: 0.5rem;
    border: 1px solid ${COLOR.GRAY200};
    padding: 0.875rem 1.25rem 0.875rem 1.25rem;
    flex-grow: 1;
    ${TEXT.TITLE5_M1620}
  `,

  button: (buttonType: string) => css`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin: 0 auto;
    background-color: ${buttonType === "copy" ? COLOR.BLUE200 : COLOR.BLACK};
    color: ${COLOR.BLUE300};

    > svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${COLOR.WHITE};
    }
  `,

  desc: css`
    ${TEXT.BODY3_R1422};
    color: ${COLOR.GRAY600};
    margin-top: 0.5rem;
  `,
};
