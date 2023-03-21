import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { subPageTitle } from "@/style/commonStyles";

export const cssObj = {
  wrapper: css``,
  title: css`
    ${subPageTitle};
  `,
  infoDesc: css`
    font-size: 1rem;
    margin-bottom: 2rem;
    > span {
      padding-left: 1rem;
      margin-right: 2rem;
      :first-of-type {
        border-left: 3px solid ${COLORS.BLUE_SECOND70};
      }
      :last-child {
        border-left: 3px solid ${COLORS.ERROR_YELLOW50};
      }
    }
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
    justify-content: flex-end;
    gap: 1rem;
    margin-bottom: 2rem;
  `,
  cardButtonBox: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
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
