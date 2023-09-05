import { FunctionComponent } from "react";

import { Button, Input } from "shared-ui/deeple-ds";

import { NickChangeFormProps } from "./type";
import { cssObj } from "./style";

export const NickChangeForm: FunctionComponent<NickChangeFormProps> = ({ userData, handleNickFormOpen }) => {
  return (
    <form css={cssObj.formBox}>
      <Input type="text" value={userData?.nickname} css={cssObj.inputBox} />
      <div css={cssObj.buttonBox}>
        <Button size="small" type="submit">
          저장
        </Button>
        <Button size="small" color="outlineGray" type="button" onClick={handleNickFormOpen}>
          취소
        </Button>
      </div>
    </form>
  );
};
