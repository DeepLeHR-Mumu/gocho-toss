import { ChangeEvent, FunctionComponent, useState } from "react";
import { RiAddFill, RiCloseFill } from "react-icons/ri";

import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
import { CheckBoxWithDesc } from "shared-ui/common/atom/checkbox_desc";

import { contractTypeArr, placeArr, placeTypeArr, rotationArr, taskArr } from "./constant";
import { PositionBoxProps } from "./type";
import { cssObj } from "./style";

export const PositionTaskDataPart: FunctionComponent<PositionBoxProps> = ({ id, index, jobForm }) => {
  const [bigPlace, setBigPlace] = useState<string>("");
  const [smallPlace, setSmallPlace] = useState<string>("");
  const { watch, setValue } = jobForm;

  const isConversionDisabled =
    watch("position_arr")[index].contract_type !== "인턴" && watch("position_arr")[index].contract_type !== "계약>정규";

  const deletePlaceHandler = (place: string) => {
    setValue(`position_arr.${index}.place.address_arr`, [
      ...(watch("position_arr")[index].place.address_arr?.filter((element) => element !== place) || []),
    ]);
  };

  const mainTask = taskArr.find((task) => watch("position_arr")[index].task_main === task.mainTask);

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.container}>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>계약 형태</strong>
            <div css={cssObj.flexBox}>
              {contractTypeArr.map((contractName) => (
                <SharedRadioButton
                  key={`${contractName}${index}`}
                  registerObj={jobForm.register(`position_arr.${index}.contract_type`)}
                  value={contractName}
                  id={`${contractName}${index}`}
                >
                  <p css={cssObj.radioDesc}>{contractName}</p>
                </SharedRadioButton>
              ))}
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>전환율</strong>
            <div css={cssObj.flexBox}>
              <label htmlFor={`conversion_rate.${index}`} css={cssObj.conversionLabel}>
                <input
                  id={`conversion_rate.${index}`}
                  type="number"
                  css={isConversionDisabled ? cssObj.disabledConversionInput : cssObj.conversionInput}
                  {...jobForm.register(`position_arr.${index}.conversion_rate`)}
                  disabled={isConversionDisabled}
                />
                <p css={cssObj.conversionDesc}>%</p>
              </label>
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>교대 형태</strong>
            <div css={cssObj.flexBox}>
              {rotationArr.map((rotation) => (
                <CheckBoxWithDesc
                  registerObj={{ ...jobForm.register(`position_arr.${index}.rotation_arr`) }}
                  key={`${id}${rotation.data}`}
                  desc={rotation.name}
                  value={rotation.data}
                  id={`${id}${rotation.data}`}
                />
              ))}
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>기타 교대 형태</strong>
            <div>
              <input css={cssObj.inputCSS} {...jobForm.register(`position_arr.${index}.rotation_etc`)} />
            </div>
          </li>
          <li>
            <strong css={cssObj.requiredTitle}>근무지 종류</strong>
            <div>
              <select
                css={cssObj.selectCSS}
                {...jobForm.register(`position_arr.${index}.place.type`, { required: true })}
              >
                <option value="" disabled>
                  근무지 종류 선택 ▼
                </option>
                {placeTypeArr.map((placeType) => (
                  <option key={`${id}${placeType}`} value={placeType}>
                    {placeType}
                  </option>
                ))}
              </select>
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>일반 및 기타 근무지</strong>
            <div>
              <strong css={cssObj.subTitle}>일반 근무지</strong>
              <div css={cssObj.selectBox}>
                <select
                  css={cssObj.selectCSS}
                  onChange={(onChangeEvent: ChangeEvent<HTMLSelectElement>) => {
                    setBigPlace(onChangeEvent.target.value);
                  }}
                >
                  <option value="">도/시 선택 ▼</option>
                  {placeArr.map((place) => (
                    <option key={`${id}${place}`} value={place}>
                      {place}
                    </option>
                  ))}
                </select>
                <input
                  css={cssObj.inputCSS}
                  onChange={(onChangeEvent: ChangeEvent<HTMLInputElement>) => {
                    setSmallPlace(onChangeEvent.target.value);
                  }}
                />
                <button
                  css={bigPlace === "" || smallPlace === "" ? cssObj.disableAddButton : cssObj.addButton}
                  type="button"
                  aria-label={`${bigPlace} ${smallPlace} 추가`}
                  onClick={() => {
                    jobForm.setValue(`position_arr.${index}.place.address_arr`, [
                      ...(jobForm.watch("position_arr")[index].place.address_arr || []),
                      `${bigPlace} ${smallPlace}`,
                    ]);
                  }}
                  disabled={bigPlace === "" || smallPlace === ""}
                >
                  <RiAddFill />
                </button>
              </div>
              <ul css={cssObj.placeBox}>
                {/* TODO : 중복데이터 처리 */}
                {jobForm.watch("position_arr")[index].place.address_arr?.map((place, positionIndex) => {
                  const key = `${id}${place}${positionIndex}`;
                  return (
                    <button
                      css={cssObj.placeButtonCSS}
                      key={key}
                      type="button"
                      onClick={() => deletePlaceHandler(place)}
                    >
                      {place} <RiCloseFill />
                    </button>
                  );
                })}
              </ul>
            </div>
            <div>
              <strong css={cssObj.subTitle}>기타 근무지</strong>
              <div css={cssObj.placeBox}>
                <p css={cssObj.textareaWarning}>전국/해외/기타일 경우 입력해주세요.</p>
                <input css={cssObj.inputCSS} {...jobForm.register(`position_arr.${index}.place.etc`)} />
              </div>
            </div>
          </li>
        </ul>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>채용 직무</strong>
            <div>
              <strong css={cssObj.subTitle}>1차직무 선택</strong>
              <div css={cssObj.flexBox}>
                {taskArr.map((task) => (
                  <SharedRadioButton
                    key={`${id}${task.mainTask}`}
                    registerObj={{ ...jobForm.register(`position_arr.${index}.task_main`, { required: true }) }}
                    value={task.mainTask}
                    id={`${id}${task.mainTask}`}
                  >
                    <p css={cssObj.radioDesc}>{task.mainTask}</p>
                  </SharedRadioButton>
                ))}
              </div>
            </div>
            <div>
              <strong css={cssObj.subTitle}>2차직무 선택</strong>
              <p css={cssObj.textareaWarning}>중복선택이 가능합니다.</p>
              <div css={cssObj.flexBox}>
                {mainTask?.subTaskArr.map((subTask) => (
                  <CheckBoxWithDesc
                    key={`${id}${subTask}`}
                    registerObj={{ ...jobForm.register(`position_arr.${index}.task_sub_arr`, { required: true }) }}
                    desc={subTask}
                    value={subTask}
                    id={subTask}
                  />
                ))}
              </div>
            </div>
          </li>
          <li>
            <strong css={cssObj.requiredTitle}>세부 직무 내용</strong>
            <div css={cssObj.textareaBox}>
              <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
              <textarea
                css={cssObj.textarea}
                {...jobForm.register(`position_arr.${index}.task_detail_arr`, { required: true })}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
