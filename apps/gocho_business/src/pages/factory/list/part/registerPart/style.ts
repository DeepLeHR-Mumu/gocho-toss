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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
  `,

  suibmitButtonContainer: css`
    ::before {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: calc(40%);
      height: 1px;
      content: "";
      background-color: ${COLORS.GRAY65};
    }
    ::after {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: calc(40%);
      height: 1px;
      content: "";
      background-color: ${COLORS.GRAY65};
    }
  `,
  editButtonContainer: css`
    display: flex;
    gap: 0 1.5rem;
    position: relative;
    width: 100%;
    justify-content: center;

    ::before {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: calc(35%);
      height: 1px;
      content: "";
      background-color: #cccccc;
    }
    ::after {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: calc(35%);
      height: 1px;
      content: "";
      background-color: #cccccc;
    }
  `,
};
