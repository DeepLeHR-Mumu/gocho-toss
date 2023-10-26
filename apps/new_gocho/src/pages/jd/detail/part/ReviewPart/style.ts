import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    width: 100%;
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    position: sticky;
    top: 15rem;
    right: 0;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
  `,

  headerWrapper: css`
    padding: 1rem;
    border-radius: 1rem 1rem 0 0;
    background-color: ${COLOR.WHITE};
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
    ${TEXT.TITLE5_B1620}
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
    color: ${COLOR.BLACK};
  `,

  alertHoverBox: css`
    width: 15.375rem;
    position: absolute;
    z-index: 20;
    top: 2rem;
    right: 0;
    padding: 0.75rem 1rem;
    background-color: ${COLOR.BLUE100};
    border-radius: 1rem;
    border: 1px solid ${COLOR.BLUE200};
    ${TEXT.BODY3_R1422}
  `,

  loginDesc: css`
    position: absolute;
    text-align: center;
    top: 45%;
    left: 3rem;
    z-index: 20;
    color: ${COLOR.BLACK};
    ${TEXT.BODY2_R1624}
  `,

  contentsWrapper: (blurred: boolean) => css`
    padding: 1.125rem 1rem 1rem;
    background-color: ${COLOR.GRAY100};
    height: 17rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    ${blurred && "-webkit-filter: blur(10px); filter: blur(10px);"}
  `,

  noComment: css`
    margin: auto;
    text-align: center;
    color: ${COLOR.GRAY600};
    ${TEXT.BODY3_R1422}
  `,

  footerWrapper: css`
    padding: 1rem;
    border-radius: 0 0 1rem 1rem;
    background-color: ${COLOR.WHITE};

    > h5 {
      padding-bottom: 0.75rem;
      ${TEXT.TITLE6_B1418}
    }

    :focus-within {
      svg {
        color: ${COLOR.BLUE200};
      }
    }
  `,

  commentInput: css`
    ${TEXT.BODY3_R1422};
  `,

  sendIcon: css`
    -ms-transform: rotate(-90deg); /* IE 9 */
    -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
    transform: rotate(-90deg);
    color: ${COLOR.GRAY450};
  `,
};
