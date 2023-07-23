import { FunctionComponent } from "react";

import { NewSharedButton } from "shared-ui/common/newSharedButton";
import { cssObj } from "./style";
import { ButtonPartProps } from "./type";

export const ButtonPart: FunctionComponent<ButtonPartProps> = ({ disabled }) => (
  <section css={cssObj.headerContainer}>
    <div css={cssObj.buttonContainer}>
      <NewSharedButton
        buttonType={disabled ? "disabled" : "fillBlue"}
        width={8.75}
        text="수정 요청"
        onClickHandler="submit"
      />
    </div>
  </section>
);
