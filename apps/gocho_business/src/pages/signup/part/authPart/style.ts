import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  formWrapper: css`
    height: 30.5rem;
  `,

  authWrapper: css`
    border-radius: 1rem;
    padding: 1.25rem 1rem;
    margin-bottom: 2rem;
    border: 1px solid ${COLOR.BLUE200};
    background-color: ${COLOR.BLUE50};
  `,

  authLink: css`
    ${TEXT.TITLE4_B1822};
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    width: 100%;
    margin-bottom: 1rem;
  `,

  icon: css`
    display: flex;
    align-items: center;
    color: ${COLOR.BLUE200};
  `,

  desc: css`
    color: ${COLOR.GRAY600};
    ${TEXT.BODY3_R1422};
  `,

  inputWrapper: css`
    position: relative;
    margin-bottom: 2rem;
  `,

  inputTitle: css`
    ${TEXT.TITLE5_B1620};
    color: ${COLOR.GRAY600};
    margin-bottom: 0.75rem;
  `,

  termBox: css`
    ${TEXT.TITLE5_M1620};
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    margin-bottom: 0.75rem;
  `,

  termLink: css`
    color: ${COLOR.GRAY600};
    text-decoration: underline;
  `,

  errorMessage: css`
    ${TEXT.BODY3_R1422};
    color: ${COLOR.RED300};
    margin-top: 1.5rem;
    text-align: center;
  `,
};
