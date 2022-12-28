import { FunctionComponent } from "react";
import { FiUsers } from "react-icons/fi";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { BiBuildingHouse, BiBus } from "react-icons/bi";

import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";

import { cssObj } from "./style";
import { FactoryDetailInfoProps } from "./type";

export const FactoryDetailInfo: FunctionComponent<FactoryDetailInfoProps> = ({ formObj, totalWorkerNumber }) => {
  const { register, formState } = formObj;
  return (
    <div css={cssObj.gapContainer} data-testid="factory/list/FactoryDetailInfo">
      <div css={cssObj.container}>
        <div css={cssObj.box}>
          <p css={cssObj.infoText()}>임직원</p>
          <div css={cssObj.infoContainer}>
            <div css={cssObj.iconBox}>
              <FiUsers />
            </div>
            <p css={cssObj.totalWorkerNumber}>{totalWorkerNumber === 0 ? "자동계산" : `${totalWorkerNumber} 명`}</p>
          </div>
        </div>
        <div css={cssObj.box}>
          <p
            css={cssObj.infoText(
              formState.errors?.male_number?.type === "required" || formState.errors?.female_number?.type === "required"
            )}
          >
            남녀비율
          </p>
          <div css={cssObj.manWomanContainer}>
            <div css={cssObj.flexContainer}>
              <div css={cssObj.iconBox}>
                <AiOutlineMan />
              </div>
              <div css={cssObj.flexContainer}>
                <input
                  {...register("male_number", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  placeholder="남성"
                  css={cssObj.manWomanInput(formState.errors.male_number?.type === "required")}
                />
                <p css={cssObj.number}>명</p>
              </div>
            </div>
            <div css={cssObj.flexContainer}>
              <div css={cssObj.womanIconBox}>
                <AiOutlineWoman />
              </div>
              <div css={cssObj.flexContainer}>
                <input
                  {...register("female_number", { required: true, valueAsNumber: true })}
                  placeholder="여성"
                  css={cssObj.manWomanInput(formState.errors.female_number?.type === "required")}
                />
                <p css={cssObj.number}>명</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div css={cssObj.container}>
        <div css={cssObj.box}>
          <p css={cssObj.infoText(formState.errors?.bus_bool?.type === "required")}>통근버스</p>
          <div css={cssObj.infoContainer}>
            <div css={cssObj.iconBox}>
              <BiBus />
            </div>
            <div css={cssObj.trueFalseContainer}>
              <SharedRadioButton id="busTrue" value="true" registerObj={register("bus_bool", { required: true })}>
                <p css={cssObj.radioText}>있음</p>
              </SharedRadioButton>
              <SharedRadioButton id="busFalse" value="false" registerObj={register("bus_bool", { required: true })}>
                <p css={cssObj.radioText}>없음</p>
              </SharedRadioButton>
            </div>
          </div>
          <input
            {...register("bus_etc", { maxLength: 70 })}
            css={cssObj.etcInfoBox}
            placeholder="보충 설명(선택)"
            maxLength={70}
          />
        </div>
        <div css={cssObj.box}>
          <p css={cssObj.infoText(formState.errors?.dormitory_bool?.type === "required")}>기숙사</p>
          <div css={cssObj.infoContainer}>
            <div css={cssObj.iconBox}>
              <BiBuildingHouse />
            </div>
            <div css={cssObj.trueFalseContainer}>
              <SharedRadioButton
                id="dormitoryTrue"
                value="true"
                registerObj={register("dormitory_bool", { required: true })}
              >
                <p css={cssObj.radioText}>있음</p>
              </SharedRadioButton>
              <SharedRadioButton
                id="dormitoryFalse"
                value="false"
                registerObj={register("dormitory_bool", { required: true })}
              >
                <p css={cssObj.radioText}>없음</p>
              </SharedRadioButton>
            </div>
          </div>
          <input
            {...register("dormitory_etc", { maxLength: 70 })}
            css={cssObj.etcInfoBox}
            placeholder="보충 설명(선택)"
            maxLength={70}
          />
        </div>
      </div>
    </div>
  );
};
