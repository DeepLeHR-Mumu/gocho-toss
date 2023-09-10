import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  welfareWrapper: css`
    margin-top: 0.75rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 3.5rem;
    grid-column-gap: 2.8125rem;
  `,

  itemWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1.675rem;
  `,

  welfareTitle: css`
    ${NEWTEXTS.TITLE12}
  `,

  welfareDescription: css`
    width: 100%;
    max-height: 3rem;
    margin-top: 1rem;
    overflow-y: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    ${NEWTEXTS.BODY4};
  `,
};
