import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    padding: 2rem;
    width: 100%;
    background-color: ${COLOR.WHITE};
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
  `,

  headerWrapper: css`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid ${COLOR.GRAY700};
  `,

  require: css`
    color: ${COLOR.RED200};
  `,

  icon: css`
    width: 1.25rem;
    height: 1.25rem;
  `,

  titleWrapper: css`
    display: flex;
    gap: 0.5rem;
    ${NEWTEXTS.TITLE2_B2428}
  `,
};
