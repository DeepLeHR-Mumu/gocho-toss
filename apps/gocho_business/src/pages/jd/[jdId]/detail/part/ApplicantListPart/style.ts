import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    > div {
      :last-of-type {
        margin: 0;
      }
    }
  `,

  customButton: css`
    ${TEXT.TITLE6_B1418}
  `,

  customOutlineButton: css`
    color: ${COLOR.BLUE300};
    ${TEXT.TITLE6_B1418}
  `,

  top: css`
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  `,

  applicantListTable: css`
    width: 100%;
    table-layout: fixed;

    th {
      text-align: left;
      padding: 1rem;
      border-bottom: 2px solid ${COLOR.GRAY200};
      ${TEXT.TITLE6_M1418}

      :first-of-type {
        padding-right: 0;
        width: 2.5rem;
        vertical-align: bottom;

        > input {
          margin-top: 0;
        }
      }

      :nth-of-type(2) {
        width: 4rem;
        padding-left: 0.5rem;
      }

      :nth-of-type(3) {
        width: 8rem;
      }

      :nth-of-type(4) {
        width: 7.5rem;
      }

      :nth-of-type(5) {
        width: 22.5rem;
      }

      :nth-of-type(6) {
        width: 8rem;
      }

      :nth-of-type(7) {
        width: 6.5rem;
      }
    }

    td {
      padding: 1rem;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-bottom: 1px solid ${COLOR.GRAY200};
      ${TEXT.BODY3_R1422}

      :last-of-type {
        text-align: right;
        text-overflow: unset;
        overflow: visible;

        > button {
          display: inline;
        }
      }
    }
  `,

  unread: css`
    color: ${COLOR.RED200};
  `,

  noApplicant: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    height: 11.25rem;
    color: ${COLOR.GRAY600};
    ${TEXT.BODY2_R1624}
  `,

  checkResumeButton: css`
    color: ${COLOR.BLUE300};
  `,

  orderWrapper: (order: "recent" | "read" | "unread") => css`
    display: inline-block;
    margin-left: 0.625rem;

    > button {
      padding-bottom: 0.25rem;
      :first-of-type {
        > svg {
          > path {
            ${order === "recent" && `fill: ${COLOR.GRAY450}`};
            ${order === "read" && `fill: ${COLOR.GRAY450}`};
            ${order === "unread" && `fill: ${COLOR.GRAY200}`};
          }
        }
      }

      :last-of-type {
        > svg {
          > path {
            ${order === "recent" && `fill: ${COLOR.GRAY450}`};
            ${order === "read" && `fill: ${COLOR.GRAY200}`};
            ${order === "unread" && `fill: ${COLOR.GRAY450}`};
          }
        }
      }
    }
  `,
};
