import { css } from "@emotion/react";
import { TEMP } from "shared-style/mediaQuery";

export const cssObj = {
  wrapper: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  emailWrapper: css`
    width: 100%;
    padding: 1.25rem 0.5rem 0 0.5rem;
    margin-bottom: 20.625rem;

    ${TEMP} {
      padding: 1rem;
      margin-bottom: 0.75rem;
    }
  `,

  buttonGroupWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${TEMP} {
      width: 100%;
      padding: 0 1rem;
    }
  `,

  mobileDivider: css`
    display: none;

    ${TEMP} {
      display: block;
      width: 100%;
    }
  `,
};
