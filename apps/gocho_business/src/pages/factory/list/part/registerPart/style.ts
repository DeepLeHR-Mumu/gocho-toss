import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  wrapper: css`
    width: 57.5rem;
    padding: 1.5rem;
    border: 1px solid ${COLORS.GRAY80};
    border-radius: 1.5rem;
  `,
  buttonCenterContainer: css`
    position: relative;
    /* background-color: pink; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
  `,

  buttonContainer: css`
    display: flex;
  `,
};
