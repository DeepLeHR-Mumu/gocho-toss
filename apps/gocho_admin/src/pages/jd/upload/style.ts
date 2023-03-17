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
      margin-bottom: 1rem;
      background-color: ${COLORS.GRAY95};
      position: relative;
      overflow: hidden;

      ::before {
        position: absolute;
        width: 1.875rem;
        height: 1.875rem;
        background-color: ${COLORS.BLUE_FIRST40};
        left: -0.9375rem;
        top: -0.9375rem;
        content: "";
        transform: rotate(45deg);
      }

      :last-of-type {
        margin-bottom: 0;
      }
    }
  `,
  buttonBox: css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2rem;
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
