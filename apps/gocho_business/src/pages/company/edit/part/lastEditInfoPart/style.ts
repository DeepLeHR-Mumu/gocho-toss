import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  spinnerBox: css`
    position: relative;
  `,
  wrapper: css`
    display: flex;
    align-items: center;
    background-color: ${COLORS.GRAY95};
    padding: 1.125rem;
    border-radius: 0.625rem;
    font-size: 0.875rem;
    margin-bottom: 2.5rem;

    > svg {
      color: ${COLORS.GRAY35};
    }
  `,
  companionWrapper: css`
    display: flex;
    align-items: center;
    background-color: #fff7e6;
    padding: 1.125rem;
    border-radius: 0.625rem;
    font-size: 0.875rem;
    margin-bottom: 2.5rem;

    > svg {
      color: #fa541c;
    }
  `,
  desc: css`
    color: ${COLORS.GRAY35};
    position: relative;
    padding: 0 0.5rem;
    margin-right: 0.5rem;

    ::after {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      height: 1rem;
      width: 1px;
      background-color: ${COLORS.GRAY35};
      content: "";
    }
  `,
  companionDesc: css`
    color: #fa541c;
    position: relative;
    padding: 0 0.5rem;
    margin-right: 0.5rem;

    ::after {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      height: 1rem;
      width: 1px;
      background-color: #fa541c;
      content: "";
    }
  `,
  dateInfo: css`
    padding-left: 0.5rem;
  `,
  userInfo: css`
    display: flex;
    align-items: center;
    color: ${COLORS.GRAY35};

    > svg {
      color: ${COLORS.GRAY30};
      margin: 0 0.375rem 0 0.625rem;
    }
  `,
};
