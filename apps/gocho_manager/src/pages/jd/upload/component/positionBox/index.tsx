import { ChangeEvent, FunctionComponent, useState } from "react";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { CheckLabel } from "../checkLabel";
import {
  buttonContainer,
  copyPositionButton,
  deletePlaceButton,
  deletePositionButton,
  enterNotice,
  flexBox,
  hireNumberButton,
  inputBox,
  inputContainer,
  inputLabel,
  inputTitle,
  positionContainer,
  positionTitle,
  searchBox,
  selectBox,
  smallInputBox,
  smallInputContainer,
  textareaBox,
} from "./style";
import {
  certificateArr,
  contractTypeArr,
  placeArr,
  placeTypeArr,
  requiredExpArr,
  rotationArr,
  taskArr,
} from "./constant";
import { PositionBoxProps } from "./type";

export const PositionBox: FunctionComponent<PositionBoxProps> = ({
  id,
  index,
  register,
  watch,
  yearDisable,
  conversionDisable,
  setValue,
  append,
  remove,
}) => {
  const [certiSearchWord, setCertiSearchWord] = useState<string>("");
  const [bigPlace, setBigPlace] = useState<string>();
  const [smallPlace, setSmallPlace] = useState<string>();

  return (
    <li css={positionContainer}>
      <h3 css={positionTitle}>직무 내용</h3>
      <div css={inputContainer}>
        <strong css={inputTitle}>학력 조건 *</strong>
        <label css={inputLabel} htmlFor={`middle${index}`}>
          <input type="checkbox" id={`middle${index}`} {...register(`position_arr.${index}.middle`)} />
          <CheckBox isChecked={watch("position_arr")[index].middle} />
          중졸
        </label>
        <label css={inputLabel} htmlFor={`high${index}`}>
          <input type="checkbox" id={`high${index}`} {...register(`position_arr.${index}.high`)} />
          <CheckBox isChecked={watch("position_arr")[index].high} />
          고졸
        </label>
        <label css={inputLabel} htmlFor={`college${index}`}>
          <input type="checkbox" id={`college${index}`} {...register(`position_arr.${index}.college`)} />
          <CheckBox isChecked={watch("position_arr")[index].college} />
          초대졸
        </label>
        <label css={inputLabel} htmlFor={`four${index}`}>
          <input type="checkbox" id={`four${index}`} {...register(`position_arr.${index}.four`)} />
          <CheckBox isChecked={watch("position_arr")[index].four} />
          4년제
        </label>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>경력 조건 *</strong>
        {requiredExpArr.map((expName) => {
          return (
            <CheckLabel
              key={`${expName}${id}`}
              register={register}
              index={index}
              field="required_exp"
              value={expName}
              watch={watch("position_arr")[index].required_exp}
            />
          );
        })}
        <div css={smallInputContainer}>
          <strong css={inputTitle}>경력 기간</strong>
          <input
            type="number"
            css={smallInputBox(yearDisable)}
            {...register(`position_arr.${index}.min_year`, { valueAsNumber: true })}
            disabled={yearDisable}
          />
          년 이상
          <input
            type="number"
            css={smallInputBox(yearDisable)}
            {...register(`position_arr.${index}.max_year`, { valueAsNumber: true })}
            disabled={yearDisable}
          />
          년 이하
        </div>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>기타 조건</strong>
        <textarea css={textareaBox} {...register(`position_arr.${index}.required_etc_arr`)} />
        <p css={enterNotice}>엔터로 구분해주세요.</p>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>계약 형태 *</strong>
        {contractTypeArr.map((contractName) => {
          return (
            <CheckLabel
              key={`${contractName}${id}`}
              register={register}
              index={index}
              field="contract_type"
              value={contractName}
              watch={watch("position_arr")[index].contract_type}
            />
          );
        })}
        <div css={smallInputContainer}>
          <strong css={inputTitle}>전환율</strong>
          <input
            type="number"
            css={smallInputBox(conversionDisable)}
            {...register(`position_arr.${index}.conversion_rate`)}
            disabled={conversionDisable}
          />
        </div>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>채용 직무 *</strong>
        <select css={selectBox} {...register(`position_arr.${index}.task_main`, { required: true })}>
          <option value="">1차직무 선택 ▼</option>
          {taskArr.map((task) => {
            return (
              <option key={`${id}${task.mainTask}`} value={task.mainTask}>
                {task.mainTask}
              </option>
            );
          })}
        </select>
        <select css={selectBox} multiple {...register(`position_arr.${index}.task_sub_arr`, { required: true })}>
          <option value="" disabled>
            2차직무 선택 ▼
          </option>
          {taskArr.map((task) => {
            const isMainTask = watch("position_arr")[index].task_main === task.mainTask;
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
        <textarea css={textareaBox} {...register(`position_arr.${index}.task_detail_arr`, { required: true })} />
        <p css={enterNotice}>엔터로 구분해주세요.</p>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>교대 형태</strong>
        <select css={selectBox} multiple {...register(`position_arr.${index}.rotation_arr`)}>
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
        <input css={inputBox} {...register(`position_arr.${index}.rotation_etc`)} />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>근무지 종류 *</strong>
        <select css={selectBox} {...register(`position_arr.${index}.place.type`, { required: true })}>
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
            setValue(`position_arr.${index}.place.address_arr`, [
              ...watch("position_arr")[index].place.address_arr,
              `${bigPlace} ${smallPlace}`,
            ]);
          }}
        >
          일반 근무지 추가
        </button>
      </div>
      <div css={flexBox}>
        {watch("position_arr")[index].place.address_arr.map((place) => {
          return (
            <div key={`${id}${place}`} css={inputContainer}>
              {place}
              <button
                type="button"
                css={deletePlaceButton}
                onClick={() => {
                  setValue(`position_arr.${index}.place.address_arr`, [
                    ...watch("position_arr")[index].place.address_arr.filter((element) => {
                      return element !== place;
                    }),
                  ]);
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
        <input css={inputBox} {...register(`position_arr.${index}.place.etc`)} />
        <p css={enterNotice}>전국/해외/기타일 경우 입력</p>
      </div>

      <div css={inputContainer}>
        <strong css={inputTitle}>명수 *</strong>
        <button
          type="button"
          css={hireNumberButton}
          onClick={() => {
            setValue(`position_arr.${index}.hire_number`, -1);
          }}
        >
          0명 채용
        </button>
        <button
          type="button"
          css={hireNumberButton}
          onClick={() => {
            setValue(`position_arr.${index}.hire_number`, -2);
          }}
        >
          00명 채용
        </button>
        <button
          type="button"
          css={hireNumberButton}
          onClick={() => {
            setValue(`position_arr.${index}.hire_number`, -3);
          }}
        >
          000명 채용
        </button>
        <input
          type="number"
          css={smallInputBox(false)}
          {...register(`position_arr.${index}.hire_number`, { valueAsNumber: true, required: true })}
        />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>급여 *</strong>
        <textarea css={textareaBox} {...register(`position_arr.${index}.pay_arr`, { required: true })} />
        <p css={enterNotice}>엔터로 구분해주세요.</p>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>우대 자격증</strong>
        <input
          css={searchBox}
          type="text"
          onChange={(e) => {
            setCertiSearchWord(e.target.value);
          }}
        />
        <select
          value=""
          css={selectBox}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setValue(`position_arr.${index}.preferred_certi_arr`, [
              ...watch("position_arr")[index].preferred_certi_arr,
              e.target.value,
            ]);
            setCertiSearchWord("");
          }}
        >
          <option value="" disabled>
            자격증 선택 ▼
          </option>
          {certificateArr
            .filter((prevCerti) => {
              return prevCerti.includes(certiSearchWord);
            })
            .map((certi) => {
              return (
                <option key={`${id}${certi}`} value={certi}>
                  {certi}
                </option>
              );
            })}
        </select>
      </div>
      <div css={flexBox}>
        {watch("position_arr")[index].preferred_certi_arr.map((certi) => {
          return (
            <div key={`${id}${certi}`} css={inputContainer}>
              {certi}
              <button
                type="button"
                css={deletePlaceButton}
                onClick={() => {
                  setValue(`position_arr.${index}.preferred_certi_arr`, [
                    ...watch("position_arr")[index].preferred_certi_arr.filter((element) => {
                      return element !== certi;
                    }),
                  ]);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>기타 우대 사항</strong>
        <textarea css={textareaBox} {...register(`position_arr.${index}.preferred_etc_arr`)} />
        <p css={enterNotice}>엔터로 구분해주세요.</p>
      </div>

      <div css={buttonContainer}>
        <button
          type="button"
          css={copyPositionButton}
          onClick={() => {
            return append({ ...watch("position_arr")[index] });
          }}
        >
          해당 직무 복사
        </button>
        <button
          css={deletePositionButton}
          type="button"
          onClick={() => {
            return remove(index);
          }}
        >
          직무 삭제
        </button>
      </div>
    </li>
  );
};
