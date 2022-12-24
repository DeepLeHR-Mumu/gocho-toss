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
  inputContainer: css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  `,

  addrOpener: css`
    width: 100%;
  `,
  statusChip: css`
    flex-shrink: 0;
  `,
  textInput: css`
    border: 1px solid #000000;
    padding: 0.5rem 1rem;
    width: 100%;
  `,
  alignContainer: css`
    display: flex;
    justify-content: center;
    :first-of-type {
      margin-top: 3rem;
      margin-bottom: 2.625rem;
    }
  `,
  infoText: css`
    font-weight: 700;
  `,
  infoContainer: css`
    display: flex;
    align-items: center;
  `,
  infoBox: css`
    width: 47%;
  `,
  iconBox: css`
    font-size: 1.5rem;
    margin-right: 1rem;
  `,
  manWomanContainer: css`
    display: flex;
    align-items: center;
  `,
  manWomanInput: css`
    width: 5rem;
    border: 1px solid #000000;
    padding: 0.5rem 1rem;
  `,
  womanIconBox: css`
    font-size: 1.5rem;
    margin-right: 0.5rem;
    margin-left: 1rem;
  `,
};
