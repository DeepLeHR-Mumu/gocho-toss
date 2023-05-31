import { FunctionComponent } from "react";

import { cssObj } from "./style";

export const HeaderPart: FunctionComponent = () => (
  <section css={cssObj.headerContainer}>
    <div css={cssObj.buttonContainer}>
      <button type="submit" css={cssObj.saveButton}>
        임시 저장
      </button>
      <button type="submit" css={cssObj.submitButton}>
        검수 요청
      </button>
    </div>
  </section>
);
