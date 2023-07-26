import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  container: css`
    margin-top: 2rem;
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem 0;
    min-height: calc(100vh - 25rem);
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
    color: ${NEWCOLORS.BLACK};
    font-size: 2.25rem;
  `,

  catchPhraseContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  catchPhrase: css`
    color: ${NEWCOLORS.BLACK};
  `,
};
