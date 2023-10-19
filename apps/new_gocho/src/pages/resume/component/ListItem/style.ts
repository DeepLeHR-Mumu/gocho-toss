import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    padding: 2rem 0;
    border-bottom: 1px solid ${COLOR.GRAY200};
    :last-of-type {
      padding: 2rem 0 0 0;
      border-bottom: none;
    }
  `,

  headerWrapper: css`
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.75rem;
  `,

  iconWrapper: css`
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
  `,

  require: css`
    color: ${COLOR.RED200};
  `,

  icon: css`
    width: 1.25rem;
    height: 1.25rem;
    color: ${COLOR.GRAY450};
  `,

  titleWrapper: css`
    display: flex;
  `,

  title: css`
    ${TEXT.TITLE4_B1822};
    line-height: 1.375rem;
    margin-right: 1rem;
  `,
  titelDes: css`
    ${TEXT.BODY2_R1624};
    color: ${COLOR.GRAY500};
    line-height: 1.25rem;
    margin-right: 0.5rem;
  `,

  description: css`
    ${TEXT.TITLE5_M1620};
    margin-bottom: 1rem;
  `,

  date: css`
    ${TEXT.BODY2_R1624};
    color: ${COLOR.GRAY700};
  `,

  uTurnImage: css`
    border-radius: 50%;
    background-color: ${COLOR.BLUE100};
  `,
};
