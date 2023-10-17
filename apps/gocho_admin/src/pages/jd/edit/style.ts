import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { subPageTitle } from "@/style";

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
        border-left: 3px solid ${COLOR.BLUE200};
      }
      :last-child {
        border-left: 3px solid ${COLOR.YELLOW100};
      }
    }
  `,
  formContainer: css``,
  fieldArrCSS: css`
    margin-bottom: 3rem;

    > li {
      border: 1px solid ${COLOR.GRAY300};
      padding: 2rem;
      margin-bottom: 1rem;
      background-color: ${COLOR.WHITE};
      position: relative;
      overflow: hidden;

      ::before {
        position: absolute;
        width: 1.875rem;
        height: 1.875rem;
        background-color: ${COLOR.BLUE300};
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
    border: 1px solid ${COLOR.YELLOW100};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLOR.RED300};
    background-color: ${COLOR.YELLOW100};
    padding: 1.25rem;
    margin: 1.25rem 0;
    font-size: 1rem;
    font-weight: 400;
  `,
};
