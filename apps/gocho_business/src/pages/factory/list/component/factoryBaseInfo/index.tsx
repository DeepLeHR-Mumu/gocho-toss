import { FunctionComponent } from "react";
import { FiMap } from "react-icons/fi";

import { COLORS } from "shared-style/color";

import { CommonRoundButton, CommonStatusChip } from "@/components/common";

import { cssObj } from "./style";
import { FactoryBaseInfoProps } from "./type";

export const FactoryBaseInfo: FunctionComponent<FactoryBaseInfoProps> = ({ register }) => (
  <>
    <div css={cssObj.inputContainer}>
      <input
        {...register("factory_name", { maxLength: 30, required: true })}
        css={cssObj.textInput}
        placeholder="공장이름"
      />
      <div css={cssObj.statusChip}>
        <CommonStatusChip status="등록전" />
      </div>
    </div>
    <div css={cssObj.inputContainer}>
      <CommonRoundButton
        Icon={FiMap}
        text="주소찾기"
        onClickHandler={() => alert("")}
        backgoundColor={COLORS.BLUE_FIRST30}
      />
      <input {...register("address", { required: true })} css={cssObj.textInput} placeholder="공장주소" />
    </div>
    <div css={cssObj.inputContainer}>
      <p css={cssObj.infoText}>생산품</p>
      <input
        {...register("product", { required: true, maxLength: 100 })}
        css={cssObj.textInput}
        placeholder="공장 주 생산품"
      />
    </div>
  </>
);
