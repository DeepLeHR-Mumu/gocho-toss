import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  container: css`
    margin-top: 4rem;
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 18.75rem);
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
    color: ${COLOR.BLACK};
    font-size: 2.25rem;
  `,

  catchPhraseContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  catchPhrase: css`
    color: ${COLOR.BLACK};
  `,

  linkContainer: css`
    display: flex;
    gap: 0 2rem;
  `,
};
