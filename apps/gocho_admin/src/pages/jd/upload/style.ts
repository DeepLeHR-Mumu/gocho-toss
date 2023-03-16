import { css } from "@emotion/react";

import { subPageTitle } from "@style/commonStyles";
import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css``,
  title: css`
    ${subPageTitle};
  `,
  formContainer: css``,
  fieldArrCSS: css`
    margin-bottom: 3rem;

    > li {
      border: 1px solid ${COLORS.GRAY70};
      padding: 2rem;
      background-color: ${COLORS.GRAY90};
    }
  `,
  buttonBox: css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    min-height: 8rem;
    margin-bottom: 3.75rem;
  `,
  warning: css`
    width: 100%;
    border: 1px solid ${COLORS.ERROR_YELLOW50};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.ERROR_RED30};
    background-color: ${COLORS.ERROR_YELLOW70};
    padding: 1.25rem;
    margin: 1.25rem 0;
    font-size: 1rem;
    font-weight: 400;
  `,
};
