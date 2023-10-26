import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    margin-top: 2rem;
  `,

  profileImage: css`
    border-radius: 0.5rem;
    border: 1px solid ${COLOR.GRAY200};
    opacity: 0.84;
  `,

  profileBox: css`
    display: flex;
    gap: 1.5rem;
  `,

  etcBox: css`
    margin-top: 1.37rem;
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
  `,

  profileWrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  profileHeader: css`
    display: flex;
    gap: 0.5rem;
    align-items: end;

    & > h1 {
      ${TEXT.TITLE1_B2832};
    }

    & > p {
      ${TEXT.BODY2_R1624};
    }
  `,

  profileInfo: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > div {
      display: flex;
      align-items: center;

      gap: 0.5rem;
    }
  `,

  default: css`
    ${TEXT.TITLE5_M1620};
  `,

  placeholder: css`
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY600};
  `,

  etcWrapper: css`
    display: flex;
    gap: 0.75rem;
    align-items: center;
  `,

  etcHeader: css`
    ${TEXT.TITLE5_M1620};
  `,

  etcBody: css`
    ${TEXT.BODY2_R1624};
  `,
};
