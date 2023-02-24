import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  container: css`
    margin-top: 2rem;
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem 0;
  `,
  jobiImage: css`
    position: relative;
    width: 11.875rem;
    height: 17.5rem;

    > img {
      object-fit: contain;
    }
  `,
  title: css`
    color: ${COLORS.GRAY10};
    font-size: 2.25rem;
  `,
  catchPhraseContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  catchPhrase: css`
    color: ${COLORS.GRAY10};
  `,
};
