import { Input } from "shared-ui/deeple-ds";
import { cssObj } from "./style";

export const PwdChangeForm = () => {
  return (
    <form css={cssObj.formBox}>
      <div css={cssObj.inputBox}>
        <p>기존 비밀번호</p>
        <Input type="password" css={cssObj.inputBox} placeholder="기존의 비밀번호를 입력해 주세요" />
      </div>
      <div css={cssObj.inputBox}>
        <p>새로운 비밀번호</p>
        <Input type="password" css={cssObj.inputBox} placeholder="새로운 비밀번호를 입력해 주세요" />
      </div>
      <div css={cssObj.inputBox}>
        <p>비밀번호 확인</p>
        <Input type="password" css={cssObj.inputBox} placeholder="한번 더 새로운 비밀번호를 입력해 주세요" />
      </div>
    </form>
  );
};
