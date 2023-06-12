import { FunctionComponent } from "react";

import { cssObj } from "./style";

export const HeaderPart: FunctionComponent = () => (
  <section css={cssObj.headerContainer}>
    <div css={cssObj.buttonContainer}>검수 요청</div>
  </section>
);
