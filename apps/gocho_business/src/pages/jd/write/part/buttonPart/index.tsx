import { FunctionComponent } from "react";

import { SharedButton } from "shared-ui/common/sharedButton";
import { cssObj } from "./style";

export const ButtonPart: FunctionComponent = () => (
  <section css={cssObj.headerContainer}>
    <div css={cssObj.buttonContainer}>
      <SharedButton buttonType="fillBlue" width={8.75} text="검수 요청" onClickHandler="submit" />
    </div>
  </section>
);
