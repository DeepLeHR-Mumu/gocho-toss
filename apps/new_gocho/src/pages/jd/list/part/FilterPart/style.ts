import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  titleWrapper: css`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    > h3 {
      ${NEWTEXTS.DISPLAY1_B4044}
    }

    > span {
      margin-left: 1.75rem;
      color: ${COLOR.GRAY600};
      ${NEWTEXTS.TITLE4_M1822}
    }

    > button {
      margin-left: auto;
      color: ${COLOR.GRAY600};
      ${NEWTEXTS.TITLE4_M1822}

      :hover {
        color: ${COLOR.BLUE300};
      }
    }
  `,

  wrapper: css`
    border-radius: 0.5rem;
    background-color: ${COLOR.WHITE};
    border: 1px solid ${COLOR.GRAY450};
    display: flex;
    flex-direction: row;
    overflow: hidden;
  `,

  header: css`
    background-color: ${COLOR.GRAY50};
    display: flex;
    flex-direction: row;

    > h5 {
      padding: 1.0625rem 1rem;
    }
  `,

  column: css`
    border-right: 1px solid ${COLOR.GRAY200};
    flex: 1;
    > h5 {
      padding: 1.0625rem 1rem;
      background-color: ${COLOR.GRAY50};
      ${NEWTEXTS.TITLE4_B1822}
    }

    ul {
      height: 16.5rem;
      overflow: auto;
    }
  `,

  title: css`
    ${NEWTEXTS.DISPLAY1_B4044}
  `,

  filter: css`
    display: block;
    text-align: left;
    padding: 0.625rem 1rem;
    width: 100%;
    ${NEWTEXTS.TITLE5_M1620}

    :hover {
      color: ${COLOR.BLUE300};
      ${NEWTEXTS.TITLE5_M1620}
    }
  `,

  appliedFilter: css`
    color: ${COLOR.BLUE300};
    background-color: ${COLOR.BLUE50};
    ${NEWTEXTS.TITLE5_M1620}
  `,

  filterStatus: css`
    margin-top: 1rem;
    padding: 1.75rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${COLOR.GRAY450};
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
    color: ${COLOR.BLUE300};
    ${NEWTEXTS.TITLE5_M1620}

    > svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${COLOR.GRAY450};
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
      color: ${COLOR.GRAY600};
      ${NEWTEXTS.TITLE6_M1418}

      svg {
        margin-right: 0.25rem;
      }
    }
  `,

  filterButton: css`
    width: fit-content;
  `,
};
