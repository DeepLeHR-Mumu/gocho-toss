import { FunctionComponent } from "react";

import { cssObj } from "./style";

export const ButtonPart: FunctionComponent = () => (
  <section css={cssObj.headerContainer}>
    <div css={cssObj.buttonContainer}>
      <button type="submit" css={cssObj.submitButton}>
        검수 요청
      </button>
    </div>
  </section>
);
