import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cssObj = {
  spinner: css``,
  wrapper: css`
    background-color: #edf1fb;
    padding: 2rem;
    border-radius: 1.5rem;
    margin-bottom: 2.5rem;
  `,
  topBox: css`
    display: grid;
    grid-template-columns: 6.5rem 1fr auto;
    align-items: center;
    margin-bottom: 2rem;
  `,
  logoBox: css`
    position: relative;
    width: 5rem;
    height: 5rem;
    border-radius: 0.75rem;
    background-color: ${COLORS.GRAY100};
    border: 8px solid ${COLORS.GRAY100};

    > img {
      object-fit: contain;
    }
  `,
  titleBox: css`
    padding-right: 1rem;
    overflow: hidden;
  `,
  companyTitle: css`
    display: block;
    font-size: 1.25rem;
    line-height: 2;
    font-weight: 700;
    ${shorten()};
  `,
  companyIndustry: css`
    padding-left: 1rem;
    font-size: 1rem;
    color: ${COLORS.GRAY30};
  `,
  countBox: css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
  `,
  countLine: css`
    position: relative;
    padding: 0 2rem;

    :after {
      content: "";
      position: absolute;
      width: 1px;
      height: 50%;
      background-color: ${COLORS.GRAY70};
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
    }

    :last-of-type {
      :after {
        display: none;
      }
    }
  `,
  countTitle: css`
    font-size: 1rem;
    color: ${COLORS.GRAY60};
    font-weight: 700;
    margin-bottom: 0.5rem;
    display: block;
  `,
  countDesc: css`
    display: flex;
    align-items: center;
    font-size: 1rem;

    > svg {
      color: ${COLORS.GRAY60};
      font-size: 1.125rem;
      margin-right: 0.5rem;
    }
  `,
  colorPoint: css`
    line-height: 1;
    color: ${COLORS.BLUE_FIRST30};
  `,
  bottomBox: css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    > li {
      position: relative;
      padding: 0 6.25rem;

      :after {
        content: "";
        position: absolute;
        width: 1px;
        height: 50%;
        background-color: ${COLORS.GRAY70};
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
      }

      :last-of-type {
        :after {
          display: none;
        }
      }
    }
  `,
  subTitle: css`
    display: block;
    font-size: 1rem;
    margin-bottom: 0.75rem;
  `,
  subDesc: css``,
};
