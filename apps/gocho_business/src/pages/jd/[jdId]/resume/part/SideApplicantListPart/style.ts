import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    max-width: 12.5rem;
    flex-basis: 12.5rem;
    flex-shrink: 0;
  `,

  applicantListContainer: css`
    border-radius: 0.5rem;
    background-color: ${COLOR.WHITE};
    padding: 1.5rem 0.75rem;
    position: sticky;
    top: 2.5rem;
  `,

  listWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 1.25rem;
  `,

  listItem: (selected: boolean) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 0.25rem 1rem 0.25rem 0.625rem;
    background-color: ${selected ? COLOR.BLUE100 : COLOR.WHITE};

    > p {
      max-width: 7rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      ${NEWTEXTS.TITLE6_B1418}
    }
  `,

  redDot: (isRead: boolean) => css`
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background-color: ${isRead ? COLOR.BLUE100 : COLOR.RED200};
  `,

  paginationWrapper: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  `,

  paginationButton: css`
    border: 1px solid ${COLOR.GRAY200};
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 2.25rem;

    > svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${COLOR.GRAY600};
    }
  `,

  hiddenElement: css`
    width: 2.25rem;
    height: 2.25rem;
    background-color: transparent;
  `,
};
