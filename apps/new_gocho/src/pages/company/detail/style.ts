import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  background: css`
    background-color: ${COLOR.GRAY100};
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,

  wrapper: css`
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  `,
};

export const commonCssObj = {
  box: css`
    border-radius: 1rem;
    padding: 2rem 1.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    background-color: ${COLOR.WHITE};
    position: relative;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
  `,

  title: css`
    margin-bottom: 1.75rem;
    ${NEWTEXTS.TITLE1_B2832}
  `,
};
