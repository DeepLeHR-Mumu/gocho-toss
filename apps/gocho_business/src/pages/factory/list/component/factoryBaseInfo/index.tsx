import { FunctionComponent } from "react";
import { FiMap } from "react-icons/fi";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";

import { COLORS } from "shared-style/color";

import { CommonRoundButton, CommonStatusChip } from "@/components/common";

import { cssObj } from "./style";
import { FactoryBaseInfoProps } from "./type";
import { ADDRESS_SCRIPT_URL } from "./constant";

export const FactoryBaseInfo: FunctionComponent<FactoryBaseInfoProps> = ({ register, setValue }) => {
  const open = useDaumPostcodePopup(ADDRESS_SCRIPT_URL);

  return (
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
          onClickHandler={() =>
            open({
              onComplete: (t: Address) => {
                setValue("address", t.address);
              },
            })
          }
          backgoundColor={COLORS.BLUE_FIRST30}
        />
        <button
          type="button"
          css={cssObj.addrOpener}
          onClick={(buttonClickEvent) => {
            buttonClickEvent.stopPropagation();
            open({
              onComplete: (t: Address) => {
                setValue("address", t.address);
              },
            });
          }}
        >
          <input {...register("address", { required: true })} disabled css={cssObj.textInput} placeholder="공장주소" />
        </button>
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
};
