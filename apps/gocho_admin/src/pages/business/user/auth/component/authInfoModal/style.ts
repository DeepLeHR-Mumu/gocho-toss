import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  modalContainer: css`
    width: 50rem;
    height: 40rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    overflow: auto;
  `,

  title: css`
    padding: 1rem;
    font-size: 1.3rem;
  `,

  customTable: css`
    border-spacing: 1rem;
    border-collapse: separate;
    width: 100%;
  `,

  flexRow: css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  `,

  download: css`
    color: ${COLORS.BLUE_FIRST30};
  `,

  customUl: css`
    list-style-position: inside;
  `,

  label: css`
    flex: 0.2;
  `,

  customLi: css`
    &::marker {
      content: "- ";
x    }
  `,

  rejectContainer: css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    margin: 1rem;
  `,

  rejectReason: css`
    width: 15rem;
    height: 5rem;
  `,

  buttonGroup: css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-bottom: 1rem;
  `,

  customButton: css`
    border: 1px solid ${COLORS.BLUE_FIRST30};
    background-color: ${COLORS.BLUE_FIRST50};
    color: white;
    border-radius: 6px;
    width: 6rem;
    height: 3rem;
  `,
};
