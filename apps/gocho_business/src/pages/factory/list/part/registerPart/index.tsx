import { FunctionComponent } from "react";

import { CommonStatusChip } from "@/components/common";

import { cssObj } from "./style";

export const RegisterPart: FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const history = 1;
  return (
    <>
      <h1>공장 목록</h1>
      <section>
        <div>간단히 공장을 등록해보세요.</div>
        <div css={cssObj.container}>
          <section css={cssObj.wrapper}>
            <form>
              <div css={cssObj.nameContainer}>
                <input css={cssObj.nameInput} placeholder="공장이름" />
                <CommonStatusChip status="등록전" />
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};
