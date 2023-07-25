import { FunctionComponent } from "react";

import { NewSharedButton } from "shared-ui/common/newSharedButton";
import { cssObj } from "./style";

export const ButtonPart: FunctionComponent = () => (
  <section css={cssObj.headerContainer}>
    <div css={cssObj.buttonContainer}>
      <NewSharedButton buttonType="fillBlue" width={8.75} text="검수 요청" onClickHandler="submit" />
    </div>
  </section>
);
