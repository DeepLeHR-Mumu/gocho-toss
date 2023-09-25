import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    width: 100%;
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    position: sticky;
    top: 15rem;
    right: 0;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
  `,

  headerWrapper: css`
    padding: 1rem;
    border-radius: 1rem 1rem 0 0;
    background-color: ${NEWCOLORS.WHITE};
  `,

  companyWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  `,

  title: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${NEWTEXTS.TITLE9}
  `,

  chipsWrapper: css`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  `,

  alertWrapper: css`
    margin-left: auto;
    position: relative;
  `,

  alertIcon: css`
    width: 1rem;
    height: 1rem;
    color: ${NEWCOLORS.BLACK};
  `,

  alertHoverBox: css`
    width: 15.375rem;
    position: absolute;
    z-index: 20;
    top: 2rem;
    right: 0;
    padding: 0.75rem 1rem;
    background-color: ${NEWCOLORS.BLUE100};
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.BLUE200};
    ${NEWTEXTS.BODY2}
  `,

  contentsWrapper: (blurred: boolean) => css`
    padding: 1.125rem 1rem 1rem;
    background-color: ${NEWCOLORS.GRAY100};
    height: 20.5rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    ${blurred && "-webkit-filter: blur(3px); filter: blur(3px);"}
  `,

  noComment: css`
    margin: auto;
    text-align: center;
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.BODY2}
  `,

  footerWrapper: css`
    padding: 1rem;
    border-radius: 0 0 1rem 1rem;
    background-color: ${NEWCOLORS.WHITE};

    > h5 {
      padding-bottom: 0.75rem;
      ${NEWTEXTS.TITLE6}
    }

    :focus-within {
      svg {
        color: ${NEWCOLORS.BLUE200};
      }
    }
  `,

  commentInput: css`
    ${NEWTEXTS.BODY2};
  `,

  sendIcon: css`
    -ms-transform: rotate(-90deg); /* IE 9 */
    -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
    transform: rotate(-90deg);
    color: ${NEWCOLORS.GRAY300};
  `,
};
