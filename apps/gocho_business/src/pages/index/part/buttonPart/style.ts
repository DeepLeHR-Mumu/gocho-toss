import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  partContainer: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  linkButton: (bgColor: string) => css`
    position: relative;
    display: block;
    width: 50%;
    height: 8.5rem;
    margin-bottom: 1.25rem;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: ${bgColor === "blue" ? `${COLOR.BLUE250}` : `${COLOR.WHITE}`};
    border: 1px solid ${COLOR.BLUE250};
  `,

  uploadTitle: (bgColor: string) => css`
    ${TEXT.TITLE1_B2832};
    color: ${bgColor === "blue" ? `${COLOR.BLUE250}` : `${COLOR.WHITE}`};
    margin-bottom: 0.5rem;
  `,

  helpTitle: css`
    ${TEXT.TITLE1_B2832};
    color: ${COLOR.BLUE250};
    margin-bottom: 0.5rem;
  `,

  helpSubtitle: (textColor: string) => css`
    ${TEXT.BODY2_R1624};
    color: ${textColor === "blue" ? `${COLOR.BLUE250}` : `${COLOR.WHITE}`};
    margin-bottom: 0.5rem;
  `,

  jdUploadImageBox: css`
    position: absolute;
    top: 0.2rem;
    right: 2rem;
    width: 7.5rem;
    height: 9rem;
    margin-right: 0.5rem;
    > img {
      object-fit: contain;
    }
  `,

  helpDesc: css`
    ${TEXT.TITLE7_M1218};
    color: ${COLOR.GRAY600};
  `,
};
