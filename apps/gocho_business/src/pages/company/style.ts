import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    margin-top: 2rem;
  `,
  container: css``,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `,
  title: css`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${COLORS.GRAY10};
  `,
  desc: css`
    font-size: 1rem;
    font-weight: 400;
    color: ${COLORS.GRAY10};
  `,
  flexBox: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `,
  flexNormalBox: css`
    display: flex;
    align-items: flex-start;

    > div {
      :nth-of-type(1) {
        margin-right: 5rem;
      }
    }
  `,
  companyInfoBox: css`
    padding: 2rem;
  `,
  lineBox: css`
    margin-bottom: 1.5rem;
  `,
  subTitle: css`
    font-size: 1rem;
    font-weight: 700;
    color: ${COLORS.GRAY10};
    margin-bottom: 0.5rem;
    display: inline-block;
  `,
  textValue: css`
    font-size: 1rem;
    font-weight: 400;
    padding: 0.75rem 1rem;
    color: ${COLORS.GRAY10};
  `,
};
