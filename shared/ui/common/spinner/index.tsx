import { FunctionComponent } from "react";

import { cssObj } from "./style";

export const Spinner: FunctionComponent = () => (
  <div css={cssObj.wrapper}>
    <div css={cssObj.container}>
      <div css={cssObj.spinner} />
    </div>
  </div>
);
