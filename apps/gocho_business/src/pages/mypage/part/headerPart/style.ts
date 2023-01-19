import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  spinner: css`
    position: relative;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid ${COLORS.GRAY65};
    height: 6.0625rem;
  `,
  wrapper: css`
    padding: 1.5rem 2rem;
    display: flex;
    background-color: ${COLORS.GRAY100};
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${COLORS.GRAY65};
  `,
  name: css`
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 700;
  `,
  profile: css`
    width: 3rem;
    height: 3rem;
    background-color: ${COLORS.GRAY70};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.75rem;
    border-radius: 50%;
    font-weight: 400;
    font-size: 1rem;
  `,
  deleteUserButton: css`
    font-size: 1rem;
    color: ${COLORS.GRAY30};
    text-decoration: underline;
  `,
};
