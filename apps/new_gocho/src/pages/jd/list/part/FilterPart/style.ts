import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  titleWrapper: css`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    > h3 {
      ${NEWTEXTS.TITLE16}
    }

    > span {
      margin-left: 1.75rem;
      color: ${NEWCOLORS.BLUEGRAY400};
      ${NEWTEXTS.TITLE11}
    }

    > button {
      margin-left: auto;
      color: ${NEWCOLORS.BLUEGRAY400};
      ${NEWTEXTS.TITLE11}

      :hover {
        color: ${NEWCOLORS.BLUE300};
      }
    }
  `,

  wrapper: css`
    border-radius: 0.5rem;
    background-color: ${NEWCOLORS.WHITE};
    border: 1px solid ${NEWCOLORS.GRAY300};
    display: flex;
    flex-direction: row;
    overflow: hidden;
  `,

  header: css`
    background-color: ${NEWCOLORS.GRAY50};
    display: flex;
    flex-direction: row;

    > h5 {
      padding: 1.0625rem 1rem;
    }
  `,

  column: css`
    border-right: 1px solid ${NEWCOLORS.GRAY200};
    flex: 1;
    > h5 {
      padding: 1.0625rem 1rem;
      background-color: ${NEWCOLORS.GRAY50};
      ${NEWTEXTS.TITLE12}
    }

    ul {
      height: 16.5rem;
      overflow: auto;
    }
  `,

  title: css`
    ${NEWTEXTS.TITLE16}
  `,

  filter: css`
    display: block;
    text-align: left;
    padding: 0.625rem 1rem;
    width: 100%;
    ${NEWTEXTS.TITLE7}

    :hover {
      color: ${NEWCOLORS.BLUE300};
      ${NEWTEXTS.TITLE8}
    }
  `,

  appliedFilter: css`
    color: ${NEWCOLORS.BLUE300};
    background-color: ${NEWCOLORS.BLUE50};
    ${NEWTEXTS.TITLE8}
  `,

  filterStatus: css`
    margin-top: 1rem;
    padding: 1.75rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${NEWCOLORS.GRAY300};
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  filterDeleteWrapper: css`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 1.25rem;
  `,

  filterDelete: css`
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: ${NEWCOLORS.BLUE300};
    ${NEWTEXTS.TITLE8}

    > svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  filterSaveWrapper: css`
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    gap: 1.625rem;
    padding-left: 2.5rem;
    margin-left: auto;

    button:nth-child(1),
    button:nth-child(2) {
      color: ${NEWCOLORS.BLUEGRAY400};
      ${NEWTEXTS.TITLE4}

      svg {
        margin-right: 0.25rem;
      }
    }
  `,

  filterButton: css`
    width: fit-content;
  `,
};
