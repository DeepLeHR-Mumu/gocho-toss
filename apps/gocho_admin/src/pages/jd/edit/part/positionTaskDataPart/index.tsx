import { ChangeEvent, FunctionComponent, useState } from "react";
import { CheckLabel } from "../../component/checkLabel";
import {
  deletePlaceButton,
  enterNotice,
  flexBox,
  hireNumberButton,
  inputBox,
  inputContainer,
  inputTitle,
  selectBox,
  smallInputBox,
  smallInputContainer,
  textareaBox,
} from "./style";
import { contractTypeArr, placeArr, placeTypeArr, rotationArr, taskArr } from "./constant";
import { PositionBoxProps } from "./type";

export const PositionTaskDataPart: FunctionComponent<PositionBoxProps> = ({ id, index, jobForm }) => {
  const [bigPlace, setBigPlace] = useState<string>();
  const [smallPlace, setSmallPlace] = useState<string>();

  const isConversionDisabled =
    jobForm.watch("position_arr")[index].contract_type !== "인턴" &&
    jobForm.watch("position_arr")[index].contract_type !== "계약>정규";

  const deletePlaceHandler = (place: string) => {
    jobForm.setValue(`position_arr.${index}.place.address_arr`, [
      ...(jobForm.watch("position_arr")[index].place.address_arr?.filter((element) => {
        return element !== place;
      }) || []),
    ]);
  };
  return (
    <>
      <div css={inputContainer}>
        <strong css={inputTitle}>계약 형태 *</strong>
        {contractTypeArr.map((contractName) => {
          return (
            <CheckLabel
              key={`${contractName}${id}`}
              register={jobForm.register}
              index={index}
              field="contract_type"
              value={contractName}
              watch={jobForm.watch("position_arr")[index].contract_type}
            />
          );
        })}
        <div css={smallInputContainer}>
          <strong css={inputTitle}>전환율</strong>
          <input
            type="number"
            css={smallInputBox(isConversionDisabled)}
            {...jobForm.register(`position_arr.${index}.conversion_rate`)}
            disabled={isConversionDisabled}
          />
        </div>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>채용 직무 *</strong>
        <select css={selectBox} {...jobForm.register(`position_arr.${index}.task_main`, { required: true })}>
          <option value="">1차직무 선택 ▼</option>
          {taskArr.map((task) => {
            return (
              <option key={`${id}${task.mainTask}`} value={task.mainTask}>
                {task.mainTask}
              </option>
            );
          })}
        </select>
        <select
          css={selectBox}
          multiple
          {...jobForm.register(`position_arr.${index}.task_sub_arr`, { required: true })}
        >
          <option value="" disabled>
            2차직무 선택 ▼
          </option>
          {taskArr.map((task) => {
            const isMainTask = jobForm.watch("position_arr")[index].task_main === task.mainTask;
            if (isMainTask)
              return task.subTaskArr.map((subTask) => {
                return (
                  <option key={`${id}${subTask}`} value={subTask}>
                    {subTask}
                  </option>
                );
              });
            return null;
          })}
        </select>
        <p css={enterNotice}>
          1차 직무 선택 시 2차 직무가 표시됩니다. <br />
          Ctrl키를 누른 채로 중복 선택이 가능합니다.
        </p>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>세부 직무 내용 *</strong>
        <textarea
          css={textareaBox}
          {...jobForm.register(`position_arr.${index}.task_detail_arr`, { required: true })}
        />
        <p css={enterNotice}>엔터로 구분해주세요.</p>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>교대 형태</strong>
        <select css={selectBox} multiple {...jobForm.register(`position_arr.${index}.rotation_arr`)}>
          <option value="" disabled>
            교대형태 선택 ▼
          </option>
          {rotationArr.map((rotation) => {
            return (
              <option key={`${id}${rotation.data}`} value={rotation.data}>
                {rotation.name}
              </option>
            );
          })}
        </select>
        <p css={enterNotice}>
          Ctrl키를 누른 채로 중복 선택이 가능합니다. <br />
          해당되는 교대 형태가 없다면 아래 &apos;기타 교대 형태&apos; 에 입력해주세요.
        </p>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>기타 교대 형태</strong>
        <input css={inputBox} {...jobForm.register(`position_arr.${index}.rotation_etc`)} />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>근무지 종류 *</strong>
        <select css={selectBox} {...jobForm.register(`position_arr.${index}.place.type`, { required: true })}>
          <option value="" disabled>
            근무지 종류 선택 ▼
          </option>
          {placeTypeArr.map((placeType) => {
            return (
              <option key={`${id}${placeType}`} value={placeType}>
                {placeType}
              </option>
            );
          })}
        </select>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>일반 근무지</strong>
        <select
          css={selectBox}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setBigPlace(e.target.value);
          }}
        >
          <option value="">도/시 선택 ▼</option>
          {placeArr.map((place) => {
            return (
              <option key={`${id}${place}`} value={place}>
                {place}
              </option>
            );
          })}
        </select>
        <input
          css={inputBox}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSmallPlace(e.target.value);
          }}
        />
        <button
          type="button"
          css={hireNumberButton}
          onClick={() => {
            jobForm.setValue(`position_arr.${index}.place.address_arr`, [
              ...(jobForm.watch("position_arr")[index].place.address_arr || []),
              `${bigPlace} ${smallPlace}`,
            ]);
          }}
        >
          일반 근무지 추가
        </button>
      </div>
      <div css={flexBox}>
        {jobForm.watch("position_arr")[index].place.address_arr?.map((place) => {
          return (
            <div key={`${id}${place}`} css={inputContainer}>
              {place}
              <button
                type="button"
                css={deletePlaceButton}
                onClick={() => {
                  return deletePlaceHandler(place);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>기타 근무지</strong>
        <input css={inputBox} {...jobForm.register(`position_arr.${index}.place.etc`)} />
        <p css={enterNotice}>전국/해외/기타일 경우 입력</p>
      </div>
    </>
  );
};
