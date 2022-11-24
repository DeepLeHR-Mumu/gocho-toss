import { ChangeEvent, FunctionComponent, useState } from "react";

import {
  buttonContainer,
  copyPositionButton,
  deletePlaceButton,
  deletePositionButton,
  enterNotice,
  flexBox,
  hireNumberButton,
  inputContainer,
  inputTitle,
  searchBox,
  selectBox,
  smallInputBox,
  textareaBox,
} from "./style";
import { certificateArr } from "./constant";
import { PositionBoxProps } from "./type";

export const PositionEtcDataPart: FunctionComponent<PositionBoxProps> = ({ id, index, jobForm, append, remove }) => {
  const [certiSearchWord, setCertiSearchWord] = useState<string>("");

  return (
    <>
      <div css={inputContainer}>
        <strong css={inputTitle}>명수 *</strong>
        <button
          type="button"
          css={hireNumberButton}
          onClick={() => {
            jobForm.setValue(`position_arr.${index}.hire_number`, -1);
          }}
        >
          0명 채용
        </button>
        <button
          type="button"
          css={hireNumberButton}
          onClick={() => {
            jobForm.setValue(`position_arr.${index}.hire_number`, -2);
          }}
        >
          00명 채용
        </button>
        <button
          type="button"
          css={hireNumberButton}
          onClick={() => {
            jobForm.setValue(`position_arr.${index}.hire_number`, -3);
          }}
        >
          000명 채용
        </button>
        <input
          type="number"
          css={smallInputBox(false)}
          {...jobForm.register(`position_arr.${index}.hire_number`, { valueAsNumber: true, required: true })}
        />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>급여 *</strong>
        <textarea css={textareaBox} {...jobForm.register(`position_arr.${index}.pay_arr`, { required: true })} />
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
            jobForm.setValue(`position_arr.${index}.preferred_certi_arr`, [
              ...jobForm.watch("position_arr")[index].preferred_certi_arr,
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
        {jobForm.watch("position_arr")[index].preferred_certi_arr.map((certi) => {
          return (
            <div key={`${id}${certi}`} css={inputContainer}>
              {certi}
              <button
                type="button"
                css={deletePlaceButton}
                onClick={() => {
                  jobForm.setValue(`position_arr.${index}.preferred_certi_arr`, [
                    ...jobForm.watch("position_arr")[index].preferred_certi_arr.filter((element) => {
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
        <textarea css={textareaBox} {...jobForm.register(`position_arr.${index}.preferred_etc_arr`)} />
        <p css={enterNotice}>엔터로 구분해주세요.</p>
      </div>

      <div css={buttonContainer}>
        <button
          type="button"
          css={copyPositionButton}
          onClick={() => {
            return append({ ...jobForm.watch("position_arr")[index] });
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
    </>
  );
};
